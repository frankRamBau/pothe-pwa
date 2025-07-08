// src/hooks/useFilters.js

import { useMemo } from 'react';
import { filterProducts, sortProducts } from '../utils/productHelpers';
import { useFiltersStore } from '../store/filtersStore';

/**
 * Hook personalizado para manejar filtros y búsqueda de productos
 * @param {Array} products - Array de productos a filtrar
 * @returns {Object} Objeto con productos filtrados y funciones de control
 */
export const useFilters = (products = []) => {
  const {
    category,
    search,
    sortBy,
    sortOrder,
    petFriendly,
    seasonal,
    setCategory,
    setSearch,
    setSortBy,
    setSortOrder,
    setPetFriendly,
    setSeasonal,
    clearFilters,
    activeFiltersCount
  } = useFiltersStore();

  // Productos filtrados usando useMemo para optimización
  const filteredProducts = useMemo(() => {
    const filters = {
      category,
      search,
      petFriendly,
      seasonal
    };

    let filtered = filterProducts(products, filters);
    
    // Aplicar ordenamiento
    if (sortBy) {
      filtered = sortProducts(filtered, sortBy, sortOrder);
    }
    
    return filtered;
  }, [products, category, search, petFriendly, seasonal, sortBy, sortOrder]);

  // Estadísticas de filtros
  const filterStats = useMemo(() => {
    const stats = {
      total: products.length,
      filtered: filteredProducts.length,
      categories: {},
      hasResults: filteredProducts.length > 0
    };

    // Contar productos por categoría
    products.forEach(product => {
      const cat = product.category || 'Sin categoría';
      stats.categories[cat] = (stats.categories[cat] || 0) + 1;
    });

    return stats;
  }, [products, filteredProducts]);

  // Funciones de control simplificadas
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSearchChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleSortChange = (newSortBy, newSortOrder = 'asc') => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  };

  const togglePetFriendly = () => {
    setPetFriendly(!petFriendly);
  };

  const toggleSeasonal = () => {
    setSeasonal(!seasonal);
  };

  const resetFilters = () => {
    clearFilters();
  };

  // Verificar si hay filtros activos
  const hasActiveFilters = activeFiltersCount > 0;

  return {
    // Datos
    filteredProducts,
    filterStats,
    
    // Estado actual de filtros
    filters: {
      category,
      search,
      sortBy,
      sortOrder,
      petFriendly,
      seasonal
    },
    
    // Funciones de control
    handleCategoryChange,
    handleSearchChange,
    handleSortChange,
    togglePetFriendly,
    toggleSeasonal,
    resetFilters,
    
    // Estado de filtros
    hasActiveFilters,
    activeFiltersCount,
    
    // Funciones directas del store (para casos avanzados)
    setCategory,
    setSearch,
    setSortBy,
    setSortOrder,
    setPetFriendly,
    setSeasonal,
    clearFilters
  };
};

export default useFilters;