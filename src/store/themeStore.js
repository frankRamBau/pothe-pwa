import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Store para manejo del tema
export const useThemeStore = create(
  persist(
    (set, get) => ({
      // Estado inicial
      theme: 'system', // 'light', 'dark', 'system'
      isDark: false,
      systemPreference: 'light',
      isAutoNightMode: false,
      nightModeStart: '20:00',
      nightModeEnd: '06:00',

      // Acciones
      setTheme: (theme) => {
        set({ theme });
        get().applyTheme();
      },

      toggleTheme: () => {
        const currentTheme = get().theme;
        let newTheme;
        
        if (currentTheme === 'light') {
          newTheme = 'dark';
        } else if (currentTheme === 'dark') {
          newTheme = 'system';
        } else {
          newTheme = 'light';
        }
        
        get().setTheme(newTheme);
      },

      setSystemPreference: (preference) => {
        set({ systemPreference: preference });
        if (get().theme === 'system') {
          get().applyTheme();
        }
      },

      setAutoNightMode: (enabled) => {
        set({ isAutoNightMode: enabled });
        if (enabled) {
          get().checkNightMode();
        }
      },

      setNightModeSchedule: (start, end) => {
        set({ 
          nightModeStart: start,
          nightModeEnd: end 
        });
        if (get().isAutoNightMode) {
          get().checkNightMode();
        }
      },

      checkNightMode: () => {
        const { isAutoNightMode, nightModeStart, nightModeEnd } = get();
        
        if (!isAutoNightMode) return;

        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        
        const [startHour, startMin] = nightModeStart.split(':').map(Number);
        const [endHour, endMin] = nightModeEnd.split(':').map(Number);
        
        const startTime = startHour * 60 + startMin;
        const endTime = endHour * 60 + endMin;
        
        let isNightTime;
        
        if (startTime <= endTime) {
          // Mismo día (ej: 20:00 - 23:00)
          isNightTime = currentTime >= startTime && currentTime <= endTime;
        } else {
          // Cruza medianoche (ej: 20:00 - 06:00)
          isNightTime = currentTime >= startTime || currentTime <= endTime;
        }
        
        if (isNightTime && get().theme !== 'dark') {
          get().setTheme('dark');
        } else if (!isNightTime && get().theme === 'dark' && get().isAutoNightMode) {
          get().setTheme('system');
        }
      },

      applyTheme: () => {
        const { theme, systemPreference } = get();
        let shouldBeDark = false;

        if (theme === 'dark') {
          shouldBeDark = true;
        } else if (theme === 'system') {
          shouldBeDark = systemPreference === 'dark';
        }

        set({ isDark: shouldBeDark });

        // Aplicar clase al documento
        if (typeof document !== 'undefined') {
          const root = document.documentElement;
          
          if (shouldBeDark) {
            root.classList.add('dark');
            root.style.colorScheme = 'dark';
          } else {
            root.classList.remove('dark');
            root.style.colorScheme = 'light';
          }
          
          // Actualizar meta theme-color
          const metaThemeColor = document.querySelector('meta[name="theme-color"]');
          if (metaThemeColor) {
            metaThemeColor.setAttribute(
              'content', 
              shouldBeDark ? '#1f1f1f' : '#7a2d89'
            );
          }
        }
      },

      // Inicialización
      init: () => {
        if (typeof window === 'undefined') return;

        // Detectar preferencia del sistema
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        get().setSystemPreference(mediaQuery.matches ? 'dark' : 'light');

        // Escuchar cambios en la preferencia del sistema
        const handleChange = (e) => {
          get().setSystemPreference(e.matches ? 'dark' : 'light');
        };
        
        mediaQuery.addEventListener('change', handleChange);

        // Aplicar tema inicial
        get().applyTheme();

        // Configurar verificación de modo nocturno
        if (get().isAutoNightMode) {
          get().checkNightMode();
          
          // Verificar cada minuto
          const interval = setInterval(() => {
            get().checkNightMode();
          }, 60000);
          
          // Limpiar intervalo cuando se desmonte (en un hook useEffect)
          return () => {
            mediaQuery.removeEventListener('change', handleChange);
            clearInterval(interval);
          };
        }

        return () => {
          mediaQuery.removeEventListener('change', handleChange);
        };
      },

      // Utilidades
      getThemeIcon: () => {
        const { theme, isDark } = get();
        
        if (theme === 'system') {
          return '🔄'; // Auto
        } else if (isDark) {
          return '🌙'; // Dark
        } else {
          return '☀️'; // Light
        }
      },

      getThemeLabel: () => {
        const { theme } = get();
        
        const labels = {
          light: 'Claro',
          dark: 'Oscuro',
          system: 'Automático'
        };
        
        return labels[theme] || 'Automático';
      }
    }),
    {
      name: 'pothe-theme-storage',
      partialize: (state) => ({
        theme: state.theme,
        isAutoNightMode: state.isAutoNightMode,
        nightModeStart: state.nightModeStart,
        nightModeEnd: state.nightModeEnd
      })
    }
  )
);

// Hook personalizado para facilitar el uso
export const useTheme = () => {
  const store = useThemeStore();
  
  return {
    theme: store.theme,
    isDark: store.isDark,
    isAutoNightMode: store.isAutoNightMode,
    nightModeStart: store.nightModeStart,
    nightModeEnd: store.nightModeEnd,
    setTheme: store.setTheme,
    toggleTheme: store.toggleTheme,
    setAutoNightMode: store.setAutoNightMode,
    setNightModeSchedule: store.setNightModeSchedule,
    getThemeIcon: store.getThemeIcon,
    getThemeLabel: store.getThemeLabel,
    init: store.init
  };
};

// // src/store/themeStore.js
// import { create } from 'zustand';

// // Función para obtener el tema inicial
// const getInitialTheme = () => {
//   // 1. Verificar si hay tema guardado
//   const savedTheme = localStorage.getItem('pothe-theme');
//   if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
//     return savedTheme;
//   }

//   // 2. Verificar preferencia del sistema
//   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     return 'dark';
//   }

//   // 3. Por defecto usar light
//   return 'light';
// };

// // Función para detectar si es modo automático nocturno
// const shouldUseNightMode = () => {
//   const nightModeEnabled = localStorage.getItem('pothe-night-mode') === 'true';
//   if (!nightModeEnabled) return false;

//   const hour = new Date().getHours();
//   return hour >= 20 || hour <= 6; // 8 PM a 6 AM
// };

// export const useThemeStore = create((set, get) => ({
//   // Estado inicial
//   theme: getInitialTheme(),
//   nightModeEnabled: localStorage.getItem('pothe-night-mode') === 'true',
//   systemPreference: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',

//   // Acciones
//   setTheme: (theme) => {
//     set({ theme });
//     localStorage.setItem('pothe-theme', theme);
//   },

//   toggleTheme: () => {
//     const currentTheme = get().theme;
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//     set({ theme: newTheme });
//     localStorage.setItem('pothe-theme', newTheme);
//   },

//   // Activar/desactivar modo nocturno automático
//   toggleNightMode: () => {
//     const current = get().nightModeEnabled;
//     const newValue = !current;
//     set({ nightModeEnabled: newValue });
//     localStorage.setItem('pothe-night-mode', newValue.toString());

//     // Si se activa el modo nocturno, verificar si debe aplicarse ahora
//     if (newValue && shouldUseNightMode()) {
//       get().setTheme('dark');
//     }
//   },

//   // Restablecer al tema del sistema
//   resetToSystem: () => {
//     const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//     set({ 
//       theme: systemTheme,
//       nightModeEnabled: false 
//     });
//     localStorage.removeItem('pothe-theme');
//     localStorage.removeItem('pothe-night-mode');
//   },

//   // Actualizar preferencia del sistema (para escuchar cambios)
//   updateSystemPreference: (preference) => {
//     set({ systemPreference: preference });
    
//     // Si no hay tema personalizado guardado, cambiar automáticamente
//     const savedTheme = localStorage.getItem('pothe-theme');
//     const nightMode = localStorage.getItem('pothe-night-mode') === 'true';
    
//     if (!savedTheme && !nightMode) {
//       get().setTheme(preference);
//     }
//   },

//   // Verificar y aplicar modo nocturno si está habilitado
//   checkNightMode: () => {
//     const { nightModeEnabled } = get();
//     if (nightModeEnabled) {
//       const newTheme = shouldUseNightMode() ? 'dark' : 'light';
//       get().setTheme(newTheme);
//     }
//   },

//   // Obtener información del estado actual
//   getThemeInfo: () => {
//     const state = get();
//     return {
//       currentTheme: state.theme,
//       isNightModeEnabled: state.nightModeEnabled,
//       systemPreference: state.systemPreference,
//       isNightTime: shouldUseNightMode(),
//       hasCustomTheme: localStorage.getItem('pothe-theme') !== null
//     };
//   }
// }));