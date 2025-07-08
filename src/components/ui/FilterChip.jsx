import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const FilterChip = ({
  label,
  value,
  isActive = false,
  count,
  variant = 'default',
  size = 'medium',
  showCount = false,
  showIcon = false,
  disabled = false,
  removable = false,
  onClick,
  onRemove,
  className = '',
  icon: Icon,
  ...props
}) => {
  // Variantes de estilo
  const variants = {
    default: {
      base: `
        bg-white dark:bg-gray-800 
        border border-gray-200 dark:border-gray-700 
        text-gray-700 dark:text-gray-300
        hover:bg-gray-50 dark:hover:bg-gray-700
        hover:border-gray-300 dark:hover:border-gray-600
      `,
      active: `
        bg-morado-500 dark:bg-morado-600 
        border-morado-500 dark:border-morado-600 
        text-white shadow-lg shadow-morado-500/25
        hover:bg-morado-600 dark:hover:bg-morado-700
      `
    },
    category: {
      base: `
        bg-crema-50 dark:bg-crema-900/20
        border border-crema-200 dark:border-crema-700
        text-crema-800 dark:text-crema-300
        hover:bg-crema-100 dark:hover:bg-crema-800/30
      `,
      active: `
        bg-salmon-500 dark:bg-salmon-600 
        border-salmon-500 dark:border-salmon-600 
        text-white shadow-lg shadow-salmon-500/25
        hover:bg-salmon-600 dark:hover:bg-salmon-700
      `
    },
    outlined: {
      base: `
        bg-transparent border-2 border-gray-300 dark:border-gray-600
        text-gray-700 dark:text-gray-300
        hover:border-morado-300 dark:hover:border-morado-500
        hover:bg-morado-50 dark:hover:bg-morado-900/20
      `,
      active: `
        bg-morado-50 dark:bg-morado-900/30
        border-2 border-morado-500 text-morado-700 dark:text-morado-300
        shadow-sm
      `
    }
  };

  // Tamaños
  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base'
  };

  // Clases base
  const baseClasses = `
    inline-flex items-center gap-1.5 rounded-full font-medium
    transition-all duration-200 cursor-pointer select-none
    focus:outline-none focus:ring-2 focus:ring-morado-500 focus:ring-offset-2
    dark:focus:ring-offset-gray-800
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${sizes[size]}
    ${isActive ? variants[variant].active : variants[variant].base}
    ${className}
  `;

  const handleClick = (e) => {
    if (disabled) return;
    onClick && onClick(value, !isActive);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    if (!disabled) {
      onRemove && onRemove(value);
    }
  };

  return (
    <motion.button
      type="button"
      className={baseClasses}
      onClick={handleClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {/* Icono inicial */}
      {showIcon && Icon && (
        <Icon 
          size={size === 'small' ? 12 : size === 'large' ? 18 : 14}
          className="flex-shrink-0"
        />
      )}

      {/* Check para activo */}
      {isActive && !showIcon && (
        <Check 
          size={size === 'small' ? 12 : size === 'large' ? 16 : 14}
          className="flex-shrink-0"
        />
      )}

      {/* Label */}
      <span className="truncate max-w-32 sm:max-w-none">
        {label}
      </span>

      {/* Contador */}
      {showCount && count !== undefined && (
        <span className={`
          ml-1 px-1.5 py-0.5 rounded-full text-xs font-semibold
          ${isActive 
            ? 'bg-white/20 text-white' 
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
          }
        `}>
          {count}
        </span>
      )}

      {/* Botón de remover */}
      {removable && (
        <button
          type="button"
          onClick={handleRemove}
          className={`
            ml-1 p-0.5 rounded-full transition-colors
            hover:bg-white/20 focus:outline-none
            ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-600'}
          `}
          aria-label={`Remover filtro ${label}`}
        >
          <X size={size === 'small' ? 10 : size === 'large' ? 14 : 12} />
        </button>
      )}
    </motion.button>
  );
};

// Componente para grupo de chips
const FilterChipGroup = ({
  chips = [],
  activeChips = [],
  onChipChange,
  onChipRemove,
  variant = 'default',
  size = 'medium',
  showCount = false,
  className = '',
  allowMultiple = true,
  ...props
}) => {
  const handleChipClick = (value, isActive) => {
    if (!allowMultiple) {
      // Solo uno activo a la vez
      onChipChange && onChipChange(isActive ? [] : [value]);
    } else {
      // Múltiples activos
      let newActiveChips;
      if (isActive) {
        newActiveChips = activeChips.filter(chip => chip !== value);
      } else {
        newActiveChips = [...activeChips, value];
      }
      onChipChange && onChipChange(newActiveChips);
    }
  };

  return (
    <div 
      className={`flex flex-wrap gap-2 ${className}`}
      {...props}
    >
      {chips.map((chip, index) => (
        <FilterChip
          key={chip.value || index}
          label={chip.label}
          value={chip.value}
          count={chip.count}
          icon={chip.icon}
          isActive={activeChips.includes(chip.value)}
          variant={variant}
          size={size}
          showCount={showCount}
          showIcon={chip.showIcon}
          disabled={chip.disabled}
          removable={chip.removable}
          onClick={handleChipClick}
          onRemove={onChipRemove}
        />
      ))}
    </div>
  );
};

// Componente especializado para filtros de categoría
const CategoryFilterChips = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  showCounts = true,
  className = '',
  ...props 
}) => {
  const chips = categories.map(category => ({
    label: category.name,
    value: category.value,
    count: category.count,
    icon: category.icon,
    showIcon: !!category.icon
  }));

  return (
    <FilterChipGroup
      chips={chips}
      activeChips={activeCategory ? [activeCategory] : []}
      onChipChange={(newActive) => onCategoryChange(newActive[0] || null)}
      variant="category"
      showCount={showCounts}
      allowMultiple={false}
      className={className}
      {...props}
    />
  );
};

// Exportar componentes
FilterChip.Group = FilterChipGroup;
FilterChip.Category = CategoryFilterChips;

export default FilterChip;