// src/components/providers/ThemeProvider.jsx
import { useEffect } from 'react';
import { useThemeStore } from '../../store/themeStore';

const ThemeProvider = ({ children }) => {
  const { theme, updateSystemPreference, checkNightMode } = useThemeStore();

  useEffect(() => {
    // Aplicar tema inicial inmediatamente
    document.documentElement.classList.add(theme);

    // Configurar meta theme-color inicial
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      const themeColors = {
        light: '#7a2d89',
        dark: '#e76c6a'
      };
      metaThemeColor.setAttribute('content', themeColors[theme]);
    }

    // Escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => {
      updateSystemPreference(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleSystemChange);

    // Verificar modo nocturno cada minuto
    const nightModeInterval = setInterval(checkNightMode, 60000);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
      clearInterval(nightModeInterval);
    };
  }, [theme, updateSystemPreference, checkNightMode]);

  return children;
};

export default ThemeProvider;