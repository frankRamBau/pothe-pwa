import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
import { useProductsStore } from '../../store/productsStore';
import { getRelatedProducts } from '../../utils/productHelpers';
import LazyImage from '../ui/LazyImage';
import Badge from '../ui/Badge';

const RelatedProducts = ({ 
  currentProduct, 
  maxItems = 8,
  title = "Te podría interesar también",
  className = "" 
}) => {
  const { products } = useProductsStore();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(new Set());

  // Configuración responsive para items por vista
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1.2; // sm
    if (window.innerWidth < 768) return 2.2; // md
    if (window.innerWidth < 1024) return 3.2; // lg
    return 4; // xl y superior
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (currentProduct && products.length > 0) {
      const related = getRelatedProducts(currentProduct, products, maxItems);
      setRelatedProducts(related);
      setCurrentIndex(0);
    }
  }, [currentProduct, products, maxItems]);

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, relatedProducts.length - Math.floor(itemsPerView));
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const canGoNext = currentIndex < Math.max(0, relatedProducts.length - Math.floor(itemsPerView));
  const canGoPrev = currentIndex > 0;

  // Container variants para animación
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  if (!relatedProducts.length) return null;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`py-8 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <motion.h3 
          className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          {title}
        </motion.h3>
        
        {/* Navigation Controls - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`p-2 rounded-full border transition-all duration-200 ${
              canGoPrev
                ? 'border-morado-300 text-morado-600 hover:bg-morado-50 hover:border-morado-400 dark:border-morado-600 dark:text-morado-400 dark:hover:bg-morado-900/20'
                : 'border-gray-200 text-gray-400 cursor-not-allowed dark:border-gray-700 dark:text-gray-600'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`p-2 rounded-full border transition-all duration-200 ${
              canGoNext
                ? 'border-morado-300 text-morado-600 hover:bg-morado-50 hover:border-morado-400 dark:border-morado-600 dark:text-morado-400 dark:hover:bg-morado-900/20'
                : 'border-gray-200 text-gray-400 cursor-not-allowed dark:border-gray-700 dark:text-gray-600'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
          }}
        >
          {relatedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="flex-shrink-0 px-2"
              style={{ 
                width: `${100 / itemsPerView}%` 
              }}
            >
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <LazyImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                  >
                    <Heart 
                      className={`w-4 h-4 transition-colors duration-200 ${
                        favorites.has(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    />
                  </button>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.isNew && (
                      <Badge variant="success" size="sm">
                        Nuevo
                      </Badge>
                    )}
                    {product.isPopular && (
                      <Badge variant="primary" size="sm">
                        Popular
                      </Badge>
                    )}
                    {product.isSeasonal && (
                      <Badge variant="warning" size="sm">
                        Temporada
                      </Badge>
                    )}
                    {product.isPetFriendly && (
                      <Badge variant="secondary" size="sm">
                        🐾 Pet
                      </Badge>
                    )}
                  </div>

                  {/* Quick Info Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span className="font-medium">Ver detalles</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-morado-600 dark:text-morado-400 uppercase tracking-wide">
                      {product.category}
                    </span>
                    
                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                          {product.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 line-clamp-2 group-hover:text-morado-600 dark:group-hover:text-morado-400 transition-colors duration-200">
                    {product.name}
                  </h4>

                  {/* Description */}
                  {product.shortDescription && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                      {product.shortDescription}
                    </p>
                  )}

                  {/* Special Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                          +{product.features.length - 2}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Price Range (if available) */}
                  {product.priceRange && (
                    <div className="text-sm font-semibold text-morado-600 dark:text-morado-400">
                      {product.priceRange}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="flex md:hidden justify-center items-center gap-2 mt-6">
        <button
          onClick={prevSlide}
          disabled={!canGoPrev}
          className={`p-2 rounded-full ${
            canGoPrev
              ? 'text-morado-600 hover:bg-morado-50 dark:text-morado-400 dark:hover:bg-morado-900/20'
              : 'text-gray-400 dark:text-gray-600'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-1">
          {Array.from({ length: Math.ceil(relatedProducts.length / Math.floor(itemsPerView)) }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / Math.floor(itemsPerView)) === idx
                  ? 'bg-morado-600 dark:bg-morado-400'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={!canGoNext}
          className={`p-2 rounded-full ${
            canGoNext
              ? 'text-morado-600 hover:bg-morado-50 dark:text-morado-400 dark:hover:bg-morado-900/20'
              : 'text-gray-400 dark:text-gray-600'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* View All Button */}
      <motion.div 
        variants={itemVariants}
        className="text-center mt-8"
      >
        <button className="inline-flex items-center px-6 py-3 text-sm font-medium text-morado-600 dark:text-morado-400 border border-morado-200 dark:border-morado-700 rounded-xl hover:bg-morado-50 dark:hover:bg-morado-900/20 transition-all duration-200 group">
          Ver todos los sabores
          <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </motion.div>
    </motion.section>
  );
};

export default RelatedProducts;