// src/store/productsStore.js
import { create } from 'zustand';
import { products as productsData } from '../data/products.js';

const useProductsStore = create((set, get) => ({
  // Estados
  products: [],
  filteredProducts: [],
  isLoading: false,
  error: null,
  activeFilters: {
    category: '', // 'helado', 'nieve', 'paleta'
    subcategory: '', // 'gourmet', 'premium', 'tradicional', 'artesanal', 'con_alcohol', 'temporada'
    petFriendly: false,
    seasonal: false,
    featured: false,
    search: '',
    minRating: 0
  },
  
  // Getters computados
  getFilteredProducts: () => {
    const { products, activeFilters } = get();
    
    return products.filter(product => {
      // Filtro por categoría principal
      if (activeFilters.category && activeFilters.category !== '' && product.category !== activeFilters.category) {
        return false;
      }
      
      // Filtro por subcategoría - SOLO aplicar si hay una subcategoría seleccionada
      if (activeFilters.subcategory && activeFilters.subcategory !== '' && product.subcategory !== activeFilters.subcategory) {
        return false;
      }
      
      // Filtro pet friendly
      if (activeFilters.petFriendly && !product.petFriendly) {
        return false;
      }
      
      // Filtro de temporada
      if (activeFilters.seasonal && !product.seasonal) {
        return false;
      }
      
      // Filtro de destacados
      if (activeFilters.featured && !product.featured) {
        return false;
      }
      
      // Filtro por rating mínimo
      if (activeFilters.minRating > 0 && product.rating < activeFilters.minRating) {
        return false;
      }
      
      // Filtro de búsqueda por nombre, descripción y tags
      if (activeFilters.search && activeFilters.search.trim() !== '') {
        const searchTerm = activeFilters.search.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(searchTerm);
        const matchesDescription = product.description?.toLowerCase().includes(searchTerm);
        const matchesTags = product.tags?.some(tag => tag.toLowerCase().includes(searchTerm));
        
        if (!matchesName && !matchesDescription && !matchesTags) {
          return false;
        }
      }
      
      return true;
    });
  },
  
  getProductsByCategory: (category) => {
    const { products } = get();
    return products.filter(product => product.category === category);
  },
  
  getProductsBySubcategory: (subcategory) => {
    const { products } = get();
    return products.filter(product => product.subcategory === subcategory);
  },
  
  getFeaturedProducts: () => {
    const { products } = get();
    return products.filter(product => product.featured).slice(0, 8);
  },
  
  getSeasonalProducts: () => {
    const { products } = get();
    return products.filter(product => product.seasonal);
  },
  
  getProductById: (id) => {
    const { products } = get();
    return products.find(product => product.id === parseInt(id));
  },
  
  getRelatedProducts: (productId, limit = 4) => {
    const { products } = get();
    const currentProduct = products.find(p => p.id === parseInt(productId));
    
    if (!currentProduct) return [];
    
    return products
      .filter(product => 
        product.id !== parseInt(productId) && 
        (product.category === currentProduct.category || 
         product.subcategory === currentProduct.subcategory)
      )
      .slice(0, limit);
  },
  
  getPetFriendlyProducts: () => {
    const { products } = get();
    return products.filter(product => product.petFriendly);
  },
  
  getProductsByRating: (minRating = 4.5) => {
    const { products } = get();
    return products.filter(product => product.rating >= minRating);
  },
  
  getAvailableCategories: () => {
    const { products } = get();
    const categories = [...new Set(products.map(p => p.category))];
    return categories.map(cat => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
      count: products.filter(p => p.category === cat).length
    }));
  },
  
  getAvailableSubcategories: (category = null) => {
    const { products } = get();
    const filtered = category ? products.filter(p => p.category === category) : products;
    const subcategories = [...new Set(filtered.map(p => p.subcategory))];
    return subcategories.map(subcat => ({
      value: subcat,
      label: subcat.charAt(0).toUpperCase() + subcat.slice(1),
      count: filtered.filter(p => p.subcategory === subcat).length
    }));
  },
  
  // Acciones
  loadProducts: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simular un pequeño delay para mostrar loading
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Cargar productos desde el archivo de datos
      set({ 
        products: productsData,
        filteredProducts: productsData,
        isLoading: false 
      });
      
      // Aplicar filtros después de cargar
      const filteredProducts = get().getFilteredProducts();
      set({ filteredProducts });
      
    } catch (error) {
      set({ 
        error: error.message || 'Error al cargar productos', 
        isLoading: false 
      });
    }
  },
  
  setFilter: (filterType, value) => {
    set(state => {
      const newFilters = {
        ...state.activeFilters,
        [filterType]: value
      };
      
      // Si estamos cambiando la categoría principal, limpiar subcategoría
      if (filterType === 'category') {
        newFilters.subcategory = '';
      }
      
      // Calcular productos filtrados con los nuevos filtros
      const tempStore = { ...state, activeFilters: newFilters };
      const filteredProducts = products.filter(product => {
        // Aplicar la misma lógica de filtrado
        if (newFilters.category && newFilters.category !== '' && product.category !== newFilters.category) {
          return false;
        }
        
        if (newFilters.subcategory && newFilters.subcategory !== '' && product.subcategory !== newFilters.subcategory) {
          return false;
        }
        
        if (newFilters.petFriendly && !product.petFriendly) {
          return false;
        }
        
        if (newFilters.seasonal && !product.seasonal) {
          return false;
        }
        
        if (newFilters.featured && !product.featured) {
          return false;
        }
        
        if (newFilters.minRating > 0 && product.rating < newFilters.minRating) {
          return false;
        }
        
        if (newFilters.search && newFilters.search.trim() !== '') {
          const searchTerm = newFilters.search.toLowerCase().trim();
          const matchesName = product.name.toLowerCase().includes(searchTerm);
          const matchesDescription = product.description?.toLowerCase().includes(searchTerm);
          const matchesTags = product.tags?.some(tag => tag.toLowerCase().includes(searchTerm));
          
          if (!matchesName && !matchesDescription && !matchesTags) {
            return false;
          }
        }
        
        return true;
      });
      
      return {
        activeFilters: newFilters,
        filteredProducts
      };
    });
  },
  
  setMultipleFilters: (filters) => {
    set(state => {
      const newFilters = {
        ...state.activeFilters,
        ...filters
      };
      
      // Calcular productos filtrados
      const filteredProducts = get().getFilteredProducts();
      
      return {
        activeFilters: newFilters,
        filteredProducts
      };
    });
  },
  
  clearFilters: () => {
    set(state => ({
      activeFilters: {
        category: '',
        subcategory: '',
        petFriendly: false,
        seasonal: false,
        featured: false,
        search: '',
        minRating: 0
      },
      filteredProducts: state.products
    }));
  },
  
  clearError: () => {
    set({ error: null });
  },
  
  // Acción para búsqueda
  searchProducts: (searchTerm) => {
    set(state => {
      const newFilters = {
        ...state.activeFilters,
        search: searchTerm
      };
      
      const filteredProducts = get().getFilteredProducts();
      
      return {
        activeFilters: newFilters,
        filteredProducts
      };
    });
  },
  
  // Acción para alternar filtro pet friendly
  togglePetFriendly: () => {
    set(state => {
      const newFilters = {
        ...state.activeFilters,
        petFriendly: !state.activeFilters.petFriendly
      };
      
      const filteredProducts = products.filter(product => {
        if (newFilters.category && newFilters.category !== '' && product.category !== newFilters.category) {
          return false;
        }
        
        if (newFilters.subcategory && newFilters.subcategory !== '' && product.subcategory !== newFilters.subcategory) {
          return false;
        }
        
        if (newFilters.petFriendly && !product.petFriendly) {
          return false;
        }
        
        if (newFilters.seasonal && !product.seasonal) {
          return false;
        }
        
        if (newFilters.featured && !product.featured) {
          return false;
        }
        
        if (newFilters.minRating > 0 && product.rating < newFilters.minRating) {
          return false;
        }
        
        if (newFilters.search && newFilters.search.trim() !== '') {
          const searchTerm = newFilters.search.toLowerCase().trim();
          const matchesName = product.name.toLowerCase().includes(searchTerm);
          const matchesDescription = product.description?.toLowerCase().includes(searchTerm);
          const matchesTags = product.tags?.some(tag => tag.toLowerCase().includes(searchTerm));
          
          if (!matchesName && !matchesDescription && !matchesTags) {
            return false;
          }
        }
        
        return true;
      });
      
      return {
        activeFilters: newFilters,
        filteredProducts
      };
    });
  }
}));

export { useProductsStore };