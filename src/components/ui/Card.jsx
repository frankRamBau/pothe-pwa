import { motion } from 'framer-motion';

const Card = ({
  children,
  variant = 'default',
  size = 'md',
  hover = true,
  shadow = true,
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 transition-all duration-200';

  const variantClasses = {
    default: 'bg-white dark:bg-gray-800',
    cream: 'bg-crema-50 dark:bg-gray-800 border-crema-200 dark:border-gray-700',
    morado: 'bg-morado-50 dark:bg-morado-900/20 border-morado-200 dark:border-morado-800',
    salmon: 'bg-salmon-50 dark:bg-salmon-900/20 border-salmon-200 dark:border-salmon-800',
    glass: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-white/20 dark:border-gray-700/50',
    gradient: 'bg-gradient-to-br from-morado-500 to-salmon-500 text-white border-none'
  };

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const shadowClasses = shadow ? 'shadow-lg hover:shadow-xl' : '';
  const hoverClasses = hover ? 'hover:scale-[1.02] hover:-translate-y-1' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  const cardClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${shadowClasses}
    ${hoverClasses}
    ${clickableClasses}
    ${className}
  `;

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: hover ? { scale: 1.02, y: -4 } : {},
    tap: onClick ? { scale: 0.98 } : {}
  };

  return (
    <motion.div
      className={cardClasses}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Componentes de Card especializados para Pöthe
export const ProductCard = ({ 
  product, 
  onClick, 
  showBadge = true,
  className = '' 
}) => {
  const { name, category, image, rating, price, badges } = product;

  return (
    <Card 
      className={`overflow-hidden group ${className}`}
      onClick={onClick}
      size="sm"
    >
      {/* Imagen del producto */}
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
        <img
          src={image || '/api/placeholder/300/300'}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Badges */}
        {showBadge && badges && badges.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-morado-500 text-white rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Rating */}
        {rating && (
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <span className="text-xs font-medium text-gray-700">{rating}</span>
          </div>
        )}
      </div>

      {/* Información del producto */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-morado-600 transition-colors">
          {name}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
          {category}
        </p>

        {price && (
          <p className="text-lg font-bold text-morado-600 dark:text-morado-400">
            ${price}
          </p>
        )}
      </div>
    </Card>
  );
};

export const TestimonialCard = ({ testimonial, className = '' }) => {
  const { name, content, rating, avatar } = testimonial;

  return (
    <Card 
      variant="cream" 
      className={`text-center ${className}`}
      size="md"
    >
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-morado-200">
          <img
            src={avatar || '/api/placeholder/64/64'}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
      </div>

      {/* Contenido */}
      <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
        "{content}"
      </blockquote>

      {/* Nombre */}
      <cite className="font-semibold text-morado-600 dark:text-morado-400 not-italic">
        {name}
      </cite>
    </Card>
  );
};

export const StatsCard = ({ icon, title, value, description, className = '' }) => {
  return (
    <Card 
      variant="glass" 
      className={`text-center ${className}`}
      size="md"
    >
      {/* Icono */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-morado-500 rounded-xl flex items-center justify-center text-white">
          {icon}
        </div>
      </div>

      {/* Valor */}
      <div className="text-3xl font-bold text-morado-600 dark:text-morado-400 mb-2">
        {value}
      </div>

      {/* Título */}
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      {/* Descripción */}
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </Card>
  );
};

export const EventCard = ({ event, onClick, className = '' }) => {
  const { title, description, image, date, location, price } = event;

  return (
    <Card 
      className={`overflow-hidden ${className}`}
      onClick={onClick}
      size="sm"
    >
      {/* Imagen */}
      <div className="aspect-video mb-4 overflow-hidden rounded-xl">
        <img
          src={image || '/api/placeholder/400/200'}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Contenido */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <span className="text-morado-600 dark:text-morado-400 font-medium">
            {date}
          </span>
          {price && (
            <span className="font-bold text-salmon-600 dark:text-salmon-400">
              ${price}
            </span>
          )}
        </div>

        {location && (
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Card;