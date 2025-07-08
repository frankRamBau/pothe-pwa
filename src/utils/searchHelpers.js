// src/utils/searchHelpers.js

/**
 * Normaliza texto para búsqueda (quita acentos, convierte a minúsculas)
 * @param {string} text - Texto a normalizar
 * @returns {string} Texto normalizado
 */
export const normalizeText = (text) => {
  if (!text || typeof text !== 'string') return '';
  
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Quita acentos
    .trim();
};

/**
 * Crea una expresión regular para búsqueda flexible
 * @param {string} searchTerm - Término de búsqueda
 * @returns {RegExp|null} Expresión regular o null si no es válido
 */
export const createSearchRegex = (searchTerm) => {
  if (!searchTerm || typeof searchTerm !== 'string') return null;
  
  try {
    const normalizedTerm = normalizeText(searchTerm);
    // Permite espacios entre caracteres para búsqueda más flexible
    const pattern = normalizedTerm.split('').join('.*');
    return new RegExp(pattern, 'i');
  } catch (error) {
    console.warn('Error creating search regex:', error);
    return null;
  }
};

/**
 * Verifica si un texto coincide con el término de búsqueda
 * @param {string} text - Texto donde buscar
 * @param {string} searchTerm - Término de búsqueda
 * @param {boolean} useRegex - Si usar regex para búsqueda flexible
 * @returns {boolean} True si hay coincidencia
 */
export const matchesSearch = (text, searchTerm, useRegex = false) => {
  if (!text || !searchTerm) return false;
  
  const normalizedText = normalizeText(text);
  const normalizedSearch = normalizeText(searchTerm);
  
  if (useRegex) {
    const regex = createSearchRegex(searchTerm);
    return regex ? regex.test(normalizedText) : false;
  }
  
  return normalizedText.includes(normalizedSearch);
};

/**
 * Busca en múltiples campos de un objeto
 * @param {Object} item - Objeto donde buscar
 * @param {string} searchTerm - Término de búsqueda
 * @param {Array} fields - Campos donde buscar
 * @param {boolean} useRegex - Si usar regex para búsqueda flexible
 * @returns {boolean} True si encuentra coincidencia en algún campo
 */
export const searchInFields = (item, searchTerm, fields = [], useRegex = false) => {
  if (!item || !searchTerm || !fields.length) return false;
  
  return fields.some(field => {
    const value = getNestedValue(item, field);
    return matchesSearch(value, searchTerm, useRegex);
  });
};

/**
 * Obtiene valor anidado de un objeto usando dot notation
 * @param {Object} obj - Objeto
 * @param {string} path - Path del campo (ej: 'category.name')
 * @returns {any} Valor del campo o undefined
 */
export const getNestedValue = (obj, path) => {
  if (!obj || !path) return undefined;
  
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
};

/**
 * Resalta coincidencias en el texto
 * @param {string} text - Texto original
 * @param {string} searchTerm - Término de búsqueda
 * @param {string} highlightClass - Clase CSS para resaltado
 * @returns {string} HTML con coincidencias resaltadas
 */
export const highlightMatches = (text, searchTerm, highlightClass = 'bg-yellow-200') => {
  if (!text || !searchTerm) return text;
  
  const normalizedText = text.toLowerCase();
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  if (!normalizedSearch) return text;
  
  try {
    const regex = new RegExp(`(${normalizedSearch})`, 'gi');
    return text.replace(regex, `<span class="${highlightClass}">$1</span>`);
  } catch (error) {
    console.warn('Error highlighting matches:', error);
    return text;
  }
};

/**
 * Obtiene sugerencias de búsqueda basadas en productos
 * @param {Array} products - Array de productos
 * @param {string} searchTerm - Término de búsqueda actual
 * @param {number} limit - Número máximo de sugerencias
 * @returns {Array} Array de sugerencias
 */
export const getSearchSuggestions = (products, searchTerm, limit = 5) => {
  if (!products || !Array.isArray(products) || !searchTerm) return [];
  
  const normalizedSearch = normalizeText(searchTerm);
  if (normalizedSearch.length < 2) return [];
  
  const suggestions = new Set();
  
  products.forEach(product => {
    // Agregar nombres que empiecen con el término
    if (normalizeText(product.name).startsWith(normalizedSearch)) {
      suggestions.add(product.name);
    }
    
    // Agregar categorías que empiecen con el término
    if (product.category && normalizeText(product.category).startsWith(normalizedSearch)) {
      suggestions.add(product.category);
    }
    
    // Agregar subcategorías que empiecen con el término
    if (product.subcategory && normalizeText(product.subcategory).startsWith(normalizedSearch)) {
      suggestions.add(product.subcategory);
    }
  });
  
  return Array.from(suggestions)
    .slice(0, limit)
    .sort((a, b) => a.length - b.length); // Ordenar por longitud (más específico primero)
};

/**
 * Analiza una consulta de búsqueda para extraer filtros
 * @param {string} query - Consulta de búsqueda
 * @returns {Object} Objeto con términos de búsqueda y filtros detectados
 */
export const parseSearchQuery = (query) => {
  if (!query || typeof query !== 'string') {
    return {
      terms: [],
      filters: {},
      originalQuery: ''
    };
  }
  
  const originalQuery = query.trim();
  const normalizedQuery = normalizeText(originalQuery);
  
  // Detectar filtros especiales
  const filters = {};
  let cleanQuery = normalizedQuery;
  
  // Detectar categorías comunes
  const categoryKeywords = {
    'helado': 'helados',
    'helados': 'helados',
    'nieve': 'nieves',  
    'nieves': 'nieves',
    'paleta': 'paletas',
    'paletas': 'paletas'
  };
  
  Object.entries(categoryKeywords).forEach(([keyword, category]) => {
    if (cleanQuery.includes(keyword)) {
      filters.category = category;
      cleanQuery = cleanQuery.replace(new RegExp(keyword, 'g'), '').trim();
    }
  });
  
  // Detectar filtros especiales
  if (cleanQuery.includes('pet') || cleanQuery.includes('mascota')) {
    filters.petFriendly = true;
    cleanQuery = cleanQuery.replace(/pet|mascota/g, '').trim();
  }
  
  if (cleanQuery.includes('temporada') || cleanQuery.includes('seasonal')) {
    filters.seasonal = true;
    cleanQuery = cleanQuery.replace(/temporada|seasonal/g, '').trim();
  }
  
  // Separar términos restantes
  const terms = cleanQuery
    .split(/\s+/)
    .filter(term => term.length > 0);
  
  return {
    terms,
    filters,
    originalQuery
  };
};

/**
 * Busca productos en múltiples campos y aplica filtros.
 * @param {Array} products - Array de productos
 * @param {string} searchTerm - Término de búsqueda
 * @param {Object} options - Opciones para búsqueda, ejemplo: { useRegex: boolean, filters: Object }
 * @returns {Array} Productos que coinciden con la búsqueda y filtros
 */
export const searchProducts = (products, searchTerm, options = {}) => {
  if (!products || !Array.isArray(products)) return [];
  if (!searchTerm || searchTerm.trim() === '') return products;
  
  const { useRegex = false, filters = {} } = options;
  const normalizedSearchTerm = normalizeText(searchTerm);
  
  // Aplicar filtros previos si existen
  let filteredProducts = products;
  
  if (filters.category && filters.category !== 'todos') {
    filteredProducts = filteredProducts.filter(p => p.category?.toLowerCase() === filters.category.toLowerCase());
  }
  
  if (filters.petFriendly === true) {
    filteredProducts = filteredProducts.filter(p => p.petFriendly === true);
  }
  
  if (filters.seasonal === true) {
    filteredProducts = filteredProducts.filter(p => p.seasonal === true);
  }
  
  // Buscar en campos comunes
  const fieldsToSearch = ['name', 'description', 'category', 'subcategory'];
  
  return filteredProducts.filter(product =>
    searchInFields(product, normalizedSearchTerm, fieldsToSearch, useRegex)
  );
};