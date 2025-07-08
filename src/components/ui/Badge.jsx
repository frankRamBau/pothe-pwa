import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '',
  animate = true,
  icon: Icon,
  ...props 
}) => {
  // Variantes de color basadas en los colores de la marca
  const variants = {
    default: 'bg-morado-100 text-morado-800 border-morado-200 dark:bg-morado-900/30 dark:text-morado-300 dark:border-morado-700',
    primary: 'bg-morado-500 text-white border-morado-500 dark:bg-morado-600 dark:border-morado-600',
    secondary: 'bg-salmon-100 text-salmon-800 border-salmon-200 dark:bg-salmon-900/30 dark:text-salmon-300 dark:border-salmon-700',
    accent: 'bg-salmon-500 text-white border-salmon-500 dark:bg-salmon-600 dark:border-salmon-600',
    success: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700',
    warning: 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700',
    danger: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700',
    info: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
    neutral: 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600',
    outline: 'bg-transparent text-morado-700 border-morado-300 dark:text-morado-300 dark:border-morado-600',
    ghost: 'bg-transparent text-morado-600 border-transparent hover:bg-morado-50 dark:text-morado-400 dark:hover:bg-morado-900/20',
    
    // Variantes específicas para categorías de productos
    helado: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
    nieve: 'bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700',
    paleta: 'bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-700',
    petFriendly: 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700',
    alcohol: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700',
    sinAzucar: 'bg-lime-100 text-lime-800 border-lime-200 dark:bg-lime-900/30 dark:text-lime-300 dark:border-lime-700',
    temporada: 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700',
    gourmet: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700',
    premium: 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700',
    tradicional: 'bg-stone-100 text-stone-800 border-stone-200 dark:bg-stone-900/30 dark:text-stone-300 dark:border-stone-700'
  };

  // Tamaños
  const sizes = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-3.5 py-1.5 text-sm',
    xl: 'px-4 py-2 text-base'
  };

  // Clases base
  const baseClasses = 'inline-flex items-center gap-1.5 font-medium rounded-full border transition-all duration-200 select-none';
  
  // Combinar clases
  const badgeClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  // Animaciones
  const animations = {
    initial: animate ? { scale: 0.8, opacity: 0 } : false,
    animate: animate ? { scale: 1, opacity: 1 } : false,
    whileHover: animate ? { scale: 1.05 } : false,
    whileTap: animate ? { scale: 0.95 } : false,
    transition: { duration: 0.2, ease: 'easeOut' }
  };

  const BadgeComponent = (
    <span className={badgeClasses} {...props}>
      {Icon && <Icon className="w-3 h-3 flex-shrink-0" />}
      {children}
    </span>
  );

  // Retornar con o sin animación
  return animate ? (
    <motion.span
      initial={animations.initial}
      animate={animations.animate}
      whileHover={animations.whileHover}
      whileTap={animations.whileTap}
      transition={animations.transition}
      className="inline-block"
    >
      {BadgeComponent}
    </motion.span>
  ) : BadgeComponent;
};

// Componente especializado para valoraciones
export const RatingBadge = ({ rating, maxRating = 5, showNumber = true, ...props }) => {
  const stars = '⭐'.repeat(Math.floor(rating));
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <Badge variant="warning" {...props}>
      <span className="flex items-center gap-1">
        <span>{stars}{hasHalfStar ? '✨' : ''}</span>
        {showNumber && <span>{rating.toFixed(1)}</span>}
      </span>
    </Badge>
  );
};

// Componente especializado para categorías de productos
export const CategoryBadge = ({ category, ...props }) => {
  const categoryMap = {
    'helado': { text: 'Helado', variant: 'helado' },
    'nieve': { text: 'Nieve', variant: 'nieve' },
    'paleta': { text: 'Paleta', variant: 'paleta' },
    'gourmet': { text: 'Gourmet', variant: 'gourmet' },
    'premium': { text: 'Premium', variant: 'premium' },
    'tradicional': { text: 'Tradicional', variant: 'tradicional' },
    'temporada': { text: 'Temporada', variant: 'temporada' },
    'pet-friendly': { text: '🐾 Pet Friendly', variant: 'petFriendly' },
    'sin-azucar': { text: 'Sin Azúcar', variant: 'sinAzucar' },
    'con-alcohol': { text: '🔞 Con Alcohol', variant: 'alcohol' }
  };

  const config = categoryMap[category] || { text: category, variant: 'default' };
  
  return (
    <Badge variant={config.variant} {...props}>
      {config.text}
    </Badge>
  );
};

// Componente para múltiples badges
export const BadgeGroup = ({ badges = [], className = '', spacing = 'gap-2', ...props }) => {
  if (!badges.length) return null;

  return (
    <div className={`flex flex-wrap items-center ${spacing} ${className}`} {...props}>
      {badges.map((badge, index) => {
        if (typeof badge === 'string') {
          return <Badge key={index}>{badge}</Badge>;
        }
        
        if (badge.type === 'category') {
          return <CategoryBadge key={index} category={badge.value} {...badge.props} />;
        }
        
        if (badge.type === 'rating') {
          return <RatingBadge key={index} rating={badge.value} {...badge.props} />;
        }
        
        return (
          <Badge key={index} variant={badge.variant} {...badge.props}>
            {badge.children || badge.text}
          </Badge>
        );
      })}
    </div>
  );
};

export default Badge;