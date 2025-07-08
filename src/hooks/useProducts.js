import { useState, useEffect, useMemo, useCallback } from 'react'
import { useProductsStore } from '../store/productsStore'

/**
 * Hook principal para manejo de productos con funcionalidades integradas
 * Simplificado para trabajar directamente con el store sin dependencias circulares
 */
export const useProducts = (options = {}) => {
  const {
    category = 'all',
    initialPageSize = 12,
    enablePagination = true,
    enableSearch = true,
    enableFilters = true,
    sortBy = 'name',
    sortOrder = 'asc',
    autoFetch = true
  } = options

  // Estados del store
  const {
    products,
    loading,
    error,
    favorites,
    featuredProducts,
    searchTerm,
    activeFilters,
    currentPage,
    pageSize,
    fetchProducts,
    setSearchTerm,
    setFilter,
    clearFilters,
    setCurrentPage,
    setPageSize,
    toggleFavorite,
    updateProductRating
  } = useProductsStore()

  // Estados locales simplificados
  const [isSearching, setIsSearching] = useState(false)

  // Auto-fetch inicial si está habilitado
  useEffect(() => {
    if (autoFetch && products.length === 0 && !loading) {
      fetchProducts()
    }
  }, [autoFetch, products.length, loading, fetchProducts])

  // Procesamiento de productos con memoización optimizada
  const processedProducts = useMemo(() => {
    let result = [...products]

    // Filtro por categoría
    if (category !== 'all') {
      result = result.filter(product => 
        product.category === category || 
        product.subcategory === category
      )
    }

    // Búsqueda por texto
    if (enableSearch && searchTerm?.trim()) {
      const term = searchTerm.toLowerCase()
      result = result.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.subcategory?.toLowerCase().includes(term) ||
        product.tags?.some(tag => tag.toLowerCase().includes(term))
      )
    }

    // Aplicar filtros activos
    if (enableFilters && activeFilters && Object.keys(activeFilters).length > 0) {
      result = result.filter(product => {
        return Object.entries(activeFilters).every(([filterKey, filterValues]) => {
          if (!filterValues || filterValues.length === 0) return true
          
          switch (filterKey) {
            case 'category':
              return filterValues.includes(product.category)
            case 'subcategory':
              return filterValues.includes(product.subcategory)
            case 'tags':
              return filterValues.some(tag => product.tags?.includes(tag))
            case 'price':
              const price = product.price || 0
              return filterValues.some(range => {
                const [min, max] = range.split('-').map(Number)
                return price >= min && price <= max
              })
            case 'rating':
              const rating = product.rating || 0
              return filterValues.some(minRating => rating >= minRating)
            case 'availability':
              return filterValues.includes(product.available ? 'available' : 'unavailable')
            default:
              return true
          }
        })
      })
    }

    // Ordenamiento
    result.sort((a, b) => {
      let comparison = 0

      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name, 'es', { numeric: true })
          break
        case 'rating':
          comparison = (b.rating || 0) - (a.rating || 0)
          break
        case 'price':
          comparison = (a.price || 0) - (b.price || 0)
          break
        case 'category':
          comparison = a.category.localeCompare(b.category, 'es')
          break
        case 'featured':
          const aFeatured = featuredProducts.includes(a.id) ? 1 : 0
          const bFeatured = featuredProducts.includes(b.id) ? 1 : 0
          comparison = bFeatured - aFeatured
          break
        case 'newest':
          comparison = new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
          break
        default:
          comparison = 0
      }

      return sortOrder === 'desc' ? -comparison : comparison
    })

    return result
  }, [
    products,
    category,
    searchTerm,
    activeFilters,
    sortBy,
    sortOrder,
    featuredProducts,
    enableSearch,
    enableFilters
  ])

  // Productos paginados
  const paginatedProducts = useMemo(() => {
    if (!enablePagination) return processedProducts

    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    return processedProducts.slice(startIndex, endIndex)
  }, [processedProducts, currentPage, pageSize, enablePagination])

  // Cálculos de paginación
  const totalPages = useMemo(() => {
    if (!enablePagination) return 1
    return Math.ceil(processedProducts.length / pageSize)
  }, [processedProducts.length, pageSize, enablePagination])

  const hasNextPage = useMemo(() => {
    return enablePagination && currentPage < totalPages
  }, [currentPage, totalPages, enablePagination])

  const hasPrevPage = useMemo(() => {
    return enablePagination && currentPage > 1
  }, [currentPage, enablePagination])

  // Funciones de búsqueda
  const handleSearch = useCallback(async (term) => {
    setIsSearching(true)
    setSearchTerm(term)
    
    if (enablePagination) {
      setCurrentPage(1) // Reset a la primera página
    }

    // Simular delay de búsqueda para UX
    setTimeout(() => {
      setIsSearching(false)
    }, 300)
  }, [setSearchTerm, setCurrentPage, enablePagination])

  const clearSearch = useCallback(() => {
    setSearchTerm('')
    setIsSearching(false)
    if (enablePagination) {
      setCurrentPage(1)
    }
  }, [setSearchTerm, setCurrentPage, enablePagination])

  // Funciones de filtros
  const handleSetFilter = useCallback((filterKey, filterValue) => {
    setFilter(filterKey, filterValue)
    if (enablePagination) {
      setCurrentPage(1)
    }
  }, [setFilter, setCurrentPage, enablePagination])

  const handleClearFilters = useCallback(() => {
    clearFilters()
    if (enablePagination) {
      setCurrentPage(1)
    }
  }, [clearFilters, setCurrentPage, enablePagination])

  // Funciones de paginación
  const goToPage = useCallback((page) => {
    if (enablePagination && page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }, [setCurrentPage, totalPages, enablePagination])

  const nextPage = useCallback(() => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1)
    }
  }, [currentPage, hasNextPage, setCurrentPage])

  const prevPage = useCallback(() => {
    if (hasPrevPage) {
      setCurrentPage(currentPage - 1)
    }
  }, [currentPage, hasPrevPage, setCurrentPage])

  const handleSetPageSize = useCallback((newSize) => {
    setPageSize(newSize)
    setCurrentPage(1) // Reset a la primera página
  }, [setPageSize, setCurrentPage])

  // Funciones de utilidad
  const getProductById = useCallback((id) => {
    return products.find(product => product.id === id)
  }, [products])

  const getRelatedProducts = useCallback((productId, limit = 4) => {
    const product = getProductById(productId)
    if (!product) return []

    return products
      .filter(p =>
        p.id !== productId &&
        (p.category === product.category || p.subcategory === product.subcategory)
      )
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, limit)
  }, [products, getProductById])

  const getProductStats = useCallback(() => {
    const stats = {
      total: processedProducts.length,
      totalAll: products.length,
      byCategory: {},
      bySubcategory: {},
      avgRating: 0,
      featuredCount: 0,
      availableCount: 0
    }

    processedProducts.forEach(product => {
      // Por categoría
      stats.byCategory[product.category] = (stats.byCategory[product.category] || 0) + 1
      
      // Por subcategoría
      if (product.subcategory) {
        stats.bySubcategory[product.subcategory] = (stats.bySubcategory[product.subcategory] || 0) + 1
      }
      
      // Destacados
      if (featuredProducts.includes(product.id)) {
        stats.featuredCount++
      }
      
      // Disponibles
      if (product.available) {
        stats.availableCount++
      }
    })

    // Rating promedio
    const totalRating = processedProducts.reduce((sum, product) => sum + (product.rating || 0), 0)
    stats.avgRating = processedProducts.length > 0 ? totalRating / processedProducts.length : 0

    return stats
  }, [processedProducts, products.length, featuredProducts])

  // Reset completo
  const resetAll = useCallback(() => {
    clearSearch()
    handleClearFilters()
    setCurrentPage(1)
  }, [clearSearch, handleClearFilters, setCurrentPage])

  // Estados derivados
  const isEmpty = processedProducts.length === 0
  const isFiltered = (activeFilters && Object.keys(activeFilters).length > 0) || (searchTerm && searchTerm.trim() !== '')
  const hasResults = processedProducts.length > 0

  return {
    // Productos
    products: paginatedProducts,
    allProducts: processedProducts,
    totalProducts: processedProducts.length,
    loading,
    error,

    // Búsqueda
    searchTerm,
    isSearching,
    handleSearch,
    clearSearch,

    // Filtros
    activeFilters,
    setFilter: handleSetFilter,
    clearFilters: handleClearFilters,

    // Paginación
    currentPage,
    pageSize,
    totalPages,
    hasNextPage,
    hasPrevPage,
    goToPage,
    nextPage,
    prevPage,
    setPageSize: handleSetPageSize,

    // Favoritos
    favorites,
    toggleFavorite,

    // Productos destacados
    featuredProducts,

    // Utilidades
    getProductById,
    getRelatedProducts,
    getProductStats,
    updateProductRating,

    // Reset
    resetAll,

    // Estados derivados
    isEmpty,
    isFiltered,
    hasResults,

    // Configuración
    config: {
      category,
      enablePagination,
      enableSearch,
      enableFilters,
      sortBy,
      sortOrder
    }
  }
}

/**
 * Hook especializado para productos destacados
 */
export const useFeaturedProducts = (limit = 6) => {
  const { products, featuredProducts, loading } = useProductsStore()

  const featured = useMemo(() => {
    return products
      .filter(product => featuredProducts.includes(product.id))
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, limit)
  }, [products, featuredProducts, limit])

  return {
    products: featured,
    loading,
    isEmpty: featured.length === 0
  }
}

/**
 * Hook especializado para productos por categoría
 */
export const useProductsByCategory = (category, options = {}) => {
  return useProducts({
    category,
    ...options
  })
}

/**
 * Hook especializado para búsqueda de productos
 */
export const useProductSearch = (initialTerm = '', options = {}) => {
  const hook = useProducts({
    enableSearch: true,
    enablePagination: false,
    ...options
  })

  useEffect(() => {
    if (initialTerm) {
      hook.handleSearch(initialTerm)
    }
  }, [initialTerm])

  return hook
}

/**
 * Hook para obtener un producto específico por ID
 */
export const useProduct = (productId) => {
  const { products, loading, error, getProductById } = useProducts({ autoFetch: true })
  
  const product = useMemo(() => {
    return getProductById(productId)
  }, [productId, getProductById])

  const relatedProducts = useMemo(() => {
    if (!product) return []
    
    return products
      .filter(p => 
        p.id !== productId &&
        (p.category === product.category || p.subcategory === product.subcategory)
      )
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 4)
  }, [product, products, productId])

  return {
    product,
    relatedProducts,
    loading,
    error,
    notFound: !loading && !product
  }
}