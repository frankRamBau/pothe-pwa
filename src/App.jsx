// import React, { useState, useEffect } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Layout from './components/layout/Layout'
// import LoadingSpinner from './components/ui/LoadingSpinner'
// import Home from './pages/Home'
// import Sabores from './pages/Sabores'
// import Eventos from './pages/Eventos'
// import Conocenos from './pages/Conocenos'
// import Blog from './pages/Blog'
// import Contacto from './pages/Contacto'
// import Delicias from './pages/Delicias'
// import useResponsive from './hooks/useResponsive'

// function App() {
//   const { isMobile } = useResponsive()
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     // Simular tiempo de carga inicial
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 3500) // 3.5 segundos para ver toda la animación

//     return () => clearTimeout(timer)
//   }, [])

//   // Mostrar loading mientras carga
//   if (isLoading) {
//     return <LoadingSpinner isLoading={isLoading} />
//   }

//   return (
//     <div className="App min-h-screen bg-crema-50 dark:bg-gray-900 transition-colors duration-300">
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="sabores" element={<Sabores />} />
//           {isMobile && <Route path="delicias" element={<Delicias />} />}
//           <Route path="eventos" element={<Eventos />} />
//           <Route path="conocenos" element={<Conocenos />} />
//           <Route path="blog" element={<Blog />} />
//           <Route path="contacto" element={<Contacto />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Layout from './components/layout/Layout'
// import LoadingSpinner from './components/ui/LoadingSpinner'
// import Home from './pages/Home'
// import Sabores from './pages/Sabores'
// import Eventos from './pages/Eventos'
// import Conocenos from './pages/Conocenos'
// import Blog from './pages/Blog'
// import Contacto from './pages/Contacto'
// import Delicias from './pages/Delicias'
// import useResponsive from './hooks/useResponsive'

// const UpdateNotification = ({ onUpdate, onDismiss }) => {
//   return (
//     <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] max-w-sm mx-auto animate-in slide-in-from-top duration-500">
//       <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm">
//         <div className="flex items-start gap-3">
//           <div className="flex-shrink-0 mt-0.5">
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//             </svg>
//           </div>
          
//           <div className="flex-1 min-w-0">
//             <h4 className="font-semibold text-sm mb-1">
//               ¡Nueva versión disponible! 🚀
//             </h4>
//             <p className="text-xs text-white/90 mb-3">
//               Tenemos mejoras increíbles esperándote. Actualiza para disfrutar la mejor experiencia Pöthe.
//             </p>
            
//             <div className="flex gap-2">
//               <button
//                 onClick={onUpdate}
//                 className="bg-white/20 hover:bg-white/30 text-white text-xs px-4 py-2 rounded-md transition-all duration-200 font-medium hover:scale-105"
//               >
//                 Actualizar ahora
//               </button>
//               <button
//                 onClick={onDismiss}
//                 className="text-white/80 hover:text-white text-xs px-3 py-2 transition-colors duration-200"
//               >
//                 Más tarde
//               </button>
//             </div>
//           </div>
          
//           <button
//             onClick={onDismiss}
//             className="flex-shrink-0 text-white/80 hover:text-white transition-colors duration-200"
//           >
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// function App() {
//   const { isMobile } = useResponsive()
//   const [isLoading, setIsLoading] = useState(true)
  
//   const [updateAvailable, setUpdateAvailable] = useState(false)
//   const [isUpdating, setIsUpdating] = useState(false)
//   const [updateSW, setUpdateSW] = useState(null)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 3500)

//     return () => clearTimeout(timer)
//   }, [])

//   useEffect(() => {
//     const handlePWAUpdate = (event) => {
//       console.log('🔔 PWA Update detectado en App.jsx');
//       setUpdateAvailable(true);
//       setUpdateSW(() => event.detail.updateSW);
//     };

//     const handleOfflineReady = () => {
//       console.log('📱 PWA lista para offline');
//     };

//     window.addEventListener('pwa-update-available', handlePWAUpdate);
//     window.addEventListener('pwa-offline-ready', handleOfflineReady);

//     return () => {
//       window.removeEventListener('pwa-update-available', handlePWAUpdate);
//       window.removeEventListener('pwa-offline-ready', handleOfflineReady);
//     };
//   }, []);

//   const handleUpdate = async () => {
//     if (updateSW) {
//       setIsUpdating(true);
//       console.log('🔄 Aplicando actualización PWA...');
      
//       try {
//         await updateSW();
        
//         setTimeout(() => {
//           window.location.reload();
//         }, 1000);
//       } catch (error) {
//         console.error('❌ Error aplicando actualización:', error);
//         setIsUpdating(false);
//         window.location.reload();
//       }
//     }
//   };

//   const handleDismissUpdate = () => {
//     setUpdateAvailable(false);
//   };

//   if (isLoading) {
//     return <LoadingSpinner isLoading={isLoading} />
//   }

//   return (
//     <div className="App min-h-screen bg-crema-50 dark:bg-gray-900 transition-colors duration-300">
//       {updateAvailable && !isUpdating && (
//         <UpdateNotification 
//           onUpdate={handleUpdate}
//           onDismiss={handleDismissUpdate}
//         />
//       )}

//       {isUpdating && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center">
//           <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mx-4 text-center">
//             <div className="animate-spin w-8 h-8 border-3 border-purple-200 border-t-purple-600 rounded-full mx-auto mb-4"></div>
//             <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
//               Actualizando Pöthe...
//             </h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400">
//               No cierres la aplicación
//             </p>
//           </div>
//         </div>
//       )}

//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="sabores" element={<Sabores />} />
//           {isMobile && <Route path="delicias" element={<Delicias />} />}
//           <Route path="eventos" element={<Eventos />} />
//           <Route path="conocenos" element={<Conocenos />} />
//           <Route path="blog" element={<Blog />} />
//           <Route path="contacto" element={<Contacto />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/ui/LoadingSpinner'
import Home from './pages/Home'
import Sabores from './pages/Sabores'
import Eventos from './pages/Eventos'
import Conocenos from './pages/Conocenos'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import Delicias from './pages/Delicias'
import ProductDetail from './pages/ProductDetail' // ← Importar ProductDetail
import useResponsive from './hooks/useResponsive'

const UpdateNotification = ({ onUpdate, onDismiss }) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] max-w-sm mx-auto animate-in slide-in-from-top duration-500">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm mb-1">
              ¡Nueva versión disponible! 🎉
            </h4>
            <p className="text-xs text-white/90 mb-3">
              Tenemos mejoras increíbles esperándote. Actualiza para disfrutar la mejor experiencia Pöthe.
            </p>

            <div className="flex gap-2">
              <button
                onClick={onUpdate}
                className="bg-white/20 hover:bg-white/30 text-white text-xs px-4 py-2 rounded-md transition-all duration-200 font-medium hover:scale-105"
              >
                Actualizar ahora
              </button>
              <button
                onClick={onDismiss}
                className="text-white/80 hover:text-white text-xs px-3 py-2 transition-colors duration-200"
              >
                Más tarde
              </button>
            </div>
          </div>

          <button
            onClick={onDismiss}
            className="flex-shrink-0 text-white/80 hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const { isMobile } = useResponsive()
  const [isLoading, setIsLoading] = useState(true)

  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [updateSW, setUpdateSW] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handlePWAUpdate = (event) => {
      console.log('🔄 PWA Update detectado en App.jsx');
      setUpdateAvailable(true);
      setUpdateSW(() => event.detail.updateSW);
    };

    const handleOfflineReady = () => {
      console.log('✅ PWA lista para offline');
    };

    window.addEventListener('pwa-update-available', handlePWAUpdate);
    window.addEventListener('pwa-offline-ready', handleOfflineReady);

    return () => {
      window.removeEventListener('pwa-update-available', handlePWAUpdate);
      window.removeEventListener('pwa-offline-ready', handleOfflineReady);
    };
  }, []);

  const handleUpdate = async () => {
    if (updateSW) {
      setIsUpdating(true);
      console.log('🔄 Aplicando actualización PWA...');

      try {
        await updateSW();

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.error('❌ Error aplicando actualización:', error);
        setIsUpdating(false);
        window.location.reload();
      }
    }
  };

  const handleDismissUpdate = () => {
    setUpdateAvailable(false);
  };

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />
  }

  return (
    <div className="App min-h-screen bg-crema-50 dark:bg-gray-900 transition-colors duration-300">
      {updateAvailable && !isUpdating && (
        <UpdateNotification
          onUpdate={handleUpdate}
          onDismiss={handleDismissUpdate}
        />
      )}

      {isUpdating && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mx-4 text-center">
            <div className="animate-spin w-8 h-8 border-3 border-purple-200 border-t-purple-600 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Actualizando Pöthe...
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              No cierres la aplicación
            </p>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sabores" element={<Sabores />} />
          {isMobile && <Route path="delicias" element={<Delicias />} />}
          <Route path="eventos" element={<Eventos />} />
          <Route path="conocenos" element={<Conocenos />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contacto" element={<Contacto />} />
          {/* ← Agregar ruta dinámica para productos */}
          <Route path="producto/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App