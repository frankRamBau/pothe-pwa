// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   X, 
//   Star, 
//   Heart, 
//   Share2, 
//   ShoppingCart, 
//   Sparkles,
//   Leaf,
//   Wine,
//   AlertCircle,
//   Award,
//   Clock,
//   Users
// } from 'lucide-react';
// import { Badge } from '../ui/Badge';
// import { Button } from '../ui/Button';
// import { LazyImage } from '../ui/LazyImage';
// import RelatedProducts from './RelatedProducts';

// const ProductDetail = ({ 
//   product, 
//   isOpen, 
//   onClose, 
//   onAddToFavorites,
//   onShare 
// }) => {
//   const [selectedSize, setSelectedSize] = useState('mediano');
//   const [quantity, setQuantity] = useState(1);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [showPrices, setShowPrices] = useState(false);

//   // Resetear estado cuando se abre un nuevo producto
//   useEffect(() => {
//     if (isOpen && product) {
//       setSelectedSize('mediano');
//       setQuantity(1);
//       setIsFavorite(false);
//     }
//   }, [isOpen, product]);

//   if (!product) return null;

//   const handleFavoriteToggle = () => {
//     setIsFavorite(!isFavorite);
//     onAddToFavorites?.(product);
//   };

//   const handleShare = () => {
//     onShare?.(product);
//   };

//   const handleWhatsAppOrder = () => {
//     const size = sizes.find(s => s.id === selectedSize);
//     const message = `¡Hola! Me interesa ordenar:\n\n🍦 ${product.name}\n📏 Tamaño: ${size.name}\n📦 Cantidad: ${quantity}\n\n¿Podrían ayudarme con la información?`;
//     const whatsappUrl = `https://wa.me/5215512345678?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   // Tamaños disponibles con precios opcionales
//   const sizes = [
//     { 
//       id: 'chico', 
//       name: 'Chico (120ml)', 
//       price: 45,
//       description: 'Perfecto para probar'
//     },
//     { 
//       id: 'mediano', 
//       name: 'Mediano (240ml)', 
//       price: 75,
//       description: 'El favorito de todos'
//     },
//     { 
//       id: 'grande', 
//       name: 'Grande (480ml)', 
//       price: 120,
//       description: 'Para compartir'
//     },
//     { 
//       id: 'medio-litro', 
//       name: 'Medio Litro (500ml)', 
//       price: 150,
//       description: 'Ideal para la familia'
//     },
//     { 
//       id: 'litro', 
//       name: 'Un Litro (1000ml)', 
//       price: 280,
//       description: 'Para fiestas y eventos'
//     }
//   ];

//   // Obtener badges especiales del producto
//   const getProductBadges = () => {
//     const badges = [];
    
//     if (product.sugarFree) badges.push({ 
//       icon: <Sparkles className="w-3 h-3" />, 
//       text: 'Sin Azúcar', 
//       color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
//     });
    
//     if (product.vegan) badges.push({ 
//       icon: <Leaf className="w-3 h-3" />, 
//       text: 'Vegano', 
//       color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300'
//     });
    
//     if (product.alcoholic) badges.push({ 
//       icon: <Wine className="w-3 h-3" />, 
//       text: 'Con Alcohol', 
//       color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
//     });
    
//     if (product.petFriendly) badges.push({ 
//       icon: <Heart className="w-3 h-3" />, 
//       text: 'Pet Friendly', 
//       color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
//     });
    
//     if (product.seasonal) badges.push({ 
//       icon: <Clock className="w-3 h-3" />, 
//       text: 'Temporada', 
//       color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
//     });
    
//     if (product.premium) badges.push({ 
//       icon: <Award className="w-3 h-3" />, 
//       text: 'Premium', 
//       color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
//     });

//     return badges;
//   };

//   const modalVariants = {
//     hidden: { 
//       opacity: 0,
//       scale: 0.95,
//       y: 20
//     },
//     visible: { 
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 25,
//         stiffness: 300
//       }
//     },
//     exit: { 
//       opacity: 0,
//       scale: 0.95,
//       y: 20,
//       transition: {
//         duration: 0.2
//       }
//     }
//   };

//   const backdropVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           {/* Backdrop */}
//           <motion.div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm"
//             variants={backdropVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             onClick={onClose}
//           />

//           {/* Modal Container */}
//           <div className="flex min-h-full items-center justify-center p-4">
//             <motion.div
//               className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               {/* Header con botones de acción */}
//               <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-3">
//                     <Badge 
//                       variant="outline" 
//                       className="text-morado-600 border-morado-200 bg-morado-50 dark:bg-morado-950 dark:border-morado-800"
//                     >
//                       {product.category}
//                     </Badge>
//                     {product.rating && (
//                       <div className="flex items-center space-x-1">
//                         <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                           {product.rating}
//                         </span>
//                       </div>
//                     )}
//                   </div>

//                   <div className="flex items-center space-x-2">
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={handleFavoriteToggle}
//                       className={`p-2 ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
//                     >
//                       <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
//                     </Button>
                    
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={handleShare}
//                       className="p-2 text-gray-500 hover:text-gray-700"
//                     >
//                       <Share2 className="w-5 h-5" />
//                     </Button>
                    
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={onClose}
//                       className="p-2 text-gray-500 hover:text-gray-700"
//                     >
//                       <X className="w-5 h-5" />
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               <div className="max-h-[80vh] overflow-y-auto">
//                 {/* Contenido principal */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
//                   {/* Imagen y badges */}
//                   <div className="space-y-4">
//                     <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
//                       <LazyImage
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Badges especiales */}
//                     <div className="flex flex-wrap gap-2">
//                       {getProductBadges().map((badge, index) => (
//                         <Badge
//                           key={index}
//                           className={`${badge.color} flex items-center space-x-1`}
//                         >
//                           {badge.icon}
//                           <span>{badge.text}</span>
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Información del producto */}
//                   <div className="space-y-6">
//                     <div>
//                       <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//                         {product.name}
//                       </h1>
//                       <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//                         {product.description}
//                       </p>
//                     </div>

//                     {/* Información nutricional/especial */}
//                     {product.nutritionalInfo && (
//                       <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
//                         <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
//                           <AlertCircle className="w-4 h-4 mr-2 text-morado-500" />
//                           Información Especial
//                         </h3>
//                         <p className="text-sm text-gray-600 dark:text-gray-300">
//                           {product.nutritionalInfo}
//                         </p>
//                       </div>
//                     )}

//                     {/* Selector de tamaños */}
//                     <div className="space-y-3">
//                       <h3 className="font-semibold text-gray-900 dark:text-white">
//                         Tamaños Disponibles
//                       </h3>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                         {sizes.map((size) => (
//                           <button
//                             key={size.id}
//                             onClick={() => setSelectedSize(size.id)}
//                             className={`p-3 rounded-lg border-2 text-left transition-all ${
//                               selectedSize === size.id
//                                 ? 'border-morado-500 bg-morado-50 dark:bg-morado-950 dark:border-morado-400'
//                                 : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
//                             }`}
//                           >
//                             <div className="flex justify-between items-start">
//                               <div>
//                                 <p className="font-medium text-gray-900 dark:text-white">
//                                   {size.name}
//                                 </p>
//                                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                                   {size.description}
//                                 </p>
//                               </div>
//                               {showPrices && (
//                                 <span className="text-sm font-semibold text-morado-600 dark:text-morado-400">
//                                   ${size.price}
//                                 </span>
//                               )}
//                             </div>
//                           </button>
//                         ))}
//                       </div>
                      
//                       <button
//                         onClick={() => setShowPrices(!showPrices)}
//                         className="text-sm text-morado-600 dark:text-morado-400 hover:underline"
//                       >
//                         {showPrices ? 'Ocultar precios' : 'Ver precios'}
//                       </button>
//                     </div>

//                     {/* Selector de cantidad */}
//                     <div className="space-y-3">
//                       <h3 className="font-semibold text-gray-900 dark:text-white">
//                         Cantidad
//                       </h3>
//                       <div className="flex items-center space-x-3">
//                         <button
//                           onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                           className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
//                         >
//                           -
//                         </button>
//                         <span className="px-4 py-2 min-w-[60px] text-center bg-gray-50 dark:bg-gray-800 rounded-lg">
//                           {quantity}
//                         </span>
//                         <button
//                           onClick={() => setQuantity(quantity + 1)}
//                           className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>

//                     {/* Botones de acción */}
//                     <div className="space-y-3 pt-4">
//                       <Button
//                         onClick={handleWhatsAppOrder}
//                         className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
//                       >
//                         <Users className="w-4 h-4 mr-2" />
//                         Pedir por WhatsApp
//                       </Button>
                      
//                       <Button
//                         variant="outline"
//                         className="w-full border-morado-500 text-morado-600 hover:bg-morado-50 dark:hover:bg-morado-950 py-3"
//                         onClick={() => {
//                           // Lógica para agregar a carrito o lista de deseos
//                           console.log('Agregado a favoritos:', product.name);
//                         }}
//                       >
//                         <ShoppingCart className="w-4 h-4 mr-2" />
//                         Agregar a Favoritos
//                       </Button>
//                     </div>

//                     {/* Información adicional */}
//                     <div className="text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
//                       <p>🕒 Disponible todos los días de 11:00 a 20:00 hrs</p>
//                       <p>📍 Sucursales en Pachuca y Cruz Azul, Hidalgo</p>
//                       {product.alcoholic && (
//                         <p className="text-red-600 dark:text-red-400 font-medium">
//                           ⚠️ Solo para mayores de 18 años
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Productos relacionados */}
//                 <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-8">
//                   <RelatedProducts 
//                     currentProduct={product}
//                     onProductSelect={(relatedProduct) => {
//                       // Abrir el producto relacionado
//                       console.log('Producto relacionado seleccionado:', relatedProduct);
//                     }}
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ProductDetail;

// src/pages/ProductDetail.jsx
// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useProductsStore } from '../store/productsStore';
// import { ArrowLeft, Star, PawPrint, ShoppingCart } from 'lucide-react';
// import { motion } from 'framer-motion';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { getProductById, getRelatedProducts } = useProductsStore();
//   const [selectedSize, setSelectedSize] = useState(null);
  
//   const product = getProductById(id);
//   const relatedProducts = getRelatedProducts(id);

//   useEffect(() => {
//     if (product && product.sizes.length > 0) {
//       setSelectedSize(product.sizes[0]);
//     }
//   }, [product]);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
//           <button 
//             onClick={() => navigate('/sabores')}
//             className="text-purple-600 hover:text-purple-700"
//           >
//             Volver a sabores
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4 py-8">
//         {/* Botón volver */}
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 mb-6 text-gray-600 hover:text-purple-600"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           Volver
//         </button>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Imagen */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="aspect-square rounded-2xl overflow-hidden"
//           >
//             <img
//               src={`/images/products/${product.image}`}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>

//           {/* Información */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="space-y-6"
//           >
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="text-sm text-purple-600 font-medium capitalize">
//                   {product.category} • {product.subcategory}
//                 </span>
//                 {product.petFriendly && <PawPrint className="w-4 h-4 text-green-500" />}
//               </div>
              
//               <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
//               <div className="flex items-center gap-2 mb-4">
//                 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                 <span className="font-medium">{product.rating}</span>
//               </div>
              
//               <p className="text-gray-600 dark:text-gray-400">
//                 {product.description}
//               </p>
//             </div>

//             {/* Tamaños y precios */}
//             <div>
//               <h3 className="text-lg font-semibold mb-3">Tamaños disponibles</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 {product.sizes.map((sizeOption) => (
//                   <button
//                     key={sizeOption.size}
//                     onClick={() => setSelectedSize(sizeOption)}
//                     className={`p-3 rounded-lg border-2 text-left transition-colors ${
//                       selectedSize?.size === sizeOption.size
//                         ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
//                         : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
//                     }`}
//                   >
//                     <div className="font-medium capitalize">
//                       {sizeOption.size.replace('_', ' ')}
//                     </div>
//                     <div className="text-lg font-bold text-purple-600">
//                       ${sizeOption.price}
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Información nutricional */}
//             {product.nutritionalInfo && product.nutritionalInfo.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold mb-3">Información</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {product.nutritionalInfo.map((info, index) => (
//                     <span
//                       key={index}
//                       className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
//                     >
//                       {info}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Tags */}
//             {product.tags && product.tags.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold mb-3">Características</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {product.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsStore } from '../store/productsStore';
import { ArrowLeft, Star, PawPrint, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOMetaTags from '../components/common/SEOMetaTags'; // ← Importar SEOMetaTags

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, getRelatedProducts } = useProductsStore();
  const [selectedSize, setSelectedSize] = useState(null);

  // Buscar producto por ID (string o number)
  const product = getProductById(parseInt(id) || id);
  const relatedProducts = getRelatedProducts(id);

  useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  // Scroll to top cuando cambia el producto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <>
        {/* SEO para página no encontrada */}
        <SEOMetaTags 
          title="Producto no encontrado - Pothe"
          description="El producto que buscas no existe o ha sido movido."
          url={`/producto/${id}`}
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
            <button
              onClick={() => navigate('/sabores')}
              className="text-purple-600 hover:text-purple-700"
            >
              Volver a sabores
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* SEO Meta Tags para el producto */}
      <SEOMetaTags 
        productData={product}
        url={`/producto/${product.id}`}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Botón volver */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-6 text-gray-600 hover:text-purple-600"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </button>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={product.image || product.images?.[0] || '/api/placeholder/400/400'}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/api/placeholder/400/400';
                }}
              />
            </motion.div>

            {/* Información */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-purple-600 font-medium capitalize">
                    {product.category} {product.subcategory && `• ${product.subcategory}`}
                  </span>
                  {product.petFriendly && <PawPrint className="w-4 h-4 text-green-500" />}
                </div>

                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

                {product.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-400">
                  {product.description}
                </p>
              </div>

              {/* Tamaños y precios */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tamaños disponibles</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.sizes.map((sizeOption) => (
                      <button
                        key={sizeOption.size}
                        onClick={() => setSelectedSize(sizeOption)}
                        className={`p-3 rounded-lg border-2 text-left transition-colors ${
                          selectedSize?.size === sizeOption.size
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                        }`}
                      >
                        <div className="font-medium capitalize">
                          {sizeOption.size.replace('_', ' ')}
                        </div>
                        <div className="text-lg font-bold text-purple-600">
                          ${sizeOption.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Precio simple */}
              {product.price && !product.sizes && (
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                      Precio desde:
                    </span>
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      ${product.price}
                    </span>
                  </div>
                </div>
              )}

              {/* Información nutricional */}
              {product.nutritionalInfo && product.nutritionalInfo.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Información</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.nutritionalInfo.map((info, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {info}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Características</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;