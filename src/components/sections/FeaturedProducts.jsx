// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Sparkles } from 'lucide-react';
// import ProductCard from '../common/ProductCard';
// import ProductModal from '../common/ProductModal';

// const FeaturedProducts = ({ products = [] }) => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [favorites, setFavorites] = useState([]);

//   // Filtrar productos destacados y tomar solo los primeros 4
//   const featuredProducts = products
//     .filter(product => product.isFeatured === true || product.featured === "true")
//     .slice(0, 4);

//   // Manejar favoritos
//   const toggleFavorite = (productId) => {
//     setFavorites(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   // Manejar apertura del modal
//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   // Manejar compartir
//   const handleShare = async (product) => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: product.name,
//           text: product.description,
//           url: window.location.href
//         });
//       } catch (err) {
//         console.log('Error sharing:', err);
//       }
//     } else {
//       // Fallback para navegadores que no soportan Web Share API
//       const shareText = `¡Mira este delicioso sabor: ${product.name}! ${product.description}`;
//       navigator.clipboard.writeText(shareText);
//       alert('Información copiada al portapapeles');
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 50,
//       scale: 0.9
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Si no hay productos destacados, mostrar mensaje
//   if (featuredProducts.length === 0) {
//     return (
//       <section className="py-16 lg:py-24 bg-gradient-to-br from-crema-50 via-white to-crema-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-4xl lg:text-5xl font-bold text-morado-700 dark:text-white mb-6 font-lufga">
//               Productos Destacados
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300">
//               No hay productos destacados en este momento.
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <>
//       <section className="py-16 lg:py-24 bg-gradient-to-br from-crema-50 via-white to-crema-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Header Section */}
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <Sparkles className="w-6 h-6 text-salmon-500 animate-pulse" />
//               <span className="text-salmon-600 dark:text-salmon-400 font-semibold text-sm uppercase tracking-wider">
//                 Los Favoritos de Nuestros Clientes
//               </span>
//               <Sparkles className="w-6 h-6 text-salmon-500 animate-pulse" />
//             </div>
            
//             <h2 className="text-4xl lg:text-5xl font-bold text-morado-700 dark:text-white mb-6 font-lufga">
//               Sabores que
//               <span className="block bg-gradient-to-r from-morado-600 via-salmon-500 to-morado-600 bg-clip-text text-transparent">
//                 Enamoran
//               </span>
//             </h2>
            
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
//               Descubre por qué estos sabores han conquistado el corazón de más de 
//               <span className="font-bold text-morado-600 dark:text-morado-400"> 10,000 clientes felices</span>
//             </p>

//             {/* Stats destacadas */}
//             <motion.div 
//               className="flex flex-wrap justify-center gap-8 mt-8"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               <div className="text-center">
//                 <div className="flex items-center justify-center text-3xl font-bold text-morado-600 dark:text-morado-400">
//                   4.8 <span className="text-base ml-1">★</span>
//                 </div>
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Calificación promedio</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center text-3xl font-bold text-salmon-600 dark:text-salmon-400">
//                   80 <span className="text-3x1 ml-1">+</span></div>
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Sabores únicos</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-morado-600 dark:text-morado-400">24/7</div>
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Antojo garantizado</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Products Grid */}
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {featuredProducts.map((product) => (
//               <motion.div
//                 key={product.id}
//                 variants={cardVariants}
//                 className="group"
//               >
//                 <ProductCard
//                   product={product}
//                   onClick={handleProductClick}
//                   hoveredProduct={hoveredProduct}
//                   setHoveredProduct={setHoveredProduct}
//                   favorites={favorites}
//                   toggleFavorite={toggleFavorite}
//                   showCategory={true}
//                   showRating={true}
//                   showTags={false}
//                   showCTA={true}
//                   className="h-full transition-all duration-500 transform hover:scale-105"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Bottom CTA */}
//           <motion.div 
//             className="text-center mt-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
//               ¿Te antojaste? Tenemos más de <span className="font-bold text-morado-600 dark:text-morado-400">80 sabores únicos</span> esperándote
//             </p>
            
//             <motion.button
//               className="bg-gradient-to-r from-salmon-500 to-salmon-600 text-white px-8 py-4 rounded-full font-semibold text-lg cursor-pointer"
//             >
//               <Link to="/sabores" className="flex items-center gap-3">
//                 Explora todos los sabores
//                 <Sparkles className="w-5 h-5" />
//               </Link>
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Modal del Producto */}
//       {selectedProduct && (
//         <ProductModal
//           product={selectedProduct}
//           onClose={() => setSelectedProduct(null)}
//           isFavorite={favorites.includes(selectedProduct.id)}
//           onToggleFavorite={toggleFavorite}
//           onShare={handleShare}
//         />
//       )}
//     </>
//   );
// };

// export default FeaturedProducts;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Sparkles } from 'lucide-react';
// import ProductCard from '../common/ProductCard';
// import ProductModal from '../common/ProductModal';

// const FeaturedProducts = ({ products = [] }) => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [favorites, setFavorites] = useState([]);

//   // Filtrar productos destacados y tomar solo los primeros 4
//   const featuredProducts = products
//     .filter(product => product.isFeatured === true || product.featured === "true")
//     .slice(0, 4);

//   // Manejar favoritos
//   const toggleFavorite = (productId) => {
//     setFavorites(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   // Manejar apertura del modal
//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   // Manejar compartir
//   const handleShare = async (product) => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: product.name,
//           text: product.description,
//           url: window.location.href
//         });
//       } catch (err) {
//         console.log('Error sharing:', err);
//       }
//     } else {
//       // Fallback para navegadores que no soportan Web Share API
//       const shareText = `¡Mira este delicioso sabor: ${product.name}! ${product.description}`;
//       navigator.clipboard.writeText(shareText);
//       alert('Información copiada al portapapeles');
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 50,
//       scale: 0.9
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Si no hay productos destacados, mostrar mensaje
//   if (featuredProducts.length === 0) {
//     return (
//       <section className="py-16 lg:py-24 bg-gradient-to-br from-crema-50 via-white to-crema-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-4xl lg:text-5xl font-bold text-morado-700 dark:text-white mb-6 font-lufga">
//               Productos Destacados
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300">
//               No hay productos destacados en este momento.
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <>
//       <section className="py-16 lg:py-24 bg-gradient-to-br from-crema-50 via-white to-crema-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Header Section */}
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <Sparkles className="w-6 h-6 text-salmon-500 animate-pulse" />
//               <span className="text-salmon-600 dark:text-salmon-400 font-semibold text-sm uppercase tracking-wider">
//                 Los Favoritos de Nuestros Clientes
//               </span>
//               <Sparkles className="w-6 h-6 text-salmon-500 animate-pulse" />
//             </div>
            
//             <h2 className="text-4xl lg:text-5xl font-bold text-morado-700 dark:text-white mb-6 font-lufga">
//               Sabores que
//               <span className="block bg-gradient-to-r from-morado-600 via-salmon-500 to-morado-600 bg-clip-text text-transparent">
//                 Enamoran
//               </span>
//             </h2>
            
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
//               Descubre por qué estos sabores han conquistado el corazón de más de 
//               <span className="font-bold text-morado-600 dark:text-morado-400"> 10,000 clientes felices</span>
//             </p>

//             {/* Stats destacadas */}
//             <motion.div 
//               className="flex flex-wrap justify-center gap-8 mt-8"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               <div className="text-center">
//                 <div className="flex items-center justify-center text-3xl font-bold text-morado-600 dark:text-morado-400">
//                   4.8 <span className="text-base ml-1">★</span>
//                 </div>
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Calificación promedio</div>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center text-3xl font-bold text-salmon-600 dark:text-salmon-400">
//                   80 <span className="text-3x1 ml-1">+</span></div>
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Sabores únicos</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-morado-600 dark:text-morado-400">24/7</div>
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Antojo garantizado</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Products Grid - Modificado para mostrar 4 productos en móvil (2x2) */}
//           <motion.div 
//             className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {featuredProducts.map((product) => (
//               <motion.div
//                 key={product.id}
//                 variants={cardVariants}
//                 className="group"
//               >
//                 <ProductCard
//                   product={product}
//                   onClick={handleProductClick}
//                   hoveredProduct={hoveredProduct}
//                   setHoveredProduct={setHoveredProduct}
//                   favorites={favorites}
//                   toggleFavorite={toggleFavorite}
//                   showCategory={true}
//                   showRating={true}
//                   showTags={false}
//                   showCTA={true}
//                   className="h-full transition-all duration-500 transform hover:scale-105"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Bottom CTA */}
//           <motion.div 
//             className="text-center mt-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
//               ¿Te antojaste? Tenemos más de <span className="font-bold text-morado-600 dark:text-morado-400">80 sabores únicos</span> esperándote
//             </p>
            
//             <motion.button
//               className="bg-gradient-to-r from-salmon-500 to-salmon-600 text-white px-8 py-4 rounded-full font-semibold text-lg cursor-pointer"
//             >
//               <Link to="/sabores" className="flex items-center gap-3">
//                 Explora todos los sabores
//                 <Sparkles className="w-5 h-5" />
//               </Link>
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Modal del Producto */}
//       {selectedProduct && (
//         <ProductModal
//           product={selectedProduct}
//           onClose={() => setSelectedProduct(null)}
//           isFavorite={favorites.includes(selectedProduct.id)}
//           onToggleFavorite={toggleFavorite}
//           onShare={handleShare}
//         />
//       )}
//     </>
//   );
// };

// export default FeaturedProducts;

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../common/ProductCard';
import ProductModal from '../common/ProductModal';

const FeaturedProducts = ({ products = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const carouselRef = useRef(null);
  
  // Hook para detectar si es un dispositivo móvil (menos de 768px de ancho)
  const [isMobile, setIsMobile] = useState(false);
  
  // Efecto para detectar el tamaño de pantalla al cargar y en resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Comprobar al montar
    checkIsMobile();
    
    // Comprobar al cambiar el tamaño
    window.addEventListener('resize', checkIsMobile);
    
    // Limpiar
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Filtrar productos destacados - hasta 8 productos
  const featuredProducts = products
    .filter(product => product.isFeatured === true || product.featured === "true")
    .slice(0, 8);

  // Manejar favoritos
  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Manejar apertura del modal
  const handleProductClick = (product) => {
    if (!isDragging) {
      setSelectedProduct(product);
    }
  };

  // Manejar compartir
  const handleShare = async (product) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      const shareText = `¡Mira este delicioso sabor: ${product.name}! ${product.description}`;
      navigator.clipboard.writeText(shareText);
      alert('Información copiada al portapapeles');
    }
  };

  // Navegación del carousel
  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = 300;
    
    if (direction === 'left') {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Touch handlers optimizados
  const handleTouchStart = (e) => {
    setIsDragging(false);
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = Math.abs(currentX - dragStartX);
    
    if (diff > 5) {
      setIsDragging(true);
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsDragging(false), 100);
  };

  // Mouse handlers optimizados
  const handleMouseDown = (e) => {
    setIsDragging(false);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      const diff = Math.abs(e.clientX - dragStartX);
      if (diff > 5) {
        setIsDragging(true);
      }
    }
  };

  const handleMouseUp = () => {
    setTimeout(() => setIsDragging(false), 100);
  };

  // Configurar las animaciones basadas en el dispositivo
  const getAnimationProps = (animation) => {
    // Si es móvil, devolver objeto vacío (sin animaciones)
    if (isMobile) return {};
    // Si no es móvil, devolver las propiedades de animación normales
    return animation;
  };

  // Si no hay productos destacados
  if (featuredProducts.length === 0) {
    return (
      <section className="py-12 lg:py-16 bg-gradient-to-br from-crema-50 via-white to-crema-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-morado-700 dark:text-white mb-4 font-lufga">
              Helados Más Populares
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              No hay productos destacados en este momento.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Componente de encabezado condicional basado en el dispositivo
  const HeaderComponent = isMobile ? 'div' : motion.div;
  // Componente para cada producto del carousel condicional
  const ProductComponent = isMobile ? 'div' : motion.div;
  // Componente para CTA condicional
  const CTAComponent = isMobile ? 'div' : motion.div;
  // Componente para botón condicional
  const ButtonComponent = isMobile ? 'button' : motion.button;

  return (
    <>
      <section className="py-12 lg:py-16 bg-gradient-to-br from-crema-50 via-white to-crema-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Simplificado */}
          <HeaderComponent 
            className="text-center mb-4 lg:mb-8"
            {...getAnimationProps({
              initial: { opacity: 0, y: -20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 }
            })}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-salmon-500" />
              <span className="text-salmon-600 dark:text-salmon-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Los Favoritos
              </span>
              <Sparkles className="w-5 h-5 text-salmon-500" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-morado-700 dark:text-white mb-2 font-lufga">
              Helados Más Populares
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Los sabores que más aman nuestros clientes
            </p>
          </HeaderComponent>

          {/* Carousel Container */}
          <div className="relative -mx-6 sm:mx-0">
            {/* Navigation Buttons - Desktop */}
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl text-morado-600 dark:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl text-morado-600 dark:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 items-center justify-center"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel */}
            <div 
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-0"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollPaddingLeft: '1rem'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {featuredProducts.map((product, index) => (
                <ProductComponent
                  key={product.id}
                  className="flex-shrink-0 snap-start w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] min-w-[160px] max-w-[280px]"
                  {...getAnimationProps({
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.2 },
                    transition: { delay: Math.min(index * 0.05, 0.3), duration: 0.4 }
                  })}
                >
                  <ProductCard
                    product={product}
                    onClick={handleProductClick}
                    hoveredProduct={hoveredProduct}
                    setHoveredProduct={setHoveredProduct}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                    showCategory={true}
                    showRating={true}
                    showTags={false}
                    showCTA={true}
                    className="h-full transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
                  />
                </ProductComponent>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <CTAComponent
            className="text-center mt-6 lg:mt-8"
            {...getAnimationProps({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.3, duration: 0.6 }
            })}
          >
            <Link to="/sabores">
              <ButtonComponent
                {...getAnimationProps({
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 }
                })}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-morado-500 to-morado-600 hover:from-morado-600 hover:to-morado-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver Todos los Sabores
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </ButtonComponent>
            </Link>
          </CTAComponent>
        </div>
      </section>

      {/* Modal del Producto */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          isFavorite={favorites.includes(selectedProduct.id)}
          onToggleFavorite={toggleFavorite}
          onShare={handleShare}
        />
      )}
    </>
  );
};

export default FeaturedProducts;