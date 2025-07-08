// import React, { useState, useEffect, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Grid3X3, List, Star, Heart, Coffee, Utensils, GlassWater, CakeSlice, CircleX } from 'lucide-react';
// import { useJoysStore } from '../store/joysStore';

// // Importación de componentes existentes
// import HeaderMobile from '../components/layout/HeaderMobile'
// import SearchInput from '../components/ui/SearchInput';
// import FilterChip from '../components/ui/FilterChip';
// import Badge from '../components/ui/Badge';
// import EmptyState from '../components/sections/EmptyState';
// import ProductModal from '../components/common/ProductModal';
// import ProductCard from '../components/common/ProductCard';

// // Función helper para manejar categorías (string o array)
// const getCategoryArray = (category) => {
//   if (!category) return [];
//   return Array.isArray(category) ? category : [category];
// };

// // Función helper para verificar si una categoría contiene un término
// const categoryIncludes = (category, searchTerm) => {
//   const categories = getCategoryArray(category);
//   return categories.some(cat => 
//     cat.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// };

// // Función para obtener el color del badge
// const getBadgeColor = (badge) => {
//   switch (badge) {
//     case "Destacado":
//       return "bg-gradient-to-r from-morado-500 to-morado-600 text-white";
//     case "Nuevo":
//       return "bg-gradient-to-r from-salmon-500 to-salmon-600 text-white";
//     case "Trending":
//       return "bg-gradient-to-r from-amber-500 to-orange-500 text-white";
//     case "Temporada":
//       return "bg-gradient-to-r from-morado-500 to-pink-500 text-white";
//     default:
//       return "bg-morado-500 text-white";
//   }
// };

// // Componente ListView optimizado para delicias
// const OptimizedListView = ({ joy, onClick, favorites, toggleFavorite }) => {
//   const isFavorite = favorites.includes(joy.id);

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.2 }}
//       className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
//     >
//       <div className="flex gap-4 p-4">
//         <div className="relative flex-shrink-0">
//           <img
//             src={joy.image}
//             alt={joy.name}
//             className="w-20 h-20 rounded-lg object-cover"
//             onError={(e) => {
//               e.target.src = '/api/placeholder/80/80';
//             }}
//           />
//         </div>
        
//         <div className="flex-1 min-w-0">
//           <div className="flex items-start justify-between">
//             <div className="flex-1 min-w-0">
//               <h3 className="font-semibold text-lg text-gray-900 dark:text-white truncate">
//                 {joy.name}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400 text-sm capitalize">
//                 {joy.category}
//               </p>
//               <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 line-clamp-2">
//                 {joy.description}
//               </p>
              
//               {/* Precio en vista lista */}
//               {joy.sizes && joy.sizes.length > 0 && (
//                 <div className="flex items-center gap-2 mt-2">
//                   <span className="text-lg font-bold text-morado-600 dark:text-morado-400">
//                     ${joy.sizes[0].price}
//                   </span>
//                   {joy.sizes.length > 1 && (
//                     <span className="text-sm text-gray-500 dark:text-gray-400">
//                       - ${joy.sizes[joy.sizes.length - 1].price}
//                     </span>
//                   )}
//                 </div>
//               )}

//               {/* Badges */}
//               <div className="flex gap-1 mt-2">
//                 {joy.isFeatured && (
//                   <div className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-morado-500 to-morado-600 text-white shadow-sm">
//                     Destacado
//                   </div>
//                 )}
//                 {joy.isNew && (
//                   <div className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm">
//                     Nuevo
//                   </div>
//                 )}
//                 {joy.isTrending && (
//                   <div className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
//                     Trending
//                   </div>
//                 )}
//                 {joy.seasonal && (
//                   <div className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-morado-500 to-pink-500 text-white shadow-sm">
//                     Temporada
//                   </div>
//                 )}
//               </div>
//             </div>
            
//             <div className="flex items-center gap-2 ml-4">
//               <motion.button
//                 className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   toggleFavorite(joy.id);
//                 }}
//               >
//                 <Heart className={`w-4 h-4 transition-colors ${
//                   isFavorite ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-300'
//                 }`} />
//               </motion.button>
              
//               <button
//                 onClick={() => onClick(joy)}
//                 className="px-4 py-2 bg-morado-500 text-white rounded-lg hover:bg-morado-600 transition-colors text-sm font-medium whitespace-nowrap"
//               >
//                 Ver Detalles
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// /**
//  * Componente principal Delicias optimizado
//  */
// const Delicias = () => {
//   // Estados locales
//   const [selectedJoy, setSelectedJoy] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [viewMode, setViewMode] = useState('grid');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [activeCategory, setActiveCategory] = useState('todos');
//   const [hoveredJoy, setHoveredJoy] = useState(null);
//   const [favorites, setFavorites] = useState([]);

//   // Store específico para delicias
//   const {
//     joys = [],
//     filteredJoys = [],
//     isLoading = false,
//     error = null,
//     loadJoys,
//     setFilter,
//     clearFilters,
//     getJoysByCategory,
//     getAvailableCategories
//   } = useJoysStore();

//   // Usar filteredJoys del store en lugar de filtrar manualmente
//   const displayJoys = useMemo(() => {
//     return Array.isArray(filteredJoys) ? filteredJoys.filter(Boolean) : [];
//   }, [filteredJoys]);

//   // Mapear categorías del store a las categorías de la UI
//   const mapCategoryToUI = (category) => {
//     const categoryMap = {
//       'crepaDulce': 'crepas',
//       'crepaSalada': 'crepas',
//       'cafés': 'cafés',
//       'bebidas': 'bebidas'
//     };
//     return categoryMap[category] || category;
//   };

//   // Categorías principales con conteos dinámicos
//   const mainCategories = useMemo(() => {
//     const categories = getAvailableCategories();
    
//     // Agrupar categorías similares
//     const groupedCategories = categories.reduce((acc, cat) => {
//       const uiCategory = mapCategoryToUI(cat.value);
//       if (!acc[uiCategory]) {
//         acc[uiCategory] = { count: 0, originalCategories: [] };
//       }
//       acc[uiCategory].count += cat.count;
//       acc[uiCategory].originalCategories.push(cat.value);
//       return acc;
//     }, {});

//     const categoriesWithIcons = [
//       {
//         id: 'todos',
//         name: 'Todos',
//         icon: <Utensils className="w-4 h-4" />,
//         count: joys.length
//       },
//       {
//         id: 'cafés',
//         name: 'Cafés',
//         icon: <Coffee className="w-4 h-4" />,
//         count: groupedCategories['cafés']?.count || 0
//       },
//       {
//         id: 'crepas',
//         name: 'Crepas',
//         icon: <CakeSlice className="w-4 h-4" />,
//         count: groupedCategories['crepas']?.count || 0
//       },
//       {
//         id: 'bebidas',
//         name: 'Bebidas',
//         icon: <GlassWater className="w-4 h-4" />,
//         count: groupedCategories['bebidas']?.count || 0
//       }
//     ];

//     return categoriesWithIcons;
//   }, [joys, getAvailableCategories]);

//   // Paginación
//   const itemsPerPage = 12;
//   const totalPages = Math.ceil(displayJoys.length / itemsPerPage);
//   const currentItems = displayJoys.slice(0, currentPage * itemsPerPage);
//   const hasMore = currentPage < totalPages;

//   // Efectos
//   useEffect(() => {
//     console.log('Cargando joys...');
//     loadJoys();
//   }, [loadJoys]);

//   useEffect(() => {
//     console.log('Aplicando filtros:', { activeCategory, searchTerm });
    
//     // Limpiar filtros primero
//     clearFilters();
    
//     // Aplicar filtros según la categoría seleccionada
//     if (activeCategory !== 'todos') {
//       // Mapear categoría de UI a categorías del store
//       const categoryMap = {
//         'cafés': ['cafés'],
//         'crepas': ['crepaDulce', 'crepaSalada'],
//         'bebidas': ['bebidas']
//       };
      
//       const categoriesToFilter = categoryMap[activeCategory] || [activeCategory];
      
//       // Para múltiples categorías, necesitamos filtrar manualmente
//       if (categoriesToFilter.length > 1) {
//         // Filtrar directamente en el store con lógica personalizada
//         const filteredByCategory = joys.filter(joy => 
//           categoriesToFilter.includes(joy.category)
//         );
        
//         // Aplicar filtro de búsqueda si existe
//         const finalFiltered = searchTerm ? 
//           filteredByCategory.filter(joy => {
//             const searchTermLower = searchTerm.toLowerCase();
//             return joy.name.toLowerCase().includes(searchTermLower) ||
//                    joy.description?.toLowerCase().includes(searchTermLower) ||
//                    joy.tags?.some(tag => tag.toLowerCase().includes(searchTermLower));
//           }) : filteredByCategory;
        
//         // Actualizar directamente el filteredJoys
//         useJoysStore.setState({ filteredJoys: finalFiltered });
//       } else {
//         setFilter('category', categoriesToFilter[0]);
//       }
//     }
    
//     // Aplicar filtro de búsqueda
//     if (searchTerm) {
//       setFilter('search', searchTerm);
//     }
//   }, [activeCategory, searchTerm, setFilter, clearFilters, joys]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [activeCategory, searchTerm]);

//   // Debug effect
//   useEffect(() => {
//     console.log('Store state:', {
//       joysLength: joys.length,
//       filteredJoysLength: filteredJoys.length,
//       displayJoysLength: displayJoys.length,
//       isLoading,
//       error,
//       activeCategory,
//       searchTerm
//     });
//   }, [joys, filteredJoys, displayJoys, isLoading, error, activeCategory, searchTerm]);

//   // Handlers
//   const handleCategoryFilter = (categoryId) => {
//     console.log('Filtrando por categoría:', categoryId);
//     setActiveCategory(categoryId);
//   };

//   const handleJoyClick = (joy) => {
//     setSelectedJoy(joy);
//   };

//   const handleCloseModal = () => {
//     setSelectedJoy(null);
//   };

//   const handleSearchChange = (value) => {
//     setSearchTerm(value);
//   };

//   const clearSearch = () => {
//     setSearchTerm('');
//   };

//   const clearAllFilters = () => {
//     setActiveCategory('todos');
//     setSearchTerm('');
//     clearFilters();
//   };

//   const loadMore = () => {
//     if (hasMore) {
//       setCurrentPage(prev => prev + 1);
//     }
//   };

//   const toggleFavorite = (joyId) => {
//     setFavorites(prev => 
//       prev.includes(joyId) 
//         ? prev.filter(id => id !== joyId)
//         : [...prev, joyId]
//     );
//   };

//   // Optimización del cambio de vista
//   const handleViewModeChange = (mode) => {
//     setViewMode(mode);
//   };

//   // Animaciones optimizadas
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.2,
//         staggerChildren: 0.02
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.2 }
//     }
//   };

//   // Render de error
//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <CircleX className="w-16 h-16 text-red-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-red-600 mb-2">Error al cargar delicias</h2>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-6 py-3 bg-morado-500 text-white rounded-xl hover:bg-morado-600 transition-colors"
//           >
//             Intentar de nuevo
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <HeaderMobile />
//       <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
//         {/* Header */}
//         <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//             <div className="text-center mb-6">
//               <motion.h1
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
//               >
//                 Delicias
//               </motion.h1>
//               <motion.p
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
//               >
//                 Café, bebidas y postres para complementar tu experiencia
//               </motion.p>
//             </div>

//             {/* Búsqueda */}
//             <div className="max-w-md mx-auto">
//               <SearchInput
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder="Buscar delicias..."
//               />
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           {/* Filtros principales con iconos */}
//           <div className="flex flex-wrap gap-3 justify-center mb-8">
//             {mainCategories.map((category) => (
//               <FilterChip
//                 key={category.id}
//                 label={category.name}
//                 icon={category.icon}
//                 count={category.count}
//                 active={activeCategory === category.id}
//                 onClick={() => handleCategoryFilter(category.id)}
//                 className={activeCategory === category.id ? '!bg-morado-500 text-white' : ''}
//               />
//             ))}
//           </div>

//           {/* Filtros activos */}
//           {(activeCategory !== 'todos' || searchTerm) && (
//             <div className="mb-6 flex flex-wrap gap-2 items-center justify-center">
//               <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
//                 Filtros activos:
//               </span>
              
//               {searchTerm && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="inline-flex items-center gap-2 px-3 py-1 bg-morado-100 dark:bg-morado-900 text-morado-800 dark:text-morado-200 rounded-full text-sm"
//                 >
//                   <span>"{searchTerm}"</span>
//                   <button
//                     onClick={clearSearch}
//                     className="text-morado-600 dark:text-morado-400 hover:text-morado-800 dark:hover:text-morado-200"
//                   >
//                     <CircleX className="w-4 h-4" />
//                   </button>
//                 </motion.div>
//               )}
              
//               {activeCategory !== 'todos' && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm"
//                 >
//                   <span>{activeCategory}</span>
//                   <button
//                     onClick={() => setActiveCategory('todos')}
//                     className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-200"
//                   >
//                     <CircleX className="w-4 h-4" />
//                   </button>
//                 </motion.div>
//               )}
              
//               <button
//                 onClick={clearAllFilters}
//                 className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 underline"
//               >
//                 Limpiar todos
//               </button>
//             </div>
//           )}

//           {/* Controles de vista y resultados */}
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
//             <div className="flex items-center gap-2">
//               <span className="text-sm text-gray-600 dark:text-gray-400">
//                 {displayJoys.length} {displayJoys.length === 1 ? 'delicia' : 'delicias'} encontrada{displayJoys.length === 1 ? '' : 's'}
//               </span>
//               {isLoading && (
//                 <div className="w-4 h-4 border-2 border-morado-500 border-t-transparent rounded-full animate-spin"></div>
//               )}
//             </div>
            
//             <div className="flex items-center gap-2">
//               <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Vista:</span>
//               <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
//                 <button
//                   onClick={() => handleViewModeChange('grid')}
//                   className={`p-2 rounded-md transition-colors ${
//                     viewMode === 'grid'
//                       ? 'bg-white dark:bg-gray-700 text-morado-600 dark:text-morado-400 shadow-sm'
//                       : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
//                   }`}
//                 >
//                   <Grid3X3 className="w-4 h-4" />
//                 </button>
//                 <button
//                   onClick={() => handleViewModeChange('list')}
//                   className={`p-2 rounded-md transition-colors ${
//                     viewMode === 'list'
//                       ? 'bg-white dark:bg-gray-700 text-morado-600 dark:text-morado-400 shadow-sm'
//                       : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
//                   }`}
//                 >
//                   <List className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Contenido principal */}
//           <AnimatePresence mode="wait">
//             {isLoading ? (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="flex justify-center items-center py-20"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 border-3 border-morado-500 border-t-transparent rounded-full animate-spin"></div>
//                   <span className="text-lg text-gray-600 dark:text-gray-400">Cargando delicias...</span>
//                 </div>
//               </motion.div>
//             ) : displayJoys.length === 0 ? (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//               >
//                 <EmptyState
//                   icon={<Utensils className="w-16 h-16 text-gray-400" />}
//                   title="No se encontraron delicias"
//                   description={
//                     searchTerm || activeCategory !== 'todos'
//                       ? "Intenta ajustar los filtros o buscar otros términos"
//                       : "Aún no hay delicias disponibles en esta categoría"
//                   }
//                   actionButton={
//                     (searchTerm || activeCategory !== 'todos') && (
//                       <button
//                         onClick={clearAllFilters}
//                         className="px-6 py-3 bg-morado-500 text-white rounded-xl hover:bg-morado-600 transition-colors font-medium"
//                       >
//                         Limpiar filtros
//                       </button>
//                     )
//                   }
//                 />
//                 {/* Debug info */}
//                 <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm">
//                   <p><strong>Debug Info:</strong></p>
//                   <p>Total joys: {joys.length}</p>
//                   <p>Filtered joys: {filteredJoys.length}</p>
//                   <p>Display joys: {displayJoys.length}</p>
//                   <p>Active category: {activeCategory}</p>
//                   <p>Search term: "{searchTerm}"</p>
//                   <p>Loading: {isLoading ? 'true' : 'false'}</p>
//                   <p>Error: {error || 'null'}</p>
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key={viewMode}
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className={
//                   viewMode === 'grid'
//                     ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//                     : "flex flex-col gap-4"
//                 }
//               >
//                 {currentItems.map((joy) => (
//                   <motion.div
//                     key={joy.id}
//                     variants={itemVariants}
//                     onMouseEnter={() => setHoveredJoy(joy.id)}
//                     onMouseLeave={() => setHoveredJoy(null)}
//                   >
//                     {viewMode === 'grid' ? (
//                       <ProductCard
//                         product={joy}
//                         onClick={() => handleJoyClick(joy)}
//                         isFavorite={favorites.includes(joy.id)}
//                         onToggleFavorite={() => toggleFavorite(joy.id)}
//                         isHovered={hoveredJoy === joy.id}
//                       />
//                     ) : (
//                       <OptimizedListView
//                         joy={joy}
//                         onClick={() => handleJoyClick(joy)}
//                         favorites={favorites}
//                         toggleFavorite={toggleFavorite}
//                       />
//                     )}
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Botón cargar más */}
//           {hasMore && displayJoys.length > 0 && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center mt-12"
//             >
//               <button
//                 onClick={loadMore}
//                 className="px-8 py-3 bg-gradient-to-r from-morado-500 to-morado-600 text-white rounded-xl hover:from-morado-600 hover:to-morado-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
//               >
//                 Cargar más delicias
//               </button>
//             </motion.div>
//           )}

//           {/* Estadísticas adicionales */}
//           {displayJoys.length > 0 && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
//             >
//               <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
//                 <div className="text-2xl font-bold text-morado-600 dark:text-morado-400">
//                   {joys.filter(j => j.isFeatured).length}
//                 </div>
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Destacadas</div>
//               </div>
              
//               <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
//                 <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
//                   {joys.filter(j => j.isNew).length}
//                 </div>
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Nuevas</div>
//               </div>
              
//               <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
//                 <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
//                   {joys.filter(j => j.isTrending).length}
//                 </div>
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Trending</div>
//               </div>
              
//               <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
//                 <div className="text-2xl font-bold text-morado-600 dark:text-morado-400">
//                   {joys.filter(j => j.seasonal).length}
//                 </div>
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Temporada</div>
//               </div>
//             </motion.div>
//           )}
//         </div>

//         {/* Modal del producto */}
//         <AnimatePresence>
//           {selectedJoy && (
//             <ProductModal
//               product={selectedJoy}
//               isOpen={!!selectedJoy}
//               onClose={handleCloseModal}
//               isFavorite={favorites.includes(selectedJoy.id)}
//               onToggleFavorite={() => toggleFavorite(selectedJoy.id)}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export default Delicias;


import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid3X3, List, Star, Heart, Coffee, Utensils, GlassWater, CakeSlice, CircleX } from 'lucide-react';
import { useJoysStore } from '../store/joysStore';

// Importación de componentes existentes
import HeaderMobile from '../components/layout/HeaderMobile'
import SearchInput from '../components/ui/SearchInput';
import FilterChip from '../components/ui/FilterChip';
import Badge from '../components/ui/Badge';
import EmptyState from '../components/sections/EmptyState';
import ProductModal from '../components/common/ProductModal';
import ProductCard from '../components/common/ProductCard';

// Función helper para manejar categorías (string o array)
const getCategoryArray = (category) => {
  if (!category) return [];
  return Array.isArray(category) ? category : [category];
};

// Función helper para verificar si una categoría contiene un término
const categoryIncludes = (category, searchTerm) => {
  const categories = getCategoryArray(category);
  return categories.some(cat => 
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Función para obtener el color del badge
const getBadgeColor = (badge) => {
  switch (badge) {
    case "Destacado":
      return "bg-gradient-to-r from-morado-500 to-morado-600 text-white";
    case "Nuevo":
      return "bg-gradient-to-r from-salmon-500 to-salmon-600 text-white";
    case "Trending":
      return "bg-gradient-to-r from-amber-500 to-orange-500 text-white";
    case "Temporada":
      return "bg-gradient-to-r from-morado-500 to-pink-500 text-white";
    default:
      return "bg-morado-500 text-white";
  }
};

// Componente ListView optimizado con badge debajo del rating
const OptimizedListView = ({ joy, onClick, favorites, toggleFavorite }) => {
  const isFavorite = favorites.includes(joy.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
    >
      <div className="flex gap-4 p-4">
        <div className="relative flex-shrink-0">
          <img
            src={joy.image}
            alt={joy.name}
            className="w-20 h-20 rounded-lg object-cover"
            onError={(e) => {
              e.target.src = '/api/placeholder/80/80';
            }}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-col">
            {/* Contenido principal */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white truncate">
                  {joy.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm capitalize">
                  {joy.category}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 line-clamp-2">
                  {joy.description}
                </p>
                
                {/* Precio en vista lista */}
                {joy.sizes && joy.sizes.length > 0 && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-morado-600 dark:text-morado-400">
                      ${joy.sizes[0].price}
                    </span>
                    {joy.sizes.length > 1 && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        - ${joy.sizes[joy.sizes.length - 1].price}
                      </span>
                    )}
                  </div>
                )}

                {/* Rating en vista lista */}
                {joy.rating && (
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(joy.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {joy.rating}
                    </span>
                    {joy.reviews && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        ({joy.reviews})
                      </span>
                    )}
                  </div>
                )}

                {/* Badges debajo del rating */}
                <div className="flex gap-1 mt-2">
                  {joy.isFeatured && (
                    <div className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-morado-500 to-morado-600 text-white shadow-sm">
                      Destacado
                    </div>
                  )}
                  {joy.isNew && (
                    <div className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-salmon-500 to-salmon-600 text-white shadow-sm">
                      Nuevo
                    </div>
                  )}
                  {joy.isTrending && (
                    <div className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
                      Trending
                    </div>
                  )}
                  {joy.seasonal && (
                    <div className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-morado-500 to-pink-500 text-white shadow-sm">
                      Temporada
                    </div>
                  )}
                </div>
              </div>
              
              {/* Botón de favorito - solo en desktop */}
              <div className="hidden sm:flex items-center gap-2 ml-4">
                <motion.button
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(joy.id);
                  }}
                >
                  <Heart className={`w-4 h-4 transition-colors ${
                    isFavorite ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-300'
                  }`} />
                </motion.button>
                
                <button
                  onClick={() => onClick(joy)}
                  className="px-4 py-2 bg-morado-500 text-white rounded-lg hover:bg-morado-600 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  Ver Detalles
                </button>
              </div>
            </div>

            {/* Botones en móvil - debajo del contenido */}
            <div className="flex sm:hidden items-center justify-between gap-3 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <motion.button
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(joy.id);
                }}
              >
                <Heart className={`w-4 h-4 transition-colors ${
                  isFavorite ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-300'
                }`} />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {isFavorite ? 'Favorito' : 'Agregar'}
                </span>
              </motion.button>
              
              <button
                onClick={() => onClick(joy)}
                className="flex-1 px-4 py-2 bg-morado-500 text-white rounded-lg hover:bg-morado-600 transition-colors text-sm font-medium text-center"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Componente principal Delicias optimizado
 */
const Delicias = () => {
  // Estados locales
  const [selectedJoy, setSelectedJoy] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('todos'); // Siempre inicia en 'todos'
  const [hoveredJoy, setHoveredJoy] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Store específico para delicias
  const {
    joys = [],
    isLoading = false,
    error = null,
    loadJoys
  } = useJoysStore();

  // Datos seguros
  const safeJoys = useMemo(() =>
    Array.isArray(joys) ? joys.filter(Boolean) : [],
    [joys]
  );

  // Categorías principales con conteos dinámicos
  const mainCategories = useMemo(() => {
    const cafes = safeJoys.filter(j => 
      categoryIncludes(j.category, 'café')
    );
    
    const crepas = safeJoys.filter(j => 
      categoryIncludes(j.category, 'crepa')
    );
    
    const bebidas = safeJoys.filter(j => 
      categoryIncludes(j.category, 'bebida')
    );

    return [
      {
        id: 'todos',
        name: 'Todos',
        icon: <Utensils className="w-4 h-4" />,
        count: safeJoys.length
      },
      {
        id: 'cafés',
        name: 'Cafés',
        icon: <Coffee className="w-4 h-4" />,
        count: cafes.length
      },
      {
        id: 'crepas',
        name: 'Crepas',
        icon: <CakeSlice className="w-4 h-4" />,
        count: crepas.length
      },
      {
        id: 'bebidas',
        name: 'Bebidas',
        icon: <GlassWater className="w-4 h-4" />,
        count: bebidas.length
      }
    ];
  }, [safeJoys]);

  // Filtrado optimizado
  const filteredJoys = useMemo(() => {
    let filtered = [...safeJoys];

    // Filtro por categoría principal
    if (activeCategory && activeCategory !== 'todos') {
      if (activeCategory === 'crepas') {
        // Para crepas, incluir tanto dulces como saladas
        filtered = filtered.filter(j => 
          categoryIncludes(j.category, 'crepa')
        );
      } else {
        // Remover la 's' final para la búsqueda (cafés -> café)
        const categorySearch = activeCategory.endsWith('s') ? 
          activeCategory.slice(0, -1) : activeCategory;
        filtered = filtered.filter(j => categoryIncludes(j.category, categorySearch));
      }
    }

    // Filtro por búsqueda
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(j => {
        const name = j.name?.toLowerCase() || '';
        const description = j.description?.toLowerCase() || '';
        const categories = getCategoryArray(j.category);
        const tags = Array.isArray(j.tags) ? j.tags : [];
        
        const matchesName = name.includes(search);
        const matchesDescription = description.includes(search);
        const matchesCategory = categories.some(cat => 
          cat.toLowerCase().includes(search)
        );
        const matchesTags = tags.some(tag => 
          tag.toLowerCase().includes(search)
        );

        return matchesName || matchesDescription || matchesCategory || matchesTags;
      });
    }

    return filtered;
  }, [safeJoys, activeCategory, searchTerm]);

  // Paginación
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredJoys.length / itemsPerPage);
  const currentItems = filteredJoys.slice(0, currentPage * itemsPerPage);
  const hasMore = currentPage < totalPages;

  // Efectos
  useEffect(() => {
    loadJoys();
  }, [loadJoys]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  // Handlers
  const handleCategoryFilter = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleJoyClick = (joy) => {
    setSelectedJoy(joy);
  };

  const handleCloseModal = () => {
    setSelectedJoy(null);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const clearAllFilters = () => {
    setActiveCategory('todos');
    setSearchTerm('');
  };

  const loadMore = () => {
    if (hasMore) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const toggleFavorite = (joyId) => {
    setFavorites(prev => 
      prev.includes(joyId) 
        ? prev.filter(id => id !== joyId)
        : [...prev, joyId]
    );
  };

  // Optimización del cambio de vista
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  // Animaciones optimizadas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.02
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  // Render de error
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <CircleX className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error al cargar delicias</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-morado-500 text-white rounded-xl hover:bg-morado-600 transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeaderMobile />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Header */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center mb-6">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
              >
                Delicias
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              >
                Café, bebidas y postres para complementar tu experiencia
              </motion.p>
            </div>

            {/* Búsqueda */}
            <div className="max-w-md mx-auto">
              <SearchInput
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Buscar delicias..."
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filtros principales con iconos */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {mainCategories.map((category) => (
              <FilterChip
                key={category.id}
                label={category.name}
                icon={category.icon}
                count={category.count}
                active={activeCategory === category.id}
                onClick={() => handleCategoryFilter(category.id)}
                className={activeCategory === category.id ? '!bg-morado-500 text-white' : ''}
              />
            ))}
          </div>

          {/* Filtros activos */}
          {(activeCategory !== 'todos' || searchTerm) && (
            <div className="mb-6 flex flex-wrap gap-2 items-center justify-center">
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
                Filtros activos:
              </span>
              {activeCategory !== 'todos' && (
                <Badge
                  variant="morado"
                  onClose={() => setActiveCategory('todos')}
                >
                  {mainCategories.find(c => c.id === activeCategory)?.name}
                </Badge>
              )}
              {searchTerm && (
                <Badge
                  variant="salmon"
                  onClose={clearSearch}
                >
                  "{searchTerm}"
                </Badge>
              )}
              <button
                onClick={clearAllFilters}
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400
                  dark:hover:text-gray-200 ml-2 underline"
              >
                Limpiar todo
              </button>
            </div>
          )}

          {/* Contador y vista optimizado */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {filteredJoys.length} delicia{filteredJoys.length !== 1 ? 's' : ''} encontrada{filteredJoys.length !== 1 ? 's' : ''}
            </p>
            <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => handleViewModeChange('grid')}
                className={`p-2 rounded transition-all duration-150 ${
                  viewMode === 'grid'
                    ? 'bg-morado-500 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleViewModeChange('list')}
                className={`p-2 rounded transition-all duration-150 ${
                  viewMode === 'list'
                    ? 'bg-morado-500 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-morado-500"></div>
              <span className="ml-3 text-gray-600 dark:text-gray-400">Cargando delicias...</span>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && filteredJoys.length === 0 && (
            <EmptyState
              title="No hay delicias disponibles"
              description={
                searchTerm || activeCategory !== 'todos'
                  ? "No se encontraron delicias con los filtros actuales"
                  : "No hay delicias disponibles en este momento"
              }
              action={
                (searchTerm || activeCategory !== 'todos') && (
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-3 bg-morado-500 text-white rounded-xl hover:bg-morado-600 transition-colors"
                  >
                    Limpiar filtros
                  </button>
                )
              }
            />
          )}

          {/* Grid/List de delicias */}
          {!isLoading && filteredJoys.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`${viewMode}-${activeCategory}-${searchTerm}`}
            >
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <AnimatePresence mode="popLayout">
                    {currentItems.map((joy) => (
                      <motion.div
                        key={joy.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, scale: 0.9 }}
                        layout
                        onMouseEnter={() => setHoveredJoy(joy.id)}
                        onMouseLeave={() => setHoveredJoy(null)}
                      >
                        <ProductCard
                          product={joy}
                          onClick={handleJoyClick}
                          isFavorite={favorites.includes(joy.id)}
                          onToggleFavorite={toggleFavorite}
                          isHovered={hoveredJoy === joy.id}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {currentItems.map((joy) => (
                      <OptimizedListView
                        key={joy.id}
                        joy={joy}
                        onClick={handleJoyClick}
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          )}

          {/* Load More Button */}
          {!isLoading && hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-morado-600 dark:text-morado-400 
                  border border-morado-500 rounded-xl hover:bg-morado-50 dark:hover:bg-gray-700 
                  transition-colors font-medium"
              >
                Cargar más delicias ({filteredJoys.length - currentItems.length} restantes)
              </button>
            </div>
          )}
        </div>

        {/* Modal de delicia */}
        <AnimatePresence>
          {selectedJoy && (
            <ProductModal
              product={selectedJoy}
              onClose={handleCloseModal}
              isFavorite={favorites.includes(selectedJoy.id)}
              onToggleFavorite={toggleFavorite}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Delicias;