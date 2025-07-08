import React from 'react';
import { motion } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';
import { useFiltersStore } from '../../store/filtersStore';
import { PRODUCT_CATEGORIES, SPECIAL_FILTERS } from '../../data/filters';

const FilterSelector = ({ 
  className = '',
  showActiveFilters = true,
  variant = 'default' // 'default' | 'compact' | 'mobile'
}) => {
  const {
    activeFilters,
    searchTerm,
    sortBy,
    addFilter,
    removeFilter,
    clearFilters,
    setSortBy,
    hasActiveFilters
  } = useFiltersStore();

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const FilterChip = ({ filter, isActive, onClick, icon: Icon }) => (
    <motion.button
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200 border-2
        ${isActive 
          ? 'bg-morado-500 text-white border-morado-500 shadow-lg' 
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-morado-300 hover:bg-morado-50 dark:hover:bg-morado-900/20'
        }
        ${variant === 'compact' ? 'px-3 py-1.5 text-xs' : ''}
        ${variant === 'mobile' ? 'px-6 py-3 text-base' : ''}
      `}
    >
      {Icon && <Icon size={variant === 'compact' ? 14 : 16} />}
      <span>{filter.label}</span>
      {isActive && <X size={14} className="ml-1" />}
    </motion.button>
  );

  const SortDropdown = () => (
    <div className="relative group">
      <button className="
        inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
        bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 
        border border-gray-200 dark:border-gray-600
        hover:border-morado-300 hover:bg-morado-50 dark:hover:bg-morado-900/20
        focus:outline-none focus:ring-2 focus:ring-morado-500 focus:ring-offset-2
        transition-all duration-200
      ">
        <Filter size={16} />
        <span>Ordenar por: {SORT_OPTIONS.find(opt => opt.value === sortBy)?.label}</span>
        <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
      </button>
      
      <div className="
        absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 
        border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-50
      ">
        {SORT_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => setSortBy(option.value)}
            className={`
              block w-full text-left px-4 py-2 text-sm
              hover:bg-morado-50 dark:hover:bg-morado-900/20
              transition-colors duration-150
              ${sortBy === option.value ? 'text-morado-600 bg-morado-50 dark:bg-morado-900/20' : 'text-gray-700 dark:text-gray-300'}
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  const ActiveFilters = () => {
    if (!showActiveFilters || !hasActiveFilters()) return null;

    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="flex flex-wrap items-center gap-2 mt-4"
      >
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          Filtros activos:
        </span>
        
        {activeFilters.map((filterId) => {
          const filter = [...PRODUCT_CATEGORIES, ...SPECIAL_FILTERS]
            .find(f => f.id === filterId);
          
          if (!filter) return null;
          
          return (
            <motion.span
              key={filterId}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="
                inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs
                bg-morado-100 dark:bg-morado-900/30 text-morado-700 dark:text-morado-300
                border border-morado-200 dark:border-morado-700
              "
            >
              {filter.label}
              <button
                onClick={() => removeFilter(filterId)}
                className="ml-1 hover:bg-morado-200 dark:hover:bg-morado-800 rounded-full p-0.5"
              >
                <X size={12} />
              </button>
            </motion.span>
          );
        })}
        
        {searchTerm && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="
              inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs
              bg-salmon-100 dark:bg-salmon-900/30 text-salmon-700 dark:text-salmon-300
              border border-salmon-200 dark:border-salmon-700
            "
          >
            Búsqueda: "{searchTerm}"
          </motion.span>
        )}
        
        <button
          onClick={clearFilters}
          className="
            inline-flex items-center gap-1 px-2 py-1 text-xs
            text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md
            transition-colors duration-150
          "
        >
          <X size={12} />
          Limpiar todo
        </button>
      </motion.div>
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`filter-selector ${className}`}
    >
      {/* Filtros Principales */}
      <div className="space-y-4">
        {/* Categorías de Productos */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
            Categorías
          </h3>
          <div className="flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map((category) => (
              <FilterChip
                key={category.id}
                filter={category}
                icon={category.icon}
                isActive={activeFilters.includes(category.id)}
                onClick={() => {
                  if (activeFilters.includes(category.id)) {
                    removeFilter(category.id);
                  } else {
                    addFilter(category.id);
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Filtros Especiales */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
            Características Especiales
          </h3>
          <div className="flex flex-wrap gap-2">
            {SPECIAL_FILTERS.map((filter) => (
              <FilterChip
                key={filter.id}
                filter={filter}
                icon={filter.icon}
                isActive={activeFilters.includes(filter.id)}
                onClick={() => {
                  if (activeFilters.includes(filter.id)) {
                    removeFilter(filter.id);
                  } else {
                    addFilter(filter.id);
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Ordenamiento */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
          <SortDropdown />
          
          {hasActiveFilters() && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={clearFilters}
              className="
                text-sm text-gray-500 hover:text-morado-600 dark:text-gray-400 dark:hover:text-morado-400
                transition-colors duration-150 underline decoration-dotted underline-offset-4
              "
            >
              Limpiar filtros
            </motion.button>
          )}
        </div>
      </div>

      {/* Filtros Activos */}
      <ActiveFilters />
    </motion.div>
  );
};

// Opciones de ordenamiento
const SORT_OPTIONS = [
  { value: 'name', label: 'Nombre A-Z' },
  { value: 'name-desc', label: 'Nombre Z-A' },
  { value: 'rating', label: 'Mejor valorados' },
  { value: 'popular', label: 'Más populares' },
  { value: 'newest', label: 'Más recientes' },
  { value: 'category', label: 'Por categoría' }
];

export default FilterSelector;