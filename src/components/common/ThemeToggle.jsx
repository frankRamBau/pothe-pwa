import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../store/themeStore';

const ThemeToggle = ({ className = '', showLabel = false, variant = 'button' }) => {
  const { 
    isDark, 
    toggleTheme
  } = useTheme();

  // Función para obtener el icono según el tema
  const getThemeIcon = () => {
    return isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />;
  };

  // Función para obtener la etiqueta del tema
  const getThemeLabel = () => {
    return isDark ? 'Oscuro' : 'Claro';
  };

  // Variante simple: solo botón de toggle
  if (variant === 'simple') {
    return (
      <motion.button
        onClick={toggleTheme}
        className={`
          relative p-2 rounded-full transition-colors duration-200 
          ${isDark 
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }
          ${className}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={`Cambiar a tema ${getThemeLabel()}`}
      >
        <motion.div
          key={isDark}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        >
          {getThemeIcon()}
        </motion.div>
        
        {showLabel && (
          <span className="ml-2 text-sm font-medium">
            {getThemeLabel()}
          </span>
        )}
      </motion.button>
    );
  }



  // Variante switch/toggle
  if (variant === 'switch') {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        {showLabel && (
          <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {getThemeLabel()}
          </span>
        )}
        
        <motion.button
          onClick={toggleTheme}
          className={`
            relative inline-flex h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none
            ${isDark ? 'bg-morado-500' : 'bg-gray-300'}
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ x: isDark ? 20 : 0 }}
            transition={{ 
              duration: 0.2,
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
            className="inline-block h-6 w-6 rounded-full bg-white shadow-lg transform flex items-center justify-center"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
            >
              {isDark ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
            </motion.div>
          </motion.span>
        </motion.button>
      </div>
    );
  }

  // Variante por defecto: botón estándar
  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
        ${isDark 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-700' 
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
        }
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      title={`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`}
    >
      <motion.div
        key={isDark}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ 
          duration: 0.3,
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
      >
        {getThemeIcon()}
      </motion.div>
      
      {showLabel && (
        <span className="text-sm font-medium">
          {getThemeLabel()}
        </span>
      )}
    </motion.button>
  );
};

export default ThemeToggle;