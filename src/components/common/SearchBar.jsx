import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { useFiltersStore } from '../../store/filtersStore'
import { useProductsStore } from '../../store/productsStore'

const SearchBar = ({ placeholder = "Buscar sabores..." }) => {
  const [localSearch, setLocalSearch] = useState('')
  
  const { 
    searchTerm, 
    setSearchTerm, 
    getFiltersConfig 
  } = useFiltersStore()
  
  const { 
    filterProducts 
  } = useProductsStore()

  // Sincronizar con el store global, asegurando que localSearch siempre sea string
  useEffect(() => {
    setLocalSearch(searchTerm ?? '')
  }, [searchTerm])

  // Debounce para la búsqueda
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (localSearch !== (searchTerm ?? '')) {
        setSearchTerm(localSearch)
        
        // Aplicar filtros cuando cambia la búsqueda
        const currentFilters = getFiltersConfig()
        filterProducts({
          ...currentFilters,
          searchTerm: localSearch
        })
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [localSearch, searchTerm, setSearchTerm, getFiltersConfig, filterProducts])

  const handleClear = () => {
    setLocalSearch('')
    setSearchTerm('')
    
    // Aplicar filtros sin término de búsqueda
    const currentFilters = getFiltersConfig()
    filterProducts({
      ...currentFilters,
      searchTerm: ''
    })
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" 
        />
        
        <input
          type="text"
          value={localSearch ?? ''}
          onChange={(e) => setLocalSearch(e.target.value)}
          placeholder={placeholder}
          className="
            w-full pl-10 pr-10 py-3 
            bg-white dark:bg-gray-800 
            border border-gray-200 dark:border-gray-700 
            rounded-full 
            text-gray-900 dark:text-gray-100
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-morado-500 focus:border-transparent
            transition-all duration-200
            shadow-sm hover:shadow-md
          "
        />
        
        {localSearch && (
          <button
            onClick={handleClear}
            className="
              absolute right-3 top-1/2 transform -translate-y-1/2 
              text-gray-400 hover:text-gray-600 dark:hover:text-gray-300
              transition-colors duration-200
              p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700
            "
            aria-label="Limpiar búsqueda"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      {/* Resultados rápidos (opcional) */}
      {localSearch && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50">
          <div className="p-2 text-sm text-gray-500 dark:text-gray-400">
            Buscando "{localSearch}"...
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar