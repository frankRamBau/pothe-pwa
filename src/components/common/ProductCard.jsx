// import React from 'react';
// import { Star, Heart, TrendingUp, Sparkles } from 'lucide-react';

// // Función para obtener el color del badge
// const getBadgeColor = (badge) => {
//   switch (badge) {
//     case "Más Vendido":
//       return "bg-gradient-to-r from-morado-500 to-morado-600 text-white";
//     case "Nuevo":
//       return "bg-gradient-to-r from-salmon-500 to-salmon-600 text-white";
//     case "Favorito":
//       return "bg-gradient-to-r from-amber-500 to-orange-500 text-white";
//     case "Gourmet":
//       return "bg-gradient-to-r from-emerald-500 to-green-600 text-white";
//     case "Temporada":
//       return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
//     case "Sin Azúcar":
//       return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
//     case "Vegano":
//       return "bg-gradient-to-r from-green-500 to-lime-500 text-white";
//     case "Pet Friendly":
//       return "bg-gradient-to-r from-orange-500 to-yellow-500 text-white";
//     default:
//       return "bg-morado-500 text-white";
//   }
// };

// // Función para obtener el gradiente de fondo del card
// const getProductGradient = (category, name) => {
//   const categoryLower = category?.toLowerCase() || '';
//   const nameLower = name?.toLowerCase() || '';
  
//   if (categoryLower.includes('helado')) {
//     if (nameLower.includes('chocolate')) return "from-amber-100 to-orange-50 dark:from-amber-900/20 dark:to-orange-800/10";
//     if (nameLower.includes('fresa')) return "from-pink-100 to-rose-50 dark:from-pink-900/20 dark:to-rose-800/10";
//     if (nameLower.includes('vainilla')) return "from-yellow-100 to-amber-50 dark:from-yellow-900/20 dark:to-amber-800/10";
//     return "from-blue-100 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-800/10";
//   }
  
//   if (categoryLower.includes('nieve')) {
//     if (nameLower.includes('mango')) return "from-orange-100 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-800/10";
//     if (nameLower.includes('limón')) return "from-lime-100 to-green-50 dark:from-lime-900/20 dark:to-green-800/10";
//     return "from-teal-100 to-green-50 dark:from-teal-900/20 dark:to-green-800/10";
//   }
  
//   if (categoryLower.includes('paleta')) {
//     return "from-purple-100 to-pink-50 dark:from-purple-900/20 dark:to-pink-800/10";
//   }
  
//   return "from-gray-100 to-slate-50 dark:from-gray-900/20 dark:to-slate-800/10";
// };

// const ProductCard = ({ 
//   product, 
//   onClick, 
//   hoveredProduct,
//   setHoveredProduct,
//   favorites = [],
//   toggleFavorite,
//   showCategory = true, 
//   showRating = true,
//   showTags = true,
//   showCTA = true,
//   className = '' 
// }) => {
//   if (!product) return null;

//   const gradient = getProductGradient(product.category, product.name);
//   const isFavorite = favorites.includes(product.id);

//   const handleClick = () => {
//     if (onClick) {
//       onClick(product);
//     }
//   };

//   const handleFavoriteClick = (e) => {
//     e.stopPropagation();
//     if (toggleFavorite) {
//       toggleFavorite(product.id);
//     }
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className={`cursor-pointer ${className}`}
//     >
//       <div className={`relative bg-gradient-to-br ${gradient} rounded-3xl p-6 border border-white/50 dark:border-gray-700/50`}>
        
//         {/* Badge */}
//         {product.badge && (
//           <div className={`absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-bold ${getBadgeColor(product.badge)} z-10`}>
//             {product.badge}
//           </div>
//         )}

//         {/* Trending/New Icons - Sin animaciones */}
//         <div className="absolute top-4 right-4 flex gap-2 z-10">
//           {product.isTrending && (
//             <div className="bg-red-500 text-white p-1.5 rounded-full shadow-lg">
//               <TrendingUp className="w-3 h-3" />
//             </div>
//           )}
//           {product.isNew && (
//             <div className="bg-green-500 text-white p-1.5 rounded-full shadow-lg">
//               <Sparkles className="w-3 h-3" />
//             </div>
//           )}
//         </div>

//         {/* Product Image */}
//         <div className="relative mb-6 mt-4">
//           <div className="w-full h-48 bg-white/70 dark:bg-gray-800/70 rounded-2xl overflow-hidden shadow-inner">
//             {product.image ? (
//               <img 
//                 src={product.image} 
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//                 onError={(e) => {
//                   e.target.src = '/api/placeholder/300/200';
//                 }}
//               />
//             ) : (
//               <div className="w-full h-full bg-gradient-to-br from-morado-100 to-salmon-100 
//                 flex items-center justify-center">
//                 <span className="text-6xl">🍦</span>
//               </div>
//             )}
//           </div>
          
//           {/* Heart Icon - Sin motion */}
//           {toggleFavorite && (
//             <button
//               className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg"
//               onClick={handleFavoriteClick}
//             >
//               <Heart className={`w-4 h-4 ${
//                 isFavorite ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-300'
//               }`} />
//             </button>
//           )}
//         </div>

//         {/* Product Info */}
//         <div className="space-y-3">
//           <div>
//             <h3 className="font-bold text-xl text-gray-900 dark:text-white font-lufga">
//               {product.name}
//             </h3>
//             {showCategory && product.category && (
//               <p className="text-sm text-gray-600 dark:text-gray-400 font-medium capitalize">
//                 {Array.isArray(product.category) ? product.category.join(', ') : product.category}
//               </p>
//             )}
//           </div>

//           {product.description && (
//             <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-2">
//               {product.description}
//             </p>
//           )}

//           {/* Tags */}
//           {showTags && product.tags && product.tags.length > 0 && (
//             <div className="flex flex-wrap gap-1">
//               {product.tags.slice(0, 3).map((tag, index) => (
//                 <span key={index} className="text-xs bg-white/50 dark:bg-gray-700/50 px-2 py-1 rounded-full text-gray-600 dark:text-gray-300">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* Rating */}
//           {showRating && product.rating && (
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <Star 
//                       key={i} 
//                       className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
//                     />
//                   ))}
//                 </div>
//                 <span className="font-semibold text-gray-900 dark:text-white">
//                   {product.rating}
//                 </span>
//               </div>
//               {(product.reviews || product.reviewCount) && (
//                 <span className="text-xs text-gray-500 dark:text-gray-400">
//                   ({product.reviews || product.reviewCount})
//                 </span>
//               )}
//             </div>
//           )}

//           {/* Precio (si está disponible) */}
//           {product.price && (
//             <div className="flex items-center justify-between">
//               <div className="text-sm text-gray-600 dark:text-gray-400">
//                 Desde
//               </div>
//               <div className="font-semibold text-morado-600 dark:text-morado-400">
//                 ${product.price}
//               </div>
//             </div>
//           )}

//           {/* CTA Button - Simplificado */}
//           {showCTA && (
//             <button
//               className="w-full bg-gradient-to-r from-morado-500 to-morado-600 text-white font-semibold py-3 px-4 rounded-2xl shadow-lg cursor-pointer"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleClick();
//               }}
//             >
//               ¡Lo quiero!
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from 'react';
import { Star, Heart, TrendingUp, Sparkles } from 'lucide-react';

// Función para obtener el color del badge
const getBadgeColor = (badge) => {
  switch (badge) {
    case "Más Vendido":
      return "bg-gradient-to-r from-morado-500 to-morado-600 text-white";
    case "Nuevo":
      return "bg-gradient-to-r from-salmon-500 to-salmon-600 text-white";
    case "Favorito":
      return "bg-gradient-to-r from-amber-500 to-orange-500 text-white";
    case "Gourmet":
      return "bg-gradient-to-r from-emerald-500 to-green-600 text-white";
    case "Temporada":
      return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
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

// Función para obtener el gradiente de fondo del card
const getProductGradient = (category, name) => {
  const categoryLower = category?.toLowerCase() || '';
  const nameLower = name?.toLowerCase() || '';
  
  if (categoryLower.includes('helado')) {
    if (nameLower.includes('chocolate')) return "from-amber-100 to-orange-50 dark:from-amber-900/20 dark:to-orange-800/10";
    if (nameLower.includes('fresa')) return "from-pink-100 to-rose-50 dark:from-pink-900/20 dark:to-rose-800/10";
    if (nameLower.includes('vainilla')) return "from-yellow-100 to-amber-50 dark:from-yellow-900/20 dark:to-amber-800/10";
    return "from-blue-100 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-800/10";
  }
  
  if (categoryLower.includes('nieve')) {
    if (nameLower.includes('mango')) return "from-orange-100 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-800/10";
    if (nameLower.includes('limón')) return "from-lime-100 to-green-50 dark:from-lime-900/20 dark:to-green-800/10";
    return "from-teal-100 to-green-50 dark:from-teal-900/20 dark:to-green-800/10";
  }
  
  if (categoryLower.includes('paleta')) {
    return "from-purple-100 to-pink-50 dark:from-purple-900/20 dark:to-pink-800/10";
  }
  
  return "from-gray-100 to-slate-50 dark:from-gray-900/20 dark:to-slate-800/10";
};

const ProductCard = ({ 
  product, 
  onClick, 
  hoveredProduct,
  setHoveredProduct,
  favorites = [],
  toggleFavorite,
  showCategory = true,
  showTags = true,
  showCTA = true,
  className = '' 
}) => {
  if (!product) return null;

  const gradient = getProductGradient(product.category, product.name);
  const isFavorite = favorites.includes(product.id);

  const handleClick = () => {
    if (onClick) {
      onClick(product);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (toggleFavorite) {
      toggleFavorite(product.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
    >
      <div className={`relative bg-gradient-to-br ${gradient} rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-white/50 dark:border-gray-700/50 h-full flex flex-col`}>
        
        {/* Badge - Optimizado para móvil */}
        {product.badge && (
          <div className={`absolute -top-2 left-3 sm:-top-3 sm:left-6 px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs font-bold ${getBadgeColor(product.badge)} z-10`}>
            <span className="hidden sm:inline">{product.badge}</span>
            <span className="sm:hidden">
              {product.badge === "Más Vendido" ? "🔥" : 
               product.badge === "Nuevo" ? "✨" : 
               product.badge === "Favorito" ? "❤️" : 
               product.badge === "Gourmet" ? "👑" : 
               product.badge === "Temporada" ? "🌟" : 
               product.badge === "Sin Azúcar" ? "🍃" : 
               product.badge === "Vegano" ? "🌱" : 
               product.badge === "Pet Friendly" ? "🐾" : "⭐"}
            </span>
          </div>
        )}
        
        {/* Trending/New Icons - Más pequeños en móvil */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1 sm:gap-2 z-10">
          {product.isTrending && (
            <div className="bg-blue-500 text-white p-1 sm:p-1.5 rounded-full shadow-lg">
              <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {/*Es nuevo*/}
            </div>
          )}
          {product.isNew && (
            <div className="bg-yellow-600 text-white p-1 sm:p-1.5 rounded-full shadow-lg">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {/*Es tendencia*/}
            </div>
          )}
        </div>

        {/* Product Image - Altura fija optimizada */}
        <div className="relative mb-3 sm:mb-6 mt-2 sm:mt-4">
          <div className="w-full h-24 sm:h-48 bg-white/70 dark:bg-gray-800/70 rounded-xl sm:rounded-2xl overflow-hidden shadow-inner">
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/api/placeholder/300/200';
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-morado-100 to-salmon-100 
                flex items-center justify-center">
                <span className="text-2xl sm:text-6xl">🍦</span>
              </div>
            )}
          </div>
          
          {/* Heart Icon - Más pequeño en móvil */}
          {toggleFavorite && (
            <button
              className="absolute top-1 right-1 sm:top-3 sm:right-3 bg-white/90 dark:bg-gray-800/90 p-1 sm:p-2 rounded-full shadow-lg"
              onClick={handleFavoriteClick}
            >
              <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${
                isFavorite ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-300'
              }`} />
            </button>
          )}
        </div>

        {/* Product Info - Flex grow para ocupar espacio disponible */}
        <div className="space-y-2 sm:space-y-3 flex-grow flex flex-col">
          <div>
            <h3 className="font-bold text-sm sm:text-xl text-gray-900 dark:text-white font-lufga line-clamp-2">
              {product.name}
            </h3>
            {showCategory && product.category && (
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium capitalize">
                {Array.isArray(product.category) ? product.category.join(', ') : product.category}
              </p>
            )}
          </div>

          {/* Description - Solo en desktop */}
          {product.description && (
            <p className="hidden sm:block text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-2">
              {product.description}
            </p>
          )}

          {/* Tags - Limitados en móvil */}
          {showTags && product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="text-xs bg-white/50 dark:bg-gray-700/50 px-2 py-1 rounded-full text-gray-600 dark:text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Precio - Compacto */}
          {product.price && (
            <div className="flex items-center justify-between">
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Desde
              </div>
              <div className="text-sm sm:text-base font-semibold text-morado-600 dark:text-morado-400">
                ${product.price}
              </div>
            </div>
          )}

          {/* CTA Button - Adaptado para móvil */}
          {showCTA && (
            <button
              className="w-full bg-gradient-to-r from-morado-500 to-morado-600 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl shadow-lg cursor-pointer text-sm sm:text-base mt-auto"
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
            >
              <span className="hidden sm:inline">¡Lo quiero!</span>
              <span className="sm:hidden">¡Quiero!</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;