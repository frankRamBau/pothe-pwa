import { useState } from 'react';
import { useAppUpdate } from '../../hooks/useAppUpdate';

const UpdateNotification = () => {
  const { updateAvailable, isUpdating, refreshApp, swVersion } = useAppUpdate();
  const [dismissed, setDismissed] = useState(false);

  // No mostrar si no hay actualización, está actualizando o fue descartado
  if (!updateAvailable || isUpdating || dismissed) {
    return null;
  }

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] max-w-sm mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm mb-1">
              ¡Nueva versión disponible! 🚀
            </h4>
            <p className="text-xs text-white/90 mb-3">
              Hemos mejorado la aplicación para ti.
              {swVersion && <span className="block mt-1 text-white/70">Versión: {swVersion}</span>}
            </p>
            
            <div className="flex gap-2">
              <button
                onClick={refreshApp}
                className="bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1.5 rounded-md transition-colors duration-200 font-medium"
              >
                Actualizar ahora
              </button>
              <button
                onClick={() => setDismissed(true)}
                className="text-white/80 hover:text-white text-xs px-3 py-1.5 transition-colors duration-200"
              >
                Más tarde
              </button>
            </div>
          </div>
          
          <button
            onClick={() => setDismissed(true)}
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

export default UpdateNotification;