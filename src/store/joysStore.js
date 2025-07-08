// src/store/joysStore.js
import { create } from 'zustand';
import { joys as joysData } from '../data/joys';

const useJoysStore = create((set, get) => ({
  // Estados
  joys: [],
  filteredJoys: [],
  isLoading: false,
  error: null,
  activeFilters: {
    category: '', // 'cafés', 'bebidas', 'postres', 'crepas'
    search: '',
    featured: false,
    isNew: false,
    isTrending: false,
    seasonal: false,
    priceRange: { min: 0, max: 100 },
    hasNutritionalInfo: false
  },
  
  // Getters computados
  getFilteredJoys: () => {
    const { joys, activeFilters } = get();
    
    return joys.filter(joy => {
      // Filtro por categoría principal
      if (activeFilters.category && activeFilters.category !== '' && joy.category !== activeFilters.category) {
        return false;
      }
      
      // Filtro por destacados
      if (activeFilters.featured && !joy.isFeatured) {
        return false;
      }
      
      // Filtro por nuevos
      if (activeFilters.isNew && !joy.isNew) {
        return false;
      }
      
      // Filtro por trending
      if (activeFilters.isTrending && !joy.isTrending) {
        return false;
      }
      
      // Filtro de temporada
      if (activeFilters.seasonal && !joy.seasonal) {
        return false;
      }
      
      // Filtro por rango de precios (basado en el precio mínimo del producto)
      if (joy.sizes && joy.sizes.length > 0) {
        const minPrice = Math.min(...joy.sizes.map(s => s.price));
        const maxPrice = Math.max(...joy.sizes.map(s => s.price));
        
        if (minPrice > activeFilters.priceRange.max || maxPrice < activeFilters.priceRange.min) {
          return false;
        }
      }
      
      // Filtro por información nutricional disponible
      if (activeFilters.hasNutritionalInfo && (!joy.nutritionalInfo || joy.nutritionalInfo.length === 0)) {
        return false;
      }
      
      // Filtro de búsqueda por nombre, descripción y tags
      if (activeFilters.search && activeFilters.search.trim() !== '') {
        const searchTerm = activeFilters.search.toLowerCase().trim();
        const matchesName = joy.name.toLowerCase().includes(searchTerm);
        const matchesDescription = joy.description?.toLowerCase().includes(searchTerm);
        const matchesTags = joy.tags?.some(tag => tag.toLowerCase().includes(searchTerm));
        const matchesCategory = joy.category.toLowerCase().includes(searchTerm);
        
        if (!matchesName && !matchesDescription && !matchesTags && !matchesCategory) {
          return false;
        }
      }
      
      return true;
    });
  },
  
  getJoysByCategory: (category) => {
    const { joys } = get();
    return joys.filter(joy => joy.category === category);
  },
  
  getFeaturedJoys: () => {
    const { joys } = get();
    return joys.filter(joy => joy.isFeatured).slice(0, 8);
  },
  
  getNewJoys: () => {
    const { joys } = get();
    return joys.filter(joy => joy.isNew);
  },
  
  getTrendingJoys: () => {
    const { joys } = get();
    return joys.filter(joy => joy.isTrending);
  },
  
  getSeasonalJoys: () => {
    const { joys } = get();
    return joys.filter(joy => joy.seasonal);
  },
  
  getJoyById: (id) => {
    const { joys } = get();
    return joys.find(joy => joy.id === parseInt(id));
  },
  
  getRelatedJoys: (joyId, limit = 4) => {
    const { joys } = get();
    const currentJoy = joys.find(j => j.id === parseInt(joyId));
    
    if (!currentJoy) return [];
    
    return joys
      .filter(joy => 
        joy.id !== parseInt(joyId) && 
        joy.category === currentJoy.category
      )
      .slice(0, limit);
  },
  
  getJoysByPriceRange: (minPrice, maxPrice) => {
    const { joys } = get();
    return joys.filter(joy => {
      if (!joy.sizes || joy.sizes.length === 0) return false;
      
      const joyMinPrice = Math.min(...joy.sizes.map(s => s.price));
      const joyMaxPrice = Math.max(...joy.sizes.map(s => s.price));
      
      return joyMinPrice <= maxPrice && joyMaxPrice >= minPrice;
    });
  },
  
  getAvailableCategories: () => {
    const { joys } = get();
    const categories = [...new Set(joys.map(j => j.category))];
    return categories.map(cat => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
      count: joys.filter(j => j.category === cat).length
    }));
  },
  
  getAvailableSizes: () => {
    const { joys } = get();
    const allSizes = joys.flatMap(joy => joy.sizes || []);
    const uniqueSizes = [...new Set(allSizes.map(s => s.size))];
    return uniqueSizes;
  },
  
  getPriceRange: () => {
    const { joys } = get();
    const allPrices = joys.flatMap(joy => joy.sizes?.map(s => s.price) || []);
    
    if (allPrices.length === 0) return { min: 0, max: 100 };
    
    return {
      min: Math.min(...allPrices),
      max: Math.max(...allPrices)
    };
  },
  
  // Acciones
  loadJoys: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simular un pequeño delay para mostrar loading
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Cargar joys desde el archivo de datos
      set({ 
        joys: joysData,
        filteredJoys: joysData,
        isLoading: false 
      });
      
      // Aplicar filtros después de cargar
      const filteredJoys = get().getFilteredJoys();
      set({ filteredJoys });
      
    } catch (error) {
      set({ 
        error: error.message || 'Error al cargar delicias', 
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
      
      // Calcular productos filtrados con los nuevos filtros
      const filteredJoys = state.joys.filter(joy => {
        // Aplicar la misma lógica de filtrado
        if (newFilters.category && newFilters.category !== '' && joy.category !== newFilters.category) {
          return false;
        }
        
        if (newFilters.featured && !joy.isFeatured) {
          return false;
        }
        
        if (newFilters.isNew && !joy.isNew) {
          return false;
        }
        
        if (newFilters.isTrending && !joy.isTrending) {
          return false;
        }
        
        if (newFilters.seasonal && !joy.seasonal) {
          return false;
        }
        
        if (joy.sizes && joy.sizes.length > 0) {
          const minPrice = Math.min(...joy.sizes.map(s => s.price));
          const maxPrice = Math.max(...joy.sizes.map(s => s.price));
          
          if (minPrice > newFilters.priceRange.max || maxPrice < newFilters.priceRange.min) {
            return false;
          }
        }
        
        if (newFilters.hasNutritionalInfo && (!joy.nutritionalInfo || joy.nutritionalInfo.length === 0)) {
          return false;
        }
        
        if (newFilters.search && newFilters.search.trim() !== '') {
          const searchTerm = newFilters.search.toLowerCase().trim();
          const matchesName = joy.name.toLowerCase().includes(searchTerm);
          const matchesDescription = joy.description?.toLowerCase().includes(searchTerm);
          const matchesTags = joy.tags?.some(tag => tag.toLowerCase().includes(searchTerm));
          const matchesCategory = joy.category.toLowerCase().includes(searchTerm);
          
          if (!matchesName && !matchesDescription && !matchesTags && !matchesCategory) {
            return false;
          }
        }
        
        return true;
      });
      
      return {
        activeFilters: newFilters,
        filteredJoys
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
      const filteredJoys = get().getFilteredJoys();
      
      return {
        activeFilters: newFilters,
        filteredJoys
      };
    });
  },
  
  clearFilters: () => {
    set(state => ({
      activeFilters: {
        category: '',
        search: '',
        featured: false,
        isNew: false,
        isTrending: false,
        seasonal: false,
        priceRange: { min: 0, max: 100 },
        hasNutritionalInfo: false
      },
      filteredJoys: state.joys
    }));
  },
  
  clearError: () => {
    set({ error: null });
  },
  
  // Acción para búsqueda
  searchJoys: (searchTerm) => {
    set(state => {
      const newFilters = {
        ...state.activeFilters,
        search: searchTerm
      };
      
      const filteredJoys = get().getFilteredJoys();
      
      return {
        activeFilters: newFilters,
        filteredJoys
      };
    });
  },
  
  // Acción para alternar filtros booleanos
  toggleFilter: (filterType) => {
    set(state => {
      const newFilters = {
        ...state.activeFilters,
        [filterType]: !state.activeFilters[filterType]
      };
      
      const filteredJoys = state.joys.filter(joy => {
        if (newFilters.category && newFilters.category !== '' && joy.category !== newFilters.category) {
          return false;
        }
        
        if (newFilters.featured && !joy.isFeatured) {
          return false;
        }
        
        if (newFilters.isNew && !joy.isNew) {
          return false;
        }
        
        if (newFilters.isTrending && !joy.isTrending) {
          return false;
        }
        
        if (newFilters.seasonal && !joy.seasonal) {
          return false;
        }
        
        if (joy.sizes && joy.sizes.length > 0) {
          const minPrice = Math.min(...joy.sizes.map(s => s.price));
          const maxPrice = Math.max(...joy.sizes.map(s => s.price));
          
          if (minPrice > newFilters.priceRange.max || maxPrice < newFilters.priceRange.min) {
            return false;
          }
        }
        
        if (newFilters.hasNutritionalInfo && (!joy.nutritionalInfo || joy.nutritionalInfo.length === 0)) {
          return false;
        }
        
        if (newFilters.search && newFilters.search.trim() !== '') {
          const searchTerm = newFilters.search.toLowerCase().trim();
          const matchesName = joy.name.toLowerCase().includes(searchTerm);
          const matchesDescription = joy.description?.toLowerCase().includes(searchTerm);
          const matchesTags = joy.tags?.some(tag => tag.toLowerCase().includes(searchTerm));
          const matchesCategory = joy.category.toLowerCase().includes(searchTerm);
          
          if (!matchesName && !matchesDescription && !matchesTags && !matchesCategory) {
            return false;
          }
        }
        
        return true;
      });
      
      return {
        activeFilters: newFilters,
        filteredJoys
      };
    });
  },
  
  // Acción para establecer rango de precios
  setPriceRange: (minPrice, maxPrice) => {
    set(state => {
      const newFilters = {
        ...state.activeFilters,
        priceRange: { min: minPrice, max: maxPrice }
      };
      
      const filteredJoys = get().getFilteredJoys();
      
      return {
        activeFilters: newFilters,
        filteredJoys
      };
    });
  }
}));

export { useJoysStore };