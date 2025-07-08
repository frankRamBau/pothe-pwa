// src/hooks/useTheme.js
import { useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';

export const useTheme = () => {
  const { theme, setTheme, toggleTheme } = useThemeStore();

  // Aplicar el tema al documento
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remover clases existentes
    root.classList.remove('light', 'dark');
    
    // Aplicar nueva clase
    root.classList.add(theme);
    
    // Actualizar meta theme-color para PWA
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      // Usar colores de tu marca según el tema
      const themeColors = {
        light: '#7a2d89', // morado principal
        dark: '#e76c6a'   // salmón para contraste en dark
      };
      metaThemeColor.setAttribute('content', themeColors[theme]);
    }
  }, [theme]);

  // Detectar cambios en la preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Solo cambiar automáticamente si no hay preferencia guardada
      const savedTheme = localStorage.getItem('pothe-theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Escuchar cambios
    mediaQuery.addEventListener('change', handleChange);
    
    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  // Función para cambiar a un tema específico
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    // Persistir en localStorage
    localStorage.setItem('pothe-theme', newTheme);
  };

  // Función para toggle con persistencia
  const toggleWithPersistence = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  };

  // Detectar si es de noche para auto-cambio (opcional)
  const isNightTime = () => {
    const hour = new Date().getHours();
    return hour >= 20 || hour <= 6; // 8 PM a 6 AM
  };

  // Función para activar modo noche automático
  const enableNightMode = () => {
    if (isNightTime()) {
      changeTheme('dark');
    } else {
      changeTheme('light');
    }
  };

  return {
    theme,
    setTheme: changeTheme,
    toggleTheme: toggleWithPersistence,
    enableNightMode,
    isNightTime: isNightTime(),
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };
};