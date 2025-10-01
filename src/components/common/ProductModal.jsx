// import React, { useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Star, Heart, Share2, ShoppingCart, UserRoundCheck } from 'lucide-react';

// const ProductModal = ({ 
//   product, 
//   onClose, 
//   isFavorite = false,
//   onToggleFavorite,
//   onShare
// }) => {
//   // Memoizar el backdrop click para evitar re-renders
//   const handleBackdropClick = useCallback((e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   }, [onClose]);

//   // Memoizar el share handler
//   const handleShare = useCallback(async () => {
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
//     } else if (onShare) {
//       onShare(product);
//     }
//   }, [product, onShare]);

//   // Memoizar el toggle favorite
//   const handleToggleFavorite = useCallback((e) => {
//     e.stopPropagation();
//     if (onToggleFavorite) {
//       onToggleFavorite(product.id);
//     }
//   }, [product.id, onToggleFavorite]);

//   // Memoizar el WhatsApp handler
//   const handleWhatsAppContact = useCallback(() => {
//     const message = `Hola! Me interesa el sabor ${product.name}. ¿Podrían darme más información?`;
//     const whatsappUrl = `https://wa.me/5212345678901?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   }, [product.name]);

//   if (!product) return null;

//   const sizes = [
//     { name: 'Chico', price: 45, ml: '100ml' },
//     { name: 'Mediano', price: 65, ml: '150ml' },
//     { name: 'Grande', price: 85, ml: '200ml' },
//     { name: 'Medio Litro', price: 120, ml: '500ml' },
//     { name: 'Un Litro', price: 220, ml: '1000ml' }
//   ];

//   // Función para obtener el color del badge
//   const getBadgeColor = (badge) => {
//     switch (badge) {
//       case "Más Vendido":
//         return "bg-gradient-to-r from-morado-500 to-morado-600 text-white";
//       case "Nuevo":
//         return "bg-gradient-to-r from-orange-500 to-red-500 text-white";
//       case "Favorito":
//         return "bg-gradient-to-r from-amber-500 to-orange-500 text-white";
//       case "Gourmet":
//         return "bg-gradient-to-r from-emerald-500 to-green-600 text-white";
//       case "Temporada":
//         return "bg-gradient-to-r from-morado-500 to-pink-500 text-white";
//       case "Sin Azúcar":
//         return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
//       case "Vegano":
//         return "bg-gradient-to-r from-green-500 to-lime-500 text-white";
//       case "Pet Friendly":
//         return "bg-gradient-to-r from-orange-500 to-yellow-500 text-white";
//       default:
//         return "bg-morado-500 text-white";
//     }
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.15 }}
//       onClick={handleBackdropClick}
//     >
//       <motion.div
//         className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.95, opacity: 0 }}
//         transition={{ type: "spring", duration: 0.3, bounce: 0.1 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header del Modal */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
//           <div className="flex items-center gap-3">
//             {product.badge && (
//               <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(product.badge)}`}>
//                 {product.badge}
//               </span>
//             )}
//             <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 capitalize">
//               {Array.isArray(product.category) ? product.category.join(', ') : product.category}
//             </span>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <button
//               onClick={handleShare}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//             >
//               <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
//             </button>
//             <button
//               onClick={handleToggleFavorite}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//             >
//               <Heart className={`w-4 h-4 transition-colors ${
//                 isFavorite ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-400'
//               }`} />
//             </button>
//             <button
//               onClick={onClose}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//             >
//               <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
//             </button>
//           </div>
//         </div>

//         {/* Contenido Scrolleable */}
//         <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
//           {/* Sección Principal */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
//             {/* Imagen del Producto */}
//             <div className="relative">
//               <div className="w-full h-80 lg:h-96 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                   loading="eager"
//                   onError={(e) => {
//                     e.target.src = '/api/placeholder/400/400';
//                   }}
//                 />
//               </div>
              
//               {/* Rating sobrepuesto */}
//               {product.rating && (
//                 <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1">
//                   <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                   <span className="text-sm font-medium text-gray-900 dark:text-white">
//                     {product.rating}
//                   </span>
//                   {product.reviews && (
//                     <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
//                       ({product.reviews})
//                     </span>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Información del Producto */}
//             <div className="space-y-6">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//                   {product.name}
//                 </h2>
//                 <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
//                   {product.description}
//                 </p>
//               </div>

//               {/* Tags */}
//               {product.tags && product.tags.length > 0 && (
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                     Características
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {product.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Información Nutricional */}
//               {product.nutritionalInfo && (
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                     Información Nutricional
//                   </h3>
//                   <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
//                     <div className="grid grid-cols-2 gap-4 text-sm">
//                       {Object.entries(product.nutritionalInfo).map(([key, value]) => (
//                         <div key={key} className="flex justify-between">
//                           <span className="text-gray-600 dark:text-gray-400 capitalize">
//                             {key.replace(/([A-Z])/g, ' $1').trim()}:
//                           </span>
//                           <span className="font-medium text-gray-900 dark:text-white">
//                             {value}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Tamaños y Precios */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                   Tamaños Disponibles
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {sizes.map((size, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-morado-400 dark:hover:border-morado-400 transition-colors cursor-pointer group"
//                     >
//                       <div>
//                         <div className="font-medium text-gray-900 dark:text-white">
//                           {size.name}
//                         </div>
//                         <div className="text-sm text-gray-500 dark:text-gray-400">
//                           {size.ml}
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="font-bold text-morado-600 dark:text-morado-400">
//                           ${size.price}
//                         </div>
//                         <div className="text-xs text-gray-500 dark:text-gray-400">
//                           MXN
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Botón de Contacto */}
//               {/* <div className="pt-4">
//                 <button
//                   onClick={handleWhatsAppContact}
//                   className="w-full bg-gradient-to-r from-morado-600 to-morado-700 hover:from-morado-700 hover:to-morado-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl cursor-pointer"
//                 >
//                   <ShoppingCart className="w-5 h-5" />
//                   Pedir por WhatsApp
//                 </button>
//               </div> */}

//               <div className="pt-4">
//                 <button
//                   onClick={handleWhatsAppContact}
//                   className="w-full bg-gradient-to-r from-morado-600 to-morado-700 hover:from-morado-700 hover:to-morado-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl cursor-pointer"
//                 >
//                   <UserRoundCheck className="w-5 h-5" />
//                   Consultar disponibilidad
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProductModal;

// import React, { useCallback, useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { X, Star, Heart, Share2, UserRoundCheck, ChevronLeft, ChevronRight } from 'lucide-react';

// // Componente Carousel separado y optimizado
// const ImageCarousel = ({ images, productName }) => {
//   const [current, setCurrent] = useState(0);
//   const carouselRef = useRef(null);

//   // Validar y procesar las imágenes
//   const validImages = React.useMemo(() => {
//     if (!images || images.length === 0) {
//       return ['/api/placeholder/400/400'];
//     }
    
//     // Filtrar imágenes válidas (no vacías)
//     const filtered = images.filter(img => img && img.trim() !== '');
//     return filtered.length > 0 ? filtered : ['/api/placeholder/400/400'];
//   }, [images]);

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (!carousel) return;

//     let startX = 0;
//     let startY = 0;

//     const handleTouchStart = (e) => {
//       startX = e.touches[0].clientX;
//       startY = e.touches[0].clientY;
//     };

//     const handleTouchEnd = (e) => {
//       const endX = e.changedTouches[0].clientX;
//       const endY = e.changedTouches[0].clientY;
//       const diffX = startX - endX;
//       const diffY = Math.abs(startY - endY);

//       // Solo procesar swipe horizontal si el movimiento vertical es mínimo
//       if (diffY < 50 && Math.abs(diffX) > 50) {
//         if (diffX > 0) nextImage(); // swipe left
//         else prevImage(); // swipe right
//       }
//     };

//     carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
//     carousel.addEventListener('touchend', handleTouchEnd, { passive: true });

//     return () => {
//       carousel.removeEventListener('touchstart', handleTouchStart);
//       carousel.removeEventListener('touchend', handleTouchEnd);
//     };
//   }, [current, validImages.length]);

//   const nextImage = useCallback(() => {
//     setCurrent((prev) => (prev + 1) % validImages.length);
//   }, [validImages.length]);

//   const prevImage = useCallback(() => {
//     setCurrent((prev) => (prev - 1 + validImages.length) % validImages.length);
//   }, [validImages.length]);

//   // Resetear current si cambian las imágenes
//   useEffect(() => {
//     setCurrent(0);
//   }, [validImages]);

//   return (
//     <div className="relative" ref={carouselRef}>
//       <div className="w-full h-80 lg:h-96 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
//         <img
//           src={validImages[current]}
//           alt={`${productName} - Imagen ${current + 1} de ${validImages.length}`}
//           className="w-full h-full object-cover transition-all duration-500 ease-in-out"
//           loading="eager"
//           onError={(e) => {
//             e.target.src = '/api/placeholder/400/400';
//           }}
//         />
//       </div>

//       {/* Controles de navegación - Solo mostrar si hay más de una imagen */}
//       {validImages.length > 1 && (
//         <>
//           <button
//             onClick={prevImage}
//             className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
//             aria-label="Imagen anterior"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>

//           <button
//             onClick={nextImage}
//             className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
//             aria-label="Siguiente imagen"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>

//           {/* Indicadores de posición */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//             {validImages.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`w-2 h-2 rounded-full transition-colors ${
//                   current === index ? 'bg-white' : 'bg-white/50'
//                 }`}
//                 aria-label={`Ir a imagen ${index + 1}`}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// const ProductModal = ({ 
//   product, 
//   onClose, 
//   isFavorite = false,
//   onToggleFavorite,
//   onShare
// }) => {
//   const handleBackdropClick = useCallback((e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   }, [onClose]);

//   const handleShare = useCallback(async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: product.name,
//           text: product.description || `Descubre el delicioso sabor ${product.name}`,
//           url: window.location.href
//         });
//       } catch (err) {
//         console.log('Error sharing:', err);
//         // Fallback manual si falla el share nativo
//         if (onShare) {
//           onShare(product);
//         }
//       }
//     } else if (onShare) {
//       onShare(product);
//     } else {
//       // Fallback básico: copiar al clipboard
//       try {
//         await navigator.clipboard.writeText(
//           `${product.name} - ${product.description || 'Delicioso producto'} - ${window.location.href}`
//         );
//         // Aquí podrías mostrar un toast de confirmación
//       } catch (err) {
//         console.log('Error copying to clipboard:', err);
//       }
//     }
//   }, [product, onShare]);

//   const handleToggleFavorite = useCallback((e) => {
//     e.stopPropagation();
//     if (onToggleFavorite) {
//       onToggleFavorite(product.id);
//     }
//   }, [product.id, onToggleFavorite]);

//   const handleWhatsAppContact = useCallback(() => {
//     const message = `Hola! Me interesa el sabor ${product.name}. ¿Podrían darme más información?`;
//     const whatsappUrl = `https://wa.me/5212345678901?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
//   }, [product.name]);

//   const handleKeyDown = useCallback((e) => {
//     if (e.key === "Escape") {
//       onClose();
//     }
//   }, [onClose]);

//   useEffect(() => {
//     // Prevenir scroll del body cuando el modal está abierto
//     document.body.style.overflow = 'hidden';
    
//     window.addEventListener('keydown', handleKeyDown);
    
//     return () => {
//       document.body.style.overflow = 'unset';
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [handleKeyDown]);

//   if (!product) return null;

//   const getBadgeColor = (badge) => {
//     switch (badge) {
//       case "Más Vendido":
//         return "bg-gradient-to-r from-morado-500 to-morado-600 text-white";
//       case "Nuevo":
//         return "bg-gradient-to-r from-orange-500 to-red-500 text-white";
//       case "Favorito":
//         return "bg-gradient-to-r from-amber-500 to-orange-500 text-white";
//       case "Gourmet":
//         return "bg-gradient-to-r from-emerald-500 to-green-600 text-white";
//       case "Temporada":
//         return "bg-gradient-to-r from-morado-500 to-pink-500 text-white";
//       case "Sin Azúcar":
//         return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
//       case "Vegano":
//         return "bg-gradient-to-r from-green-500 to-lime-500 text-white";
//       case "Pet Friendly":
//         return "bg-gradient-to-r from-orange-500 to-yellow-500 text-white";
//       default:
//         return "bg-morado-500 text-white";
//     }
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.15 }}
//       onClick={handleBackdropClick}
//     >
//       <motion.div
//         className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.95, opacity: 0 }}
//         transition={{ type: "spring", duration: 0.3, bounce: 0.1 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header del Modal */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
//           <div className="flex items-center gap-3 flex-wrap">
//             {product.badge && product.badge.trim() !== "" && (
//               <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(product.badge)}`}>
//                 {product.badge}
//               </span>
//             )}
//             {product.category && (
//               <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 capitalize">
//                 {Array.isArray(product.category) ? product.category.join(', ') : product.category}
//               </span>
//             )}
//           </div>
          
//           <div className="flex items-center gap-2">
//             <button
//               onClick={handleShare}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//               title="Compartir producto"
//             >
//               <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
//             </button>
//             {onToggleFavorite && (
//               <button
//                 onClick={handleToggleFavorite}
//                 className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//                 title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
//               >
//                 <Heart className={`w-4 h-4 transition-colors ${
//                   isFavorite ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-400'
//                 }`} />
//               </button>
//             )}
//             <button
//               onClick={onClose}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//               title="Cerrar modal"
//             >
//               <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
//             </button>
//           </div>
//         </div>

//         {/* Contenido Scrolleable */}
//         <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
//           {/* Sección Principal */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
//             {/* Carousel de Imagenes */}
//             <ImageCarousel 
//               images={product.images} 
//               productName={product.name}
//             />

//             {/* Información del Producto */}
//             <div className="space-y-6">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//                   {product.name}
//                 </h2>
//                 {product.description && (
//                   <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
//                     {product.description}
//                   </p>
//                 )}
//               </div>

//               {/* Tags */}
//               {product.tags && product.tags.length > 0 && (
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                     ¿Por qué te va a encantar?
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {product.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Información Nutricional */}
//               {product.nutritionalInfo && product.nutritionalInfo.length > 0 && (
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                     Información Nutricional
//                   </h3>
//                   <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
//                     <ul className="list-none space-y-1 text-sm">
//                       {product.nutritionalInfo.map((item, index) => (
//                         <li key={index} className="flex items-start gap-2">
//                           <span className="text-gray-600 dark:text-gray-400 font-bold">·</span>
//                           <span className="text-gray-700 dark:text-gray-300">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               )}

//               {/* Precio si existe */}
//               {product.price && (
//                 <div className="bg-morado-50 dark:bg-morado-900/20 rounded-lg p-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
//                       Precio desde:
//                     </span>
//                     <span className="text-2xl font-bold text-morado-600 dark:text-morado-400">
//                       ${product.price}
//                     </span>
//                   </div>
//                 </div>
//               )}

//               {/* Botón de Contacto */}
//               <div className="pt-4">
//                 <button
//                   onClick={handleWhatsAppContact}
//                   className="w-full bg-gradient-to-r from-morado-600 to-morado-700 hover:from-morado-700 hover:to-morado-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl cursor-pointer active:scale-95"
//                 >
//                   <UserRoundCheck className="w-5 h-5" />
//                   Consultar disponibilidad
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProductModal;

import React, { useCallback, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Star, Heart, Share2, UserRoundCheck, ChevronLeft, ChevronRight } from 'lucide-react';

// Componente Carousel separado y optimizado
const ImageCarousel = ({ images, productName }) => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);

  // Validar y procesar las imágenes
  const validImages = React.useMemo(() => {
    if (!images || images.length === 0) {
      return ['/api/placeholder/400/400'];
    }

    // Filtrar imágenes válidas (no vacías)
    const filtered = images.filter(img => img && img.trim() !== '');
    return filtered.length > 0 ? filtered : ['/api/placeholder/400/400'];
  }, [images]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = Math.abs(startY - endY);

      // Solo procesar swipe horizontal si el movimiento vertical es mínimo
      if (diffY < 50 && Math.abs(diffX) > 50) {
        if (diffX > 0) nextImage(); // swipe left
        else prevImage(); // swipe right
      }
    };

    carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
    carousel.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, [current, validImages.length]);

  const nextImage = useCallback(() => {
    setCurrent((prev) => (prev + 1) % validImages.length);
  }, [validImages.length]);

  const prevImage = useCallback(() => {
    setCurrent((prev) => (prev - 1 + validImages.length) % validImages.length);
  }, [validImages.length]);

  // Resetear current si cambian las imágenes
  useEffect(() => {
    setCurrent(0);
  }, [validImages]);

  return (
    <div className="relative" ref={carouselRef}>
      <div className="w-full h-80 lg:h-96 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
        <img
          src={validImages[current]}
          alt={`${productName} - Imagen ${current + 1} de ${validImages.length}`}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          loading="eager"
          onError={(e) => {
            e.target.src = '/api/placeholder/400/400';
          }}
        />
      </div>

      {/* Controles de navegación - Solo mostrar si hay más de una imagen */}
      {validImages.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicadores de posición */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {validImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  current === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProductModal = ({
  product,
  onClose,
  isFavorite = false,
  onToggleFavorite,
  onShare
}) => {

  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handleShare = useCallback(async () => {
    // Crear URL completa del producto
    const productUrl = `${window.location.origin}/producto/${product.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.shareDescription || product.description || `Descubre el delicioso sabor ${product.name}`,
          url: productUrl
        });
      } catch (err) {
        console.log('Error sharing:', err);
        // Fallback manual si falla el share nativo
        if (onShare) {
          onShare(product);
        }
      }
    } else if (onShare) {
      onShare(product);
    } else {
      // Fallback básico: copiar al clipboard
      try {
        await navigator.clipboard.writeText(
          `${product.name} - ${product.description || 'Delicioso producto'} - ${productUrl}`
        );
        // Aquí podrías mostrar un toast de confirmación
      } catch (err) {
        console.log('Error copying to clipboard:', err);
      }
    }
  }, [product, onShare]);

  const handleToggleFavorite = useCallback((e) => {
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(product.id);
    }
  }, [product.id, onToggleFavorite]);

  const handleWhatsAppContact = useCallback(() => {
    const message = `Hola! Me interesa el sabor ${product.name}. ¿Podrían darme más información?`;
    const whatsappUrl = `https://wa.me/5212345678901?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, [product.name]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!product) return null;

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Más Vendido":
        return "bg-gradient-to-r from-morado-500 to-morado-600 text-white";
      case "Nuevo":
        return "bg-gradient-to-r from-orange-500 to-red-500 text-white";
      case "Favorito":
        return "bg-gradient-to-r from-amber-500 to-orange-500 text-white";
      case "Gourmet":
        return "bg-gradient-to-r from-emerald-500 to-green-600 text-white";
      case "Temporada":
        return "bg-gradient-to-r from-morado-500 to-pink-500 text-white";
      case "Sin Azúcar":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
      case "Vegano":
        return "bg-gradient-to-r from-green-500 to-lime-500 text-white";
      case "Pet Friendly":
        return "bg-gradient-to-r from-orange-500 to-yellow-500 text-white";
      default:
        return "bg-morado-500 text-white";
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", duration: 0.3, bounce: 0.1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del Modal */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="flex items-center gap-3 flex-wrap">
            {product.badge && product.badge.trim() !== "" && (
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(product.badge)}`}>
                {product.badge}
              </span>
            )}
            {product.category && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 capitalize">
                {Array.isArray(product.category) ? product.category.join(', ') : product.category}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title="Compartir producto"
            >
              <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
            {onToggleFavorite && (
              <button
                onClick={handleToggleFavorite}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
              >
                <Heart className={`w-4 h-4 transition-colors ${
                  isFavorite ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-400'
                }`} />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title="Cerrar modal"
            >
              <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Contenido Scrolleable */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Sección Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Carousel de Imagenes */}
            <ImageCarousel
              images={product.images}
              productName={product.name}
            />

            {/* Información del Producto */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h2>
                {product.description && (
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                )}
              </div>

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    ¿Por qué te va a encantar?
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Información Nutricional */}
              {product.nutritionalInfo && product.nutritionalInfo.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Información Nutricional
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <ul className="list-none space-y-1 text-sm">
                      {product.nutritionalInfo.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-gray-600 dark:text-gray-400 font-bold">·</span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Precio si existe */}
              {product.price && (
                <div className="bg-morado-50 dark:bg-morado-900/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                      Precio desde:
                    </span>
                    <span className="text-2xl font-bold text-morado-600 dark:text-morado-400">
                      ${product.price}
                    </span>
                  </div>
                </div>
              )}

              {/* Botón de Contacto */}
              <div className="pt-4">
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-morado-600 to-morado-700 hover:from-morado-700 hover:to-morado-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl cursor-pointer active:scale-95"
                >
                  <UserRoundCheck className="w-5 h-5" />
                  Consultar disponibilidad
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductModal;