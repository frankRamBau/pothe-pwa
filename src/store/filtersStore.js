// src/store/filtersStore.js

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Store de Zustand para manejar el estado de filtros de productos
 * Persiste algunos filtros en localStorage para mejor UX
 */
export const useFiltersStore = create(
  persist(
    (set, get) => ({
      // Estado inicial de filtros
      category: 'todos',
      search: '',
      sortBy: 'name',
      sortOrder: 'asc',
      petFriendly: false,
      seasonal: false,
      
      // Acciones para actualizar filtros
      setCategory: (category) => set({ category }),
      
      setSearch: (search) => set({ search }),
      
      setSortBy: (sortBy) => set({ sortBy }),
      
      setSortOrder: (sortOrder) => set({ sortOrder }),
      
      setPetFriendly: (petFriendly) => set({ petFriendly }),
      
      setSeasonal: (seasonal) => set({ seasonal }),
      
      // Función para limpiar todos los filtros
      clearFilters: () => set({
        category: 'todos',
        search: '',
        sortBy: 'name',
        sortOrder: 'asc',
        petFriendly: false,
        seasonal: false
      }),
      
      // Función para establecer múltiples filtros a la vez
      setFilters: (filters) => set((state) => ({
        ...state,
        ...filters
      })),
      
      // Función para alternar ordenamiento
      toggleSortOrder: () => set((state) => ({
        sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc'
      })),
      
      // Computed: número de filtros activos
      get activeFiltersCount() {
        const state = get();
        let count = 0;
        
        if (state.category !== 'todos') count++;
        if (state.search.trim() !== '') count++;
        if (state.petFriendly) count++;
        if (state.seasonal) count++;
        
        return count;
      },
      
      // Computed: verificar si hay filtros activos
      get hasActiveFilters() {
        return get().activeFiltersCount > 0;
      },
      
      // Computed: obtener filtros como objeto
      get currentFilters() {
        const state = get();
        return {
          category: state.category,
          search: state.search,
          sortBy: state.sortBy,
          sortOrder: state.sortOrder,
          petFriendly: state.petFriendly,
          seasonal: state.seasonal
        };
      }
    }),
    {
      name: 'pothe-filters-storage',
      // Solo persiste algunos filtros (no la búsqueda para mejor UX)
      partialize: (state) => ({
        category: state.category,
        sortBy: state.sortBy,
        sortOrder: state.sortOrder,
        petFriendly: state.petFriendly,
        seasonal: state.seasonal
      })
    }
  )
);