import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Store para manejo de navegación y loading
const useNavigationStore = create(
  persist(
    (set, get) => ({
      // Estado de carga
      isLoading: true, // Iniciar en true para mostrar loading inicial
      loadingMessage: 'Cargando...',
      
      // Estado de navegación
      currentPath: '/',
      isNavigating: false,
      
      // Acciones de loading
      setLoading: (loading, message = 'Cargando...') => 
        set({ 
          isLoading: loading, 
          loadingMessage: message 
        }),
      
      showLoading: (message = 'Cargando...') => 
        set({ 
          isLoading: true, 
          loadingMessage: message 
        }),
      
      hideLoading: () => 
        set({ 
          isLoading: false 
        }),
      
      // Acciones de navegación
      setCurrentPath: (path) => 
        set({ currentPath: path }),
      
      setNavigating: (navigating) => 
        set({ isNavigating: navigating }),
      
      // Método para navegación con loading
      navigateWithLoading: async (navigateFn, loadingMessage = 'Cargando página...') => {
        set({ isNavigating: true, isLoading: true, loadingMessage })
        
        try {
          await navigateFn()
          // Simular tiempo mínimo de loading para UX
          await new Promise(resolve => setTimeout(resolve, 500))
        } finally {
          set({ isNavigating: false, isLoading: false })
        }
      },
      
      // Loading inicial de la app
      initializeApp: async () => {
        set({ isLoading: true, loadingMessage: 'Inicializando pöthe...' })
        
        try {
          // Simular carga inicial (datos, configuración, etc.)
          await Promise.all([
            // Aquí podrías cargar datos iniciales
            new Promise(resolve => setTimeout(resolve, 1000)),
            // Precargar imágenes críticas
            preloadCriticalImages(),
            // Verificar conectividad
            checkConnectivity()
          ])
        } catch (error) {
          console.error('Error inicializando app:', error)
        } finally {
          set({ isLoading: false })
        }
      }
    }),
    {
      name: 'pothe-navigation',
      partialize: (state) => ({
        currentPath: state.currentPath
      })
    }
  )
)

// Función para precargar imágenes críticas
const preloadCriticalImages = async () => {
  const criticalImages = [
    '/images/hero/hero-main.jpg',
    '/images/brand/logo.png',
    '/images/products/featured-1.jpg'
  ]
  
  const promises = criticalImages.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = resolve
      img.onerror = resolve // No fallar por imágenes faltantes
      img.src = src
    })
  })
  
  await Promise.allSettled(promises)
}

// Función para verificar conectividad
const checkConnectivity = async () => {
  return new Promise(resolve => {
    if (navigator.onLine) {
      resolve(true)
    } else {
      // Manejar modo offline
      resolve(false)
    }
  })
}

export default useNavigationStore