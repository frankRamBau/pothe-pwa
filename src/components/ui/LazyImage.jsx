import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Componente LazyImage con lazy loading nativo y fallbacks
 * Optimizado para PWA con animaciones suaves y manejo de errores
 */
const LazyImage = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  placeholderClassName = '',
  width,
  height,
  aspectRatio = 'aspect-square',
  priority = false,
  onLoad,
  onError,
  placeholder = 'blur', // 'blur', 'skeleton', 'color', 'custom'
  placeholderSrc,
  placeholderColor = 'bg-crema-200 dark:bg-morado-900/20',
  fallbackSrc = '/images/placeholder-helado.jpg',
  quality = 85,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  objectFit = 'cover',
  objectPosition = 'center',
  enableBlur = true,
  blurAmount = 'blur-sm',
  children,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px', // Cargar 50px antes de ser visible
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Manejar carga de imagen
  const handleLoad = (e) => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.(e);
  };

  // Manejar errores de carga
  const handleError = (e) => {
    setHasError(true);
    setIsLoaded(false);
    onError?.(e);
    
    // Intentar con fallback si no es el fallback mismo
    if (e.target.src !== fallbackSrc) {
      e.target.src = fallbackSrc;
    }
  };

  // Generar srcSet para diferentes densidades
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc || hasError) return '';
    
    const baseUrl = baseSrc.split('.').slice(0, -1).join('.');
    const extension = baseSrc.split('.').pop();
    
    return `
      ${baseSrc} 1x,
      ${baseUrl}@2x.${extension} 2x
    `.trim();
  };

  // Componente de placeholder
  const renderPlaceholder = () => {
    switch (placeholder) {
      case 'skeleton':
        return (
          <div className={`animate-pulse ${placeholderColor} ${aspectRatio} w-full`}>
            <div className="flex items-center justify-center h-full">
              <div className="w-8 h-8 text-morado-300 dark:text-morado-600">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>
        );

      case 'color':
        return (
          <div className={`${placeholderColor} ${aspectRatio} w-full flex items-center justify-center`}>
            <div className="text-morado-400 dark:text-morado-500 text-sm font-medium">
              🍨
            </div>
          </div>
        );

      case 'custom':
        return (
          <div className={`${placeholderColor} ${aspectRatio} w-full ${placeholderClassName}`}>
            {children}
          </div>
        );

      case 'blur':
      default:
        return placeholderSrc ? (
          <img
            src={placeholderSrc}
            alt=""
            className={`${aspectRatio} w-full object-${objectFit} object-${objectPosition} ${enableBlur ? blurAmount : ''} ${placeholderClassName}`}
            aria-hidden="true"
          />
        ) : (
          <div className={`${placeholderColor} ${aspectRatio} w-full animate-pulse`} />
        );
    }
  };

  // Variantes de animación
  const imageVariants = {
    loading: {
      opacity: 0,
      scale: 1.05
    },
    loaded: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const placeholderVariants = {
    visible: {
      opacity: 1
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ width, height }}
      {...props}
    >
      {/* Placeholder */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            variants={placeholderVariants}
            initial="visible"
            exit="hidden"
            className="absolute inset-0 z-10"
          >
            {renderPlaceholder()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Imagen principal */}
      {(isInView || priority) && (
        <motion.img
          ref={imgRef}
          src={hasError ? fallbackSrc : src}
          srcSet={generateSrcSet(hasError ? fallbackSrc : src)}
          sizes={sizes}
          alt={alt}
          className={`${aspectRatio} w-full object-${objectFit} object-${objectPosition} ${className}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          variants={imageVariants}
          initial="loading"
          animate={isLoaded ? "loaded" : "loading"}
          style={{
            objectFit,
            objectPosition,
            width: '100%',
            height: '100%'
          }}
        />
      )}

      {/* Overlay de carga */}
      <AnimatePresence>
        {!isLoaded && isInView && !hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-morado-900/80 backdrop-blur-sm z-20"
          >
            <div className="w-6 h-6 border-2 border-morado-500 border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Indicador de error */}
      <AnimatePresence>
        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-crema-100 dark:bg-morado-900/50 text-morado-600 dark:text-morado-400 z-20"
          >
            <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-xs text-center px-2">
              Error al cargar imagen
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido superpuesto opcional */}
      {children && (
        <div className="absolute inset-0 z-30">
          {children}
        </div>
      )}
    </div>
  );
};

// Componente especializado para productos
export const ProductImage = ({ product, ...props }) => {
  const defaultPlaceholder = `/images/products/placeholder-${product?.category || 'helado'}.jpg`;
  
  return (
    <LazyImage
      src={product?.image}
      alt={product?.name || 'Producto Pöthe'}
      placeholder="blur"
      placeholderSrc={defaultPlaceholder}
      aspectRatio="aspect-square"
      objectFit="cover"
      className="rounded-xl transition-transform duration-300 group-hover:scale-105"
      {...props}
    />
  );
};

// Componente para imágenes de hero/banner
export const HeroImage = ({ ...props }) => {
  return (
    <LazyImage
      priority={true}
      aspectRatio="aspect-video md:aspect-[21/9]"
      objectFit="cover"
      objectPosition="center"
      className="rounded-2xl"
      placeholder="color"
      placeholderColor="bg-gradient-to-br from-morado-100 to-salmon-100 dark:from-morado-900 to-salmon-900"
      {...props}
    />
  );
};

// Componente para avatares/fotos pequeñas
export const AvatarImage = ({ size = 'md', ...props }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <LazyImage
      aspectRatio=""
      className={`${sizeClasses[size]} rounded-full object-cover`}
      placeholder="skeleton"
      {...props}
    />
  );
};

export default LazyImage;