// /**
//  * Product Helpers - Funciones de filtrado y manipulación de productos
//  * PWA Pöthe - Helados Artesanales
//  */

// // Categorías principales de productos
// export const PRODUCT_CATEGORIES = {
//   HELADO_GOURMET: 'helado-gourmet',
//   HELADO_PREMIUM: 'helado-premium', 
//   HELADO_TRADICIONAL: 'helado-tradicional',
//   NIEVE_ARTESANAL: 'nieve-artesanal',
//   NIEVE_ALCOHOL: 'nieve-alcohol',
//   TEMPORADA: 'temporada',
//   PALETAS: 'paletas',
//   PET_FRIENDLY: 'pet-friendly'
// };

// // Tipos principales para filtros
// export const PRODUCT_TYPES = {
//   HELADOS: 'helados',
//   NIEVES: 'nieves', 
//   PALETAS: 'paletas',
//   PET_FRIENDLY: 'pet-friendly'
// };

// // Características especiales
// export const PRODUCT_FEATURES = {
//   SIN_AZUCAR: 'sin-azucar',
//   CON_ALCOHOL: 'con-alcohol',
//   VEGANO: 'vegano',
//   SIN_LACTOSA: 'sin-lactosa',
//   ALTO_PROTEINA: 'alto-proteina',
//   TEMPORADA: 'temporada',
//   PET_FRIENDLY: 'pet-friendly'
// };

// // Tamaños disponibles
// export const PRODUCT_SIZES = {
//   CHICO: { name: 'Chico', volume: '120ml', price: 35 },
//   MEDIANO: { name: 'Mediano', volume: '180ml', price: 50 },
//   GRANDE: { name: 'Grande', volume: '240ml', price: 65 },
//   MEDIO_LITRO: { name: 'Medio Litro', volume: '500ml', price: 120 },
//   UN_LITRO: { name: 'Un Litro', volume: '1000ml', price: 220 }
// };

// /**
//  * Filtra productos por categoría principal
//  * @param {Array} products - Array de productos
//  * @param {string} category - Categoría a filtrar
//  * @returns {Array} Productos filtrados
//  */
// export const filterByCategory = (products, category) => {
//   if (!category || category === 'all') return products;
  
//   return products.filter(product => 
//     product.category === category || 
//     product.categories?.includes(category)
//   );
// };

// /**
//  * Filtra productos por tipo principal (helados, nieves, paletas)
//  * @param {Array} products - Array de productos
//  * @param {string} type - Tipo a filtrar
//  * @returns {Array} Productos filtrados
//  */
// export const filterByType = (products, type) => {
//   if (!type || type === 'all') return products;
  
//   return products.filter(product => {
//     switch (type) {
//       case PRODUCT_TYPES.HELADOS:
//         return product.category?.includes('helado');
//       case PRODUCT_TYPES.NIEVES:
//         return product.category?.includes('nieve');
//       case PRODUCT_TYPES.PALETAS:
//         return product.category === PRODUCT_CATEGORIES.PALETAS;
//       case PRODUCT_TYPES.PET_FRIENDLY:
//         return product.features?.includes(PRODUCT_FEATURES.PET_FRIENDLY);
//       default:
//         return true;
//     }
//   });
// };

// /**
//  * Filtra productos por características especiales
//  * @param {Array} products - Array de productos
//  * @param {Array} features - Array de características a filtrar
//  * @returns {Array} Productos filtrados
//  */
// export const filterByFeatures = (products, features = []) => {
//   if (!features.length) return products;
  
//   return products.filter(product => 
//     features.every(feature => 
//       product.features?.includes(feature)
//     )
//   );
// };

// /**
//  * Filtra productos por disponibilidad
//  * @param {Array} products - Array de productos
//  * @param {boolean} availableOnly - Solo productos disponibles
//  * @returns {Array} Productos filtrados
//  */
// export const filterByAvailability = (products, availableOnly = false) => {
//   if (!availableOnly) return products;
  
//   return products.filter(product => 
//     product.available !== false && 
//     product.stock > 0
//   );
// };

// /**
//  * Filtra productos por rango de precio
//  * @param {Array} products - Array de productos
//  * @param {Object} priceRange - { min, max }
//  * @returns {Array} Productos filtrados
//  */
// export const filterByPriceRange = (products, priceRange) => {
//   if (!priceRange || (!priceRange.min && !priceRange.max)) return products;
  
//   return products.filter(product => {
//     const basePrice = product.sizes?.CHICO?.price || product.price || 0;
    
//     if (priceRange.min && basePrice < priceRange.min) return false;
//     if (priceRange.max && basePrice > priceRange.max) return false;
    
//     return true;
//   });
// };

// /**
//  * Filtra productos por temporada
//  * @param {Array} products - Array de productos
//  * @param {string} season - Temporada actual
//  * @returns {Array} Productos filtrados
//  */
// export const filterBySeason = (products, season) => {
//   if (!season) return products;
  
//   return products.filter(product => 
//     !product.seasonal || 
//     product.seasons?.includes(season) ||
//     product.category === PRODUCT_CATEGORIES.TEMPORADA
//   );
// };

// /**
//  * Aplica múltiples filtros a los productos
//  * @param {Array} products - Array de productos
//  * @param {Object} filters - Objeto con todos los filtros
//  * @returns {Array} Productos filtrados
//  */
// export const applyMultipleFilters = (products, filters = {}) => {
//   let filteredProducts = [...products];
  
//   // Filtrar por tipo principal
//   if (filters.type) {
//     filteredProducts = filterByType(filteredProducts, filters.type);
//   }
  
//   // Filtrar por categoría específica
//   if (filters.category) {
//     filteredProducts = filterByCategory(filteredProducts, filters.category);
//   }
  
//   // Filtrar por características
//   if (filters.features?.length) {
//     filteredProducts = filterByFeatures(filteredProducts, filters.features);
//   }
  
//   // Filtrar por disponibilidad
//   if (filters.availableOnly) {
//     filteredProducts = filterByAvailability(filteredProducts, true);
//   }
  
//   // Filtrar por precio
//   if (filters.priceRange) {
//     filteredProducts = filterByPriceRange(filteredProducts, filters.priceRange);
//   }
  
//   // Filtrar por temporada
//   if (filters.season) {
//     filteredProducts = filterBySeason(filteredProducts, filters.season);
//   }
  
//   return filteredProducts;
// };

// /**
//  * Ordena productos según diferentes criterios
//  * @param {Array} products - Array de productos
//  * @param {string} sortBy - Criterio de ordenamiento
//  * @param {string} order - 'asc' | 'desc'
//  * @returns {Array} Productos ordenados
//  */
// export const sortProducts = (products, sortBy = 'name', order = 'asc') => {
//   const sortedProducts = [...products];
  
//   sortedProducts.sort((a, b) => {
//     let valueA, valueB;
    
//     switch (sortBy) {
//       case 'name':
//         valueA = a.name.toLowerCase();
//         valueB = b.name.toLowerCase();
//         break;
//       case 'price':
//         valueA = a.sizes?.CHICO?.price || a.price || 0;
//         valueB = b.sizes?.CHICO?.price || b.price || 0;
//         break;
//       case 'rating':
//         valueA = a.rating || 0;
//         valueB = b.rating || 0;
//         break;
//       case 'popularity':
//         valueA = a.popularity || 0;
//         valueB = b.popularity || 0;
//         break;
//       case 'date':
//         valueA = new Date(a.createdAt || 0);
//         valueB = new Date(b.createdAt || 0);
//         break;
//       default:
//         valueA = a.name.toLowerCase();
//         valueB = b.name.toLowerCase();
//     }
    
//     if (valueA < valueB) return order === 'asc' ? -1 : 1;
//     if (valueA > valueB) return order === 'asc' ? 1 : -1;
//     return 0;
//   });
  
//   return sortedProducts;
// };

// /**
//  * Obtiene productos relacionados basados en categoría y características
//  * @param {Object} product - Producto de referencia
//  * @param {Array} allProducts - Todos los productos disponibles
//  * @param {number} limit - Número máximo de productos relacionados
//  * @returns {Array} Productos relacionados
//  */
// export const getRelatedProducts = (product, allProducts, limit = 4) => {
//   if (!product || !allProducts.length) return [];
  
//   // Filtrar productos de la misma categoría, excluyendo el producto actual
//   let related = allProducts.filter(p => 
//     p.id !== product.id && 
//     (p.category === product.category || 
//      p.categories?.some(cat => product.categories?.includes(cat)))
//   );
  
//   // Si no hay suficientes, incluir productos con características similares
//   if (related.length < limit && product.features?.length) {
//     const byFeatures = allProducts.filter(p => 
//       p.id !== product.id && 
//       !related.find(r => r.id === p.id) &&
//       product.features.some(feature => p.features?.includes(feature))
//     );
    
//     related = [...related, ...byFeatures];
//   }
  
//   // Si aún no hay suficientes, incluir productos populares
//   if (related.length < limit) {
//     const popular = allProducts
//       .filter(p => 
//         p.id !== product.id && 
//         !related.find(r => r.id === p.id) &&
//         p.rating >= 4.0
//       )
//       .sort((a, b) => (b.rating || 0) - (a.rating || 0));
    
//     related = [...related, ...popular];
//   }
  
//   // Ordenar por rating y limitar
//   return related
//     .sort((a, b) => (b.rating || 0) - (a.rating || 0))
//     .slice(0, limit);
// };

// /**
//  * Obtiene estadísticas de productos
//  * @param {Array} products - Array de productos
//  * @returns {Object} Estadísticas
//  */
// export const getProductStats = (products) => {
//   if (!products?.length) {
//     return {
//       total: 0,
//       byCategory: {},
//       byType: {},
//       averageRating: 0,
//       priceRange: { min: 0, max: 0 }
//     };
//   }
  
//   const stats = {
//     total: products.length,
//     byCategory: {},
//     byType: {},
//     averageRating: 0,
//     priceRange: { min: Infinity, max: 0 }
//   };
  
//   let totalRating = 0;
//   let ratedProducts = 0;
  
//   products.forEach(product => {
//     // Contar por categoría
//     if (product.category) {
//       stats.byCategory[product.category] = (stats.byCategory[product.category] || 0) + 1;
//     }
    
//     // Contar por tipo
//     const type = getProductType(product);
//     if (type) {
//       stats.byType[type] = (stats.byType[type] || 0) + 1;
//     }
    
//     // Calcular rating promedio
//     if (product.rating) {
//       totalRating += product.rating;
//       ratedProducts++;
//     }
    
//     // Calcular rango de precios
//     const price = product.sizes?.CHICO?.price || product.price || 0;
//     if (price > 0) {
//       stats.priceRange.min = Math.min(stats.priceRange.min, price);
//       stats.priceRange.max = Math.max(stats.priceRange.max, price);
//     }
//   });
  
//   stats.averageRating = ratedProducts > 0 ? totalRating / ratedProducts : 0;
  
//   if (stats.priceRange.min === Infinity) {
//     stats.priceRange.min = 0;
//   }
  
//   return stats;
// };

// /**
//  * Determina el tipo principal de un producto
//  * @param {Object} product - Producto
//  * @returns {string} Tipo del producto
//  */
// export const getProductType = (product) => {
//   if (!product.category) return null;
  
//   if (product.features?.includes(PRODUCT_FEATURES.PET_FRIENDLY)) {
//     return PRODUCT_TYPES.PET_FRIENDLY;
//   }
  
//   if (product.category.includes('helado')) {
//     return PRODUCT_TYPES.HELADOS;
//   }
  
//   if (product.category.includes('nieve')) {
//     return PRODUCT_TYPES.NIEVES;
//   }
  
//   if (product.category === PRODUCT_CATEGORIES.PALETAS) {
//     return PRODUCT_TYPES.PALETAS;
//   }
  
//   return null;
// };

// /**
//  * Formatea el precio de un producto
//  * @param {number} price - Precio
//  * @param {string} currency - Moneda
//  * @returns {string} Precio formateado
//  */
// export const formatPrice = (price, currency = 'MXN') => {
//   if (!price || price <= 0) return 'Precio no disponible';
  
//   return new Intl.NumberFormat('es-MX', {
//     style: 'currency',
//     currency: currency,
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 2
//   }).format(price);
// };

// /**
//  * Obtiene el precio mínimo de un producto considerando todos los tamaños
//  * @param {Object} product - Producto
//  * @returns {number} Precio mínimo
//  */
// export const getMinPrice = (product) => {
//   if (product.price) return product.price;
  
//   if (!product.sizes) return 0;
  
//   const prices = Object.values(product.sizes)
//     .map(size => size.price)
//     .filter(price => price > 0);
  
//   return prices.length > 0 ? Math.min(...prices) : 0;
// };

// /**
//  * Verifica si un producto está disponible
//  * @param {Object} product - Producto
//  * @returns {boolean} Si está disponible
//  */
// export const isProductAvailable = (product) => {
//   return product.available !== false && (product.stock || 0) > 0;
// };

// /**
//  * Genera un slug URL-friendly para un producto
//  * @param {string} name - Nombre del producto
//  * @returns {string} Slug generado
//  */
// export const generateProductSlug = (name) => {
//   return name
//     .toLowerCase()
//     .normalize('NFD')
//     .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
//     .replace(/[^a-z0-9\s-]/g, '') // Solo letras, números, espacios y guiones
//     .trim()
//     .replace(/\s+/g, '-') // Espacios a guiones
//     .replace(/-+/g, '-'); // Múltiples guiones a uno solo
// };

// export default {
//   PRODUCT_CATEGORIES,
//   PRODUCT_TYPES,
//   PRODUCT_FEATURES,
//   PRODUCT_SIZES,
//   filterByCategory,
//   filterByType,
//   filterByFeatures,
//   filterByAvailability,
//   filterByPriceRange,
//   filterBySeason,
//   applyMultipleFilters,
//   sortProducts,
//   getRelatedProducts,
//   getProductStats,
//   getProductType,
//   formatPrice,
//   getMinPrice,
//   isProductAvailable,
//   generateProductSlug
// };

// src/utils/productHelpers.js

/**
 * Filtra productos por categoría
 * @param {Array} products - Array de productos
 * @param {string} category - Categoría a filtrar ('todos', 'helados', 'nieves', 'paletas', 'pet-friendly')
 * @returns {Array} Productos filtrados
 */
export const getProductsByCategory = (products, category) => {
  if (!products || !Array.isArray(products)) return [];

  if (category === 'todos' || !category) {
    return products;
  }

  if (category === 'pet-friendly') {
    return products.filter(product => product.petFriendly === true);
  }

  return products.filter(product =>
    product.category?.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Filtra productos por búsqueda de texto
 * @param {Array} products - Array de productos
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Array} Productos filtrados
 */
export const searchProducts = (products, searchTerm) => {
  if (!products || !Array.isArray(products)) return [];
  if (!searchTerm || searchTerm.trim() === '') return products;

  const term = searchTerm.toLowerCase().trim();

  return products.filter(product => {
    const name = product.name?.toLowerCase() || '';
    const description = product.description?.toLowerCase() || '';
    const category = product.category?.toLowerCase() || '';
    const subcategory = product.subcategory?.toLowerCase() || '';

    return name.includes(term) || 
           description.includes(term) || 
           category.includes(term) ||
           subcategory.includes(term);
  });
};

/**
 * Filtra productos por múltiples criterios
 * @param {Array} products - Array de productos
 * @param {Object} filters - Objeto con filtros { category, search, petFriendly, seasonal }
 * @returns {Array} Productos filtrados
 */
export const filterProducts = (products, filters = {}) => {
  if (!products || !Array.isArray(products)) return [];

  let filteredProducts = [...products];

  // Filtrar por categoría
  if (filters.category && filters.category !== 'todos') {
    filteredProducts = getProductsByCategory(filteredProducts, filters.category);
  }

  // Filtrar por búsqueda
  if (filters.search) {
    filteredProducts = searchProducts(filteredProducts, filters.search);
  }

  // Filtrar por pet friendly
  if (filters.petFriendly === true) {
    filteredProducts = filteredProducts.filter(product => product.petFriendly === true);
  }

  // Filtrar por productos de temporada
  if (filters.seasonal === true) {
    filteredProducts = filteredProducts.filter(product => product.seasonal === true);
  }

  return filteredProducts;
};

/**
 * Ordena productos por diferentes criterios
 * @param {Array} products - Array de productos
 * @param {string} sortBy - Criterio de ordenamiento ('name', 'rating', 'category', 'popular')
 * @param {string} order - Orden ('asc', 'desc')
 * @returns {Array} Productos ordenados
 */
export const sortProducts = (products, sortBy = 'name', order = 'asc') => {
  if (!products || !Array.isArray(products)) return [];

  const sortedProducts = [...products];

  sortedProducts.sort((a, b) => {
    let valueA, valueB;

    switch (sortBy) {
      case 'name':
        valueA = a.name?.toLowerCase() || '';
        valueB = b.name?.toLowerCase() || '';
        break;
      case 'rating':
        valueA = a.rating || 0;
        valueB = b.rating || 0;
        break;
      case 'category':
        valueA = a.category?.toLowerCase() || '';
        valueB = b.category?.toLowerCase() || '';
        break;
      case 'popular':
        valueA = a.popular || false;
        valueB = b.popular || false;
        if (valueA === valueB) {
          valueA = a.rating || 0;
          valueB = b.rating || 0;
        }
        break;
      default:
        valueA = a.name?.toLowerCase() || '';
        valueB = b.name?.toLowerCase() || '';
    }

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }

    if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
      if (valueA === valueB) return 0;
      return order === 'asc' ? (valueA ? 1 : -1) : (valueA ? -1 : 1);
    }

    return order === 'asc' ? valueA - valueB : valueB - valueA;
  });

  return sortedProducts;
};

/**
 * Obtiene productos relacionados basados en categoría y subcategoría
 * @param {Array} products - Array de todos los productos
 * @param {Object} currentProduct - Producto actual
 * @param {number} limit - Número máximo de productos relacionados
 * @returns {Array} Productos relacionados
 */
export const getRelatedProducts = (products, currentProduct, limit = 4) => {
  if (!products || !currentProduct) return [];

  // Filtrar productos de la misma subcategoría (excluyendo el actual)
  let related = products.filter(product => 
    product.id !== currentProduct.id &&
    product.subcategory === currentProduct.subcategory
  );

  // Si no hay suficientes, agregar de la misma categoría
  if (related.length < limit) {
    const sameCategory = products.filter(product => 
      product.id !== currentProduct.id &&
      product.category === currentProduct.category &&
      !related.some(rel => rel.id === product.id)
    );
    related = [...related, ...sameCategory];
  }

  // Si aún no hay suficientes, agregar productos populares
  if (related.length < limit) {
    const popular = products.filter(product => 
      product.id !== currentProduct.id &&
      product.popular === true &&
      !related.some(rel => rel.id === product.id)
    );
    related = [...related, ...popular];
  }

  return related.slice(0, limit);
};

/**
 * Obtiene estadísticas de productos
 * @param {Array} products - Array de productos
 * @returns {Object} Estadísticas
 */
export const getProductStats = (products) => {
  if (!products || !Array.isArray(products)) {
    return {
      total: 0,
      categories: {},
      averageRating: 0,
      popularCount: 0,
      petFriendlyCount: 0,
      seasonalCount: 0
    };
  }

  const stats = {
    total: products.length,
    categories: {},
    averageRating: 0,
    popularCount: 0,
    petFriendlyCount: 0,
    seasonalCount: 0
  };

  let totalRating = 0;
  let ratedProducts = 0;

  products.forEach(product => {
    // Contar por categorías
    const category = product.category || 'Sin categoría';
    stats.categories[category] = (stats.categories[category] || 0) + 1;

    // Calcular rating promedio
    if (product.rating && product.rating > 0) {
      totalRating += product.rating;
      ratedProducts++;
    }

    // Contar productos especiales
    if (product.popular) stats.popularCount++;
    if (product.petFriendly) stats.petFriendlyCount++;
    if (product.seasonal) stats.seasonalCount++;
  });

  stats.averageRating = ratedProducts > 0 ? (totalRating / ratedProducts).toFixed(1) : 0;

  return stats;
};