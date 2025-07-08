// import React from 'react';
// import { motion } from 'framer-motion';
// import { Search, Filter, X, ChevronDown } from 'lucide-react';
// import { useFilters } from '../../hooks/useFilters';
// import { useProducts } from '../../hooks/useProducts';

// const FiltersHeader = () => {
//   const {
//     searchTerm,
//     setSearchTerm,
//     selectedCategory,
//     setSelectedCategory,
//     selectedFilters,
//     toggleFilter,
//     clearFilters,
//     isFiltersOpen,
//     setIsFiltersOpen
//   } = useFilters();

//   const { totalProducts, filteredCount } = useProducts();

//   const categories = [
//     { id: 'all', label: 'Todos', icon: '🍦' },
//     { id: 'helados', label: 'Helados', icon: '🍨' },
//     { id: 'nieves', label: 'Nieves', icon: '🧊' },
//     { id: 'paletas', label: 'Paletas', icon: '🍭' },
//     { id: 'pet-friendly', label: 'Pet Friendly', icon: '🐾' }
//   ];

//   const additionalFilters = [
//     { id: 'sin-azucar', label: 'Sin azúcar', icon: '🚫' },
//     { id: 'con-alcohol', label: 'Con alcohol', icon: '🍷' },
//     { id: 'vegano', label: 'Vegano', icon: '🌱' },
//     { id: 'temporada', label: 'De temporada', icon: '🍂' },
//     { id: 'gourmet', label: 'Gourmet', icon: '⭐' },
//     { id: 'premium', label: 'Premium', icon: '💎' },
//     { id: 'tradicional', label: 'Tradicional', icon: '🏠' }
//   ];

//   return (
//     <div className="sticky top-0 z-40 bg-crema-50/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-crema-200 dark:border-gray-700">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Principal */}
//         <div className="py-4 sm:py-6">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             {/* Título y contador */}
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-2xl sm:text-3xl font-bold font-lufga text-morado-900 dark:text-white">
//                   Sabores
//                 </h1>
//                 <p className="text-sm text-morado-600 dark:text-gray-400 mt-1">
//                   {filteredCount} de {totalProducts} sabores
//                   {searchTerm && (
//                     <span className="ml-2">
//                       para "<span className="font-medium">{searchTerm}</span>"
//                     </span>
//                   )}
//                 </p>
//               </div>

//               {/* Botón de filtros móvil */}
//               <button
//                 onClick={() => setIsFiltersOpen(!isFiltersOpen)}
//                 className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-lg bg-morado-100 dark:bg-gray-700 text-morado-700 dark:text-white border border-morado-200 dark:border-gray-600"
//               >
//                 <Filter className="w-4 h-4" />
//                 <span className="text-sm font-medium">Filtros</span>
//                 {(selectedFilters.length > 0 || selectedCategory !== 'all') && (
//                   <span className="bg-salmon-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                     {selectedFilters.length + (selectedCategory !== 'all' ? 1 : 0)}
//                   </span>
//                 )}
//               </button>
//             </div>

//             {/* Barra de búsqueda */}
//             <div className="relative flex-1 max-w-md">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-morado-400 dark:text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Buscar sabores..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-10 py-3 rounded-xl border border-crema-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-morado-900 dark:text-white placeholder-morado-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-morado-500 focus:border-transparent transition-all duration-200"
//                 />
//                 {searchTerm && (
//                   <button
//                     onClick={() => setSearchTerm('')}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//                   >
//                     <X className="w-4 h-4 text-morado-400 dark:text-gray-400" />
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filtros Desktop */}
//         <div className="hidden lg:block pb-4">
//           <div className="flex flex-wrap items-center gap-3">
//             {/* Categorías principales */}
//             <div className="flex items-center gap-2">
//               {categories.map((category) => (
//                 <motion.button
//                   key={category.id}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                     selectedCategory === category.id
//                       ? 'bg-morado-600 text-white shadow-lg shadow-morado-200 dark:shadow-morado-900/50'
//                       : 'bg-white dark:bg-gray-800 text-morado-600 dark:text-gray-300 border border-crema-300 dark:border-gray-600 hover:bg-morado-50 dark:hover:bg-gray-700'
//                   }`}
//                 >
//                   <span className="text-base">{category.icon}</span>
//                   <span>{category.label}</span>
//                 </motion.button>
//               ))}
//             </div>

//             {/* Separador */}
//             <div className="w-px h-6 bg-crema-300 dark:bg-gray-600" />

//             {/* Filtros adicionales */}
//             <div className="flex items-center gap-2">
//               {additionalFilters.map((filter) => (
//                 <motion.button
//                   key={filter.id}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => toggleFilter(filter.id)}
//                                       className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                     selectedFilters.includes(filter.id)
//                       ? 'bg-salmon-500 text-white shadow-lg shadow-salmon-200 dark:shadow-salmon-900/50'
//                       : 'bg-white dark:bg-gray-800 text-morado-600 dark:text-gray-300 border border-crema-300 dark:border-gray-600 hover:bg-salmon-50 dark:hover:bg-gray-700'
//                   }`}
//                 >
//                   <span className="text-base">{filter.icon}</span>
//                   <span>{filter.label}</span>
//                 </motion.button>
//               ))}
//             </div>

//             {/* Limpiar filtros */}
//             {(selectedFilters.length > 0 || selectedCategory !== 'all' || searchTerm) && (
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={clearFilters}
//                 className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 ml-2"
//               >
//                 <X className="w-4 h-4" />
//                 <span>Limpiar</span>
//               </motion.button>
//             )}
//           </div>
//         </div>

//         {/* Filtros Móvil (Desplegable) */}
//         <motion.div
//           initial={false}
//           animate={{ height: isFiltersOpen ? 'auto' : 0 }}
//           className="lg:hidden overflow-hidden"
//         >
//           <div className="pb-4 space-y-4">
//             {/* Categorías móvil */}
//             <div>
//               <h3 className="text-sm font-semibold text-morado-900 dark:text-white mb-2">
//                 Categorías
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category) => (
//                   <motion.button
//                     key={category.id}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => setSelectedCategory(category.id)}
//                     className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                       selectedCategory === category.id
//                         ? 'bg-morado-600 text-white'
//                         : 'bg-white dark:bg-gray-800 text-morado-600 dark:text-gray-300 border border-crema-300 dark:border-gray-600'
//                     }`}
//                   >
//                     <span>{category.icon}</span>
//                     <span>{category.label}</span>
//                   </motion.button>
//                 ))}
//               </div>
//             </div>

//             {/* Filtros adicionales móvil */}
//             <div>
//               <h3 className="text-sm font-semibold text-morado-900 dark:text-white mb-2">
//                 Filtros especiales
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {additionalFilters.map((filter) => (
//                   <motion.button
//                     key={filter.id}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => toggleFilter(filter.id)}
//                     className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                       selectedFilters.includes(filter.id)
//                         ? 'bg-salmon-500 text-white'
//                         : 'bg-white dark:bg-gray-800 text-morado-600 dark:text-gray-300 border border-crema-300 dark:border-gray-600'
//                     }`}
//                   >
//                     <span>{filter.icon}</span>
//                     <span>{filter.label}</span>
//                   </motion.button>
//                 ))}
//               </div>
//             </div>

//             {/* Botón limpiar móvil */}
//             {(selectedFilters.length > 0 || selectedCategory !== 'all' || searchTerm) && (
//               <div className="pt-2 border-t border-crema-200 dark:border-gray-700">
//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   onClick={clearFilters}
//                   className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
//                 >
//                   <X className="w-4 h-4" />
//                   <span>Limpiar todos los filtros</span>
//                 </motion.button>
//               </div>
//             )}
//           </div>
//         </motion.div>

//         {/* Filtros activos (solo móvil) */}
//         {!isFiltersOpen && (selectedFilters.length > 0 || selectedCategory !== 'all') && (
//           <div className="lg:hidden pb-4">
//             <div className="flex items-center gap-2 overflow-x-auto">
//               <span className="text-xs text-morado-600 dark:text-gray-400 whitespace-nowrap">
//                 Filtros activos:
//               </span>
//               {selectedCategory !== 'all' && (
//                 <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-morado-100 dark:bg-morado-900 text-morado-700 dark:text-morado-300 whitespace-nowrap">
//                   {categories.find(c => c.id === selectedCategory)?.icon}
//                   {categories.find(c => c.id === selectedCategory)?.label}
//                 </span>
//               )}
//               {selectedFilters.map(filterId => {
//                 const filter = additionalFilters.find(f => f.id === filterId);
//                 return filter ? (
//                   <span
//                     key={filterId}
//                     className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-salmon-100 dark:bg-salmon-900 text-salmon-700 dark:text-salmon-300 whitespace-nowrap"
//                   >
//                     {filter.icon}
//                     {filter.label}
//                   </span>
//                 ) : null;
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FiltersHeader;


// src/components/common/ProductCard.jsx
import { motion } from 'framer-motion';
import { Star, Heart, PawPrint } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/producto/${product.id}`);
  };

  const getLowestPrice = () => {
    return Math.min(...product.sizes.map(size => size.price));
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      {/* Imagen */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={`/images/products/${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.featured && (
            <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
              Destacado
            </span>
          )}
          {product.seasonal && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              Temporada
            </span>
          )}
        </div>
        
        {/* Pet Friendly */}
        {product.petFriendly && (
          <div className="absolute top-2 right-2">
            <PawPrint className="w-5 h-5 text-green-500" />
          </div>
        )}
      </div>
      
      {/* Contenido */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-1">
            {product.name}
          </h3>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 capitalize">
          {product.category} • {product.subcategory}
        </p>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
          {product.description}
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
        </div>
        
        {/* Precio */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-purple-600">
            Desde ${getLowestPrice()}
          </span>
          <span className="text-xs text-gray-500">
            {product.sizes.length} tamaños
          </span>
        </div>
      </div>
    </motion.div>
  );
};