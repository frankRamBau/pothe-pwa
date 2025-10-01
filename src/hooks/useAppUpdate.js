import { useState, useEffect, useCallback } from 'react';

export const useAppUpdate = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [registration, setRegistration] = useState(null);

  // Función para refrescar la app
  const refreshApp = useCallback(async () => {
    setIsUpdating(true);
    
    if (registration && registration.waiting) {
      // Enviar mensaje al SW para que se active
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      
      // Escuchar cuando el SW toma control
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    } else {
      // Fallback: recargar directamente
      window.location.reload();
    }
  }, [registration]);

  useEffect(() => {
    // Solo ejecutar si tenemos service worker
    if ('serviceWorker' in navigator) {
      
      // Función para manejar actualizaciones
      const handleUpdate = (registration) => {
        console.log('🔄 Nueva versión de PWA disponible');
        setUpdateAvailable(true);
        setRegistration(registration);
      };

      // Verificar si ya hay un SW esperando
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (reg && reg.waiting) {
          handleUpdate(reg);
        }
      });

      // Escuchar eventos de actualización
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SW_UPDATED') {
          navigator.serviceWorker.getRegistration().then((reg) => {
            if (reg) {
              handleUpdate(reg);
            }
          });
        }
      });

      // Verificar actualizaciones cada 5 minutos
      const checkForUpdates = async () => {
        try {
          const reg = await navigator.serviceWorker.getRegistration();
          if (reg) {
            await reg.update();
          }
        } catch (error) {
          console.error('Error checking for updates:', error);
        }
      };

      const updateInterval = setInterval(checkForUpdates, 5 * 60 * 1000);

      // Verificar actualizaciones cuando la ventana recupera el foco
      const handleFocus = () => {
        checkForUpdates();
      };

      window.addEventListener('focus', handleFocus);

      // Cleanup
      return () => {
        clearInterval(updateInterval);
        window.removeEventListener('focus', handleFocus);
      };
    }
  }, []);

  return {
    updateAvailable,
    isUpdating,
    refreshApp
  };
};