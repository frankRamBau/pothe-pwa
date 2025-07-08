import { useState, useMemo, useCallback, useEffect } from 'react';

/**
 * Hook de paginación simple que trabaja con cualquier array de datos
 * Diseñado para integrarse con el store global de productos
 */
export const usePagination = (options = {}) => {
  const {
    itemsPerPage = 12,
    initialPage = 1,
    maxVisiblePages = 5
  } = options;

  const [currentPage, setCurrentPage] = useState(initialPage);

  // Función para calcular la paginación de cualquier array
  const getPaginationData = useCallback((items = []) => {
    const safeItems = Array.isArray(items) ? items : [];
    const totalItems = safeItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
    
    // Ajustar página actual si es mayor al total de páginas
    const validCurrentPage = Math.min(currentPage, totalPages);
    
    // Calcular índices
    const startIndex = (validCurrentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    
    // Obtener elementos de la página actual
    const currentItems = safeItems.slice(startIndex, endIndex);
    
    // Calcular páginas visibles para la navegación
    const visiblePages = calculateVisiblePages(validCurrentPage, totalPages, maxVisiblePages);
    
    return {
      currentItems,
      currentPage: validCurrentPage,
      totalPages,
      totalItems,
      itemsPerPage,
      startIndex: startIndex + 1, // Base 1 para mostrar
      endIndex,
      hasNext: validCurrentPage < totalPages,
      hasPrev: validCurrentPage > 1,
      isEmpty: totalItems === 0,
      visiblePages
    };
  }, [currentPage, itemsPerPage, maxVisiblePages]);

  // Funciones de navegación
  const goToPage = useCallback((page) => {
    const targetPage = Math.max(1, Math.min(page, Number.MAX_SAFE_INTEGER));
    setCurrentPage(targetPage);
  }, []);

  const nextPage = useCallback(() => {
    setCurrentPage(prev => prev + 1);
  }, []);

  const prevPage = useCallback(() => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  }, []);

  const goToFirst = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const goToLast = useCallback((totalPages) => {
    setCurrentPage(totalPages);
  }, []);

  const reset = useCallback(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  // Función para generar texto de información
  const getDisplayText = useCallback((pageInfo) => {
    if (!pageInfo) return '';
    
    if (pageInfo.isEmpty) {
      return 'No se encontraron elementos';
    }
    
    if (pageInfo.totalPages === 1) {
      return `Mostrando ${pageInfo.totalItems} ${pageInfo.totalItems === 1 ? 'elemento' : 'elementos'}`;
    }
    
    return `Mostrando ${pageInfo.startIndex}-${pageInfo.endIndex} de ${pageInfo.totalItems} elementos`;
  }, []);

  return {
    // Función principal para obtener datos paginados
    getPaginationData,
    
    // Estado actual
    currentPage,
    
    // Funciones de navegación
    goToPage,
    nextPage,
    prevPage,
    goToFirst,
    goToLast,
    reset,
    
    // Utilidades
    getDisplayText
  };
};

/**
 * Hook para scroll infinito - versión simplificada
 */
export const useInfiniteScroll = (options = {}) => {
  const { itemsPerLoad = 12 } = options;
  const [loadedPages, setLoadedPages] = useState(1);

  const getInfiniteScrollData = useCallback((items = []) => {
    const safeItems = Array.isArray(items) ? items : [];
    const totalItems = safeItems.length;
    const maxItems = loadedPages * itemsPerLoad;
    const currentItems = safeItems.slice(0, maxItems);
    const hasMore = maxItems < totalItems;
    
    return {
      currentItems,
      hasMore,
      loadedCount: currentItems.length,
      totalCount: totalItems,
      progress: totalItems > 0 ? (currentItems.length / totalItems) * 100 : 0
    };
  }, [loadedPages, itemsPerLoad]);

  const loadMore = useCallback(() => {
    setLoadedPages(prev => prev + 1);
    return true;
  }, []);

  const reset = useCallback(() => {
    setLoadedPages(1);
  }, []);

  return {
    getInfiniteScrollData,
    loadMore,
    reset,
    loadedPages
  };
};

// Función auxiliar para calcular páginas visibles
function calculateVisiblePages(currentPage, totalPages, maxVisiblePages) {
  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const half = Math.floor(maxVisiblePages / 2);
  let start = Math.max(1, currentPage - half);
  let end = Math.min(totalPages, start + maxVisiblePages - 1);

  if (end - start + 1 < maxVisiblePages) {
    start = Math.max(1, end - maxVisiblePages + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export default usePagination;