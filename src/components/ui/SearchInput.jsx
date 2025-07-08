import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchInput = ({
  value = '',
  onChange,
  onFocus,
  onBlur,
  placeholder = 'Buscar sabores, categorías...',
  showSuggestions = true,
  recentSearches = [],
  trendingSearches = ['Ramito de violetas', 'Pica fresa', 'Clericot', 'Matcha'],
  className = '',
  size = 'md',
  variant = 'default',
  autoFocus = false,
  onSearch,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !inputRef.current?.contains(event.target)
      ) {
        setShowDropdown(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sizeConfig = {
    sm: {
      container: 'h-9',
      input: 'text-sm px-3',
      icon: 'w-4 h-4',
      dropdown: 'mt-1'
    },
    md: {
      container: 'h-11',
      input: 'text-base px-4',
      icon: 'w-5 h-5',
      dropdown: 'mt-2'
    },
    lg: {
      container: 'h-13',
      input: 'text-lg px-5',
      icon: 'w-6 h-6',
      dropdown: 'mt-3'
    }
  };

  const variantConfig = {
    default: {
      container: `bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                 focus-within:border-morado-500 focus-within:ring-2 focus-within:ring-morado-200 
                 dark:focus-within:ring-morado-800`,
      input: 'text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400'
    },
    filled: {
      container: `bg-gray-100 dark:bg-gray-700 border border-transparent 
                 focus-within:bg-white dark:focus-within:bg-gray-800 
                 focus-within:border-morado-500 focus-within:ring-2 focus-within:ring-morado-200`,
      input: 'text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-300'
    },
    hero: {
      container: `bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-white/20 
                 focus-within:border-morado-400 focus-within:bg-white dark:focus-within:bg-gray-800 
                 shadow-lg`,
      input: 'text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-300'
    }
  };

  const currentSize = sizeConfig[size];
  const currentVariant = variantConfig[variant];

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
    setShowDropdown(newValue.length > 0 || isFocused);
  };

  const handleInputFocus = (e) => {
    setIsFocused(true);
    setShowDropdown(true);
    onFocus?.(e);
  };

  const handleInputBlur = (e) => {
    setTimeout(() => {
      setIsFocused(false);
      onBlur?.(e);
    }, 150);
  };

  const handleClear = () => {
    setInternalValue('');
    onChange?.('');
    inputRef.current?.focus();
  };

  const handleSuggestionClick = (suggestion) => {
    setInternalValue(suggestion);
    onChange?.(suggestion);
    setShowDropdown(false);
    onSearch?.(suggestion);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch?.(internalValue);
      setShowDropdown(false);
      inputRef.current?.blur();
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
      inputRef.current?.blur();
    }
  };

  const filteredSuggestions = showSuggestions && internalValue.length > 0
    ? [...recentSearches, ...trendingSearches]
        .filter(item =>
          item.toLowerCase().includes(internalValue.toLowerCase()) &&
          item.toLowerCase() !== internalValue.toLowerCase()
        )
        .slice(0, 6)
    : [];

  return (
    <div className={`relative ${className}`}>
      <div className={`
        relative flex items-center rounded-xl transition-all duration-200
        ${currentSize.container}
        ${currentVariant.container}
        ${isFocused ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}
      `}>
        <Search className={`
          absolute left-3 text-gray-400 dark:text-gray-500 transition-colors
          ${currentSize.icon}
          ${isFocused ? 'text-morado-500' : ''}
        `} />

        <input
          ref={inputRef}
          type="text"
          value={internalValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`
            w-full pl-10 pr-10 bg-transparent border-none outline-none
            ${currentSize.input}
            ${currentVariant.input}
          `}
          {...props}
        />

        <AnimatePresence>
          {internalValue && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              onClick={handleClear}
              className={`
                absolute right-3 p-1 rounded-full transition-colors
                text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300
                hover:bg-gray-100 dark:hover:bg-gray-700
              `}
              type="button"
            >
              <X className={currentSize.icon} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showDropdown && showSuggestions && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`
              absolute left-0 right-0 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-xl
              border border-gray-200 dark:border-gray-700 overflow-hidden
              ${currentSize.dropdown}
            `}
          >
            {recentSearches.length > 0 && internalValue.length === 0 && (
              <div className="p-3 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  <Clock className="w-4 h-4" />
                  Búsquedas recientes
                </div>
                <div className="space-y-1">
                  {recentSearches.slice(0, 3).map((search, index) => (
                    <button
                      key={`recent-${index}`}
                      onClick={() => handleSuggestionClick(search)}
                      className="w-full text-left px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300 
                               hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {trendingSearches.length > 0 && internalValue.length === 0 && (
              <div className="p-3">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  Sabores populares
                </div>
                <div className="space-y-1">
                  {trendingSearches.slice(0, 4).map((trending, index) => (
                    <button
                      key={`trending-${index}`}
                      onClick={() => handleSuggestionClick(trending)}
                      className="w-full text-left px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300 
                               hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      {trending}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredSuggestions.length > 0 && (
              <div className="p-3">
                <div className="space-y-1">
                  {filteredSuggestions.map((suggestion, index) => (
                    <button
                      key={`suggestion-${index}`}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300 
                               hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors
                               flex items-center gap-2"
                    >
                      <Search className="w-3 h-3 text-gray-400" />
                      <span>
                        {suggestion.split(new RegExp(`(${internalValue})`, 'gi')).map((part, i) =>
                          part.toLowerCase() === internalValue.toLowerCase() ? (
                            <mark key={i} className="bg-morado-200 dark:bg-morado-800 text-morado-900 dark:text-morado-200">
                              {part}
                            </mark>
                          ) : (
                            <span key={i}>{part}</span>
                          )
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {internalValue.length > 0 && filteredSuggestions.length === 0 && (
              <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                No se encontraron sugerencias para "{internalValue}"
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchInput;