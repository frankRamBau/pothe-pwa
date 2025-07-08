import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProducts } from '../../hooks/useProducts';
import { useFilters } from '../../hooks/useFilters';
import { usePagination } from '../../hooks/usePagination';
import ProductCard from '../common/ProductCard';
import LazyImage from '../ui/LazyImage';
import LoadingSpinner from '../ui/LoadingSpinner';
import EmptyState from './EmptyState';

const ProductsGrid = () => {
  const { 
    filteredProducts, 
    loading, 
    error,
    totalProducts,
    hasMore,
    loadMore 
  } = useProducts();
  
  const { activeFilters, searchTerm } = useFilters();
  const { 
    currentPage, 
    itemsPerPage, 
    paginatedItems,
    canLoadMore,
    nextPage 
  } = usePagination(filteredProducts);

  // Referencias para scroll infinito
  const observerRef = useRef();
  const loadingRef = useRef();
  
  // Estado para controlar animaciones
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [gridKey, setGridKey] = useState(0);

  // Configuración de paginación
  const ITEMS_PER_PAGE = 20;
  const ITEMS_PER_ROW = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
    xl: 5
  };

  // Efecto para detectar cambios en filtros y reiniciar grid
  useEffect(() => {
    setGridKey(prev => prev + 1);
    setIsInitialLoad(false);
  }, [activeFilters, searchTerm]);

  // Configuración del Intersection Observer para scroll infinito
  const lastProductElementRef = useCallback(node => {
    if (loading) return;
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && canLoadMore) {
        nextPage();
      }
    }, {
      threshold: 0.1,
      rootMargin: '100px'
    });
    
    if (node) observerRef.current.observe(node);
  }, [loading, canLoadMore, nextPage]);

  // Variantes de animación para el grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  // Función para manejar el clic en producto
  const handleProductClick = (product) => {
    // Implementar navegación o modal de detalle
    console.log('Producto seleccionado:', product);
    // Aquí iría la lógica para abrir modal o navegar a detalle
  };

  // Componente de estadísticas del grid
  const GridStats = ({ total, showing, hasFilters }) => (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between mb-6 px-1"
    >
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <span className="font-medium text-morado-600 dark:text-morado-400">
          {showing}
        </span>
        <span>de</span>
        <span className="font-medium">
          {total}
        </span>
        <span>
          {total === 1 ? 'producto' : 'productos'}
        </span>
        {hasFilters && (
          <span className="text-xs bg-morado-100 dark:bg-morado-900/30 text-morado-700 dark:text-morado-300 px-2 py-1 rounded-full">
            Filtrado
          </span>
        )}
      </div>
      
      {/* Indicador de carga */}
      {loading && (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <LoadingSpinner size="sm" />
          <span>Cargando...</span>
        </div>
      )}
    </motion.div>
  );

  // Componente de producto con referencia para scroll infinito
  const ProductItem = ({ product, index, isLast }) => (
    <motion.div
      key={`${gridKey}-${product.id}`}
      ref={isLast ? lastProductElementRef : null}
      variants={itemVariants}
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
      whileTap={{ scale: 0.95 }}
      className="w-full"
    >
      <ProductCard
        product={product}
        onClick={() => handleProductClick(product)}
        showCategory={true}
        showRating={true}
        showBadges={true}
        className="h-full"
        imageProps={{
          loading: index < 8 ? 'eager' : 'lazy',
          placeholder: true
        }}
      />
    </motion.div>
  );

  // Manejo de estados de error
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-red-500 text-center">
          <h3 className="text-lg font-semibold mb-2">
            Error al cargar productos
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {error}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-morado-600 text-white rounded-lg hover:bg-morado-700 transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  // Estado vacío (sin productos)
  if (!loading && paginatedItems.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="w-full">
      {/* Estadísticas del grid */}
      <GridStats 
        total={totalProducts}
        showing={paginatedItems.length}
        hasFilters={activeFilters.length > 0 || searchTerm.length > 0}
      />

      {/* Grid de productos */}
      <motion.div
        key={gridKey}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
      >
        <AnimatePresence mode="wait">
          {paginatedItems.map((product, index) => (
            <ProductItem
              key={product.id}
              product={product}
              index={index}
              isLast={index === paginatedItems.length - 1}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Indicador de carga para scroll infinito */}
      {canLoadMore && (
        <motion.div
          ref={loadingRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center py-8"
        >
          <div className="flex items-center gap-3 text-gray-500">
            <LoadingSpinner size="md" />
            <span className="text-sm">
              Cargando más productos...
            </span>
          </div>
        </motion.div>
      )}

      {/* Mensaje de fin de resultados */}
      {!canLoadMore && paginatedItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span>
              Has visto todos los productos disponibles
            </span>
          </div>
        </motion.div>
      )}

      {/* Botón para volver arriba (cuando hay muchos productos) */}
      {paginatedItems.length > 20 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-4 z-40 bg-morado-600 hover:bg-morado-700 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Volver arriba"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default ProductsGrid;