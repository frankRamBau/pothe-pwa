import { motion } from 'framer-motion';
import { Search, Filter, RefreshCw, IceCream } from 'lucide-react';

const EmptyState = ({ 
  type = 'search', 
  searchTerm = '', 
  activeFilters = [], 
  onClearFilters,
  onClearSearch,
  onReset 
}) => {
  const getEmptyStateContent = () => {
    switch (type) {
      case 'search':
        return {
          icon: Search,
          title: `No encontramos "${searchTerm}"`,
          description: 'Intenta buscar con otras palabras o revisa la ortografía',
          suggestions: [
            'Verifica que esté bien escrito',
            'Usa palabras más generales',
            'Intenta con sinónimos'
          ]
        };
      
      case 'filters':
        return {
          icon: Filter,
          title: 'Sin resultados con estos filtros',
          description: 'Ajusta los filtros para ver más opciones',
          suggestions: [
            'Selecciona menos filtros',
            'Prueba otras categorías',
            'Revisa las opciones disponibles'
          ]
        };
      
      case 'category':
        return {
          icon: IceCream,
          title: 'Esta categoría está vacía',
          description: 'Pronto tendremos más sabores disponibles',
          suggestions: [
            'Explora otras categorías',
            'Revisa nuestros sabores destacados',
            'Contacta para sugerencias'
          ]
        };
      
      default:
        return {
          icon: Search,
          title: 'No hay resultados',
          description: 'No pudimos encontrar lo que buscas',
          suggestions: [
            'Intenta con otros términos',
            'Revisa los filtros activos',
            'Explora nuestro catálogo completo'
          ]
        };
    }
  };

  const content = getEmptyStateContent();
  const IconComponent = content.icon;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      {/* Icono principal */}
      <motion.div
        variants={itemVariants}
        className="mb-6 p-4 rounded-full bg-gradient-to-br from-morado-100 to-salmon-100 dark:from-morado-900/20 dark:to-salmon-900/20"
      >
        <IconComponent className="w-12 h-12 text-morado-500 dark:text-morado-400" />
      </motion.div>

      {/* Título */}
      <motion.h3
        variants={itemVariants}
        className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
      >
        {content.title}
      </motion.h3>

      {/* Descripción */}
      <motion.p
        variants={itemVariants}
        className="text-gray-600 dark:text-gray-300 mb-6 max-w-md"
      >
        {content.description}
      </motion.p>

      {/* Filtros activos */}
      {activeFilters.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Filtros activos:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {activeFilters.map((filter, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-morado-100 dark:bg-morado-900/30 text-morado-700 dark:text-morado-300 rounded-full text-sm"
              >
                {filter}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Sugerencias */}
      <motion.div
        variants={itemVariants}
        className="mb-8"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Sugerencias:
        </p>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          {content.suggestions.map((suggestion, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-salmon-400 rounded-full"></span>
              {suggestion}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Botones de acción */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-3"
      >
        {/* Limpiar búsqueda */}
        {searchTerm && onClearSearch && (
          <button
            onClick={onClearSearch}
            className="flex items-center gap-2 px-4 py-2 bg-salmon-500 hover:bg-salmon-600 text-white rounded-lg transition-colors duration-200"
          >
            <Search className="w-4 h-4" />
            Limpiar búsqueda
          </button>
        )}

        {/* Limpiar filtros */}
        {activeFilters.length > 0 && onClearFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
          >
            <Filter className="w-4 h-4" />
            Limpiar filtros
          </button>
        )}

        {/* Reset completo */}
        {onReset && (
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 border-2 border-morado-500 text-morado-600 dark:text-morado-400 hover:bg-morado-50 dark:hover:bg-morado-900/20 rounded-lg transition-colors duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            Ver todos los sabores
          </button>
        )}
      </motion.div>

      {/* Decoración adicional */}
      <motion.div
        variants={itemVariants}
        className="mt-8 flex gap-2 opacity-30"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-gradient-to-r from-morado-400 to-salmon-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default EmptyState;