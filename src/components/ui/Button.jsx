import { motion } from 'framer-motion';
// import { ButtonLoadingSpinner } from './LoadingSpinner'; // ELIMINADO

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-morado-500 hover:bg-morado-600 text-white focus:ring-morado-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-salmon-500 hover:bg-salmon-600 text-white focus:ring-salmon-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-morado-500 text-morado-500 hover:bg-morado-500 hover:text-white focus:ring-morado-500',
    ghost: 'text-morado-500 hover:bg-morado-50 dark:hover:bg-morado-900/20 focus:ring-morado-500',
    cream: 'bg-crema-200 hover:bg-crema-300 text-morado-700 focus:ring-crema-300',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500 shadow-lg hover:shadow-xl',
    success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500 shadow-lg hover:shadow-xl',
    whatsapp: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500 shadow-lg hover:shadow-xl'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const widthClasses = fullWidth ? 'w-full' : '';

  const isDisabled = disabled || loading;

  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClasses}
    ${className}
  `;

  const buttonVariants = {
    initial: { scale: 1 },
    tap: { scale: 0.95 },
    hover: { scale: 1.02 }
  };

  const handleClick = (e) => {
    if (isDisabled) return;
    onClick?.(e);
  };

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      disabled={isDisabled}
      onClick={handleClick}
      variants={buttonVariants}
      initial="initial"
      whileHover={!isDisabled ? "hover" : "initial"}
      whileTap={!isDisabled ? "tap" : "initial"}
      {...props}
    >
      {/* Spinner eliminado */}

      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2 flex-shrink-0">
          {icon}
        </span>
      )}

      <span className={loading ? 'opacity-0' : ''}>
        {children}
      </span>

      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2 flex-shrink-0">
          {icon}
        </span>
      )}
    </motion.button>
  );
};

// Componentes especializados (sin cambios)
export const WhatsAppButton = ({ children, phone, message, ...props }) => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message || '¡Hola! Me interesa conocer más sobre Pöthe.')}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      variant="whatsapp"
      onClick={handleWhatsAppClick}
      icon={
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 2.009c-5.509 0-9.996 4.487-9.996 9.996 0 1.776.462 3.444 1.266 4.896L2.001 21.998l5.205-1.265c1.398.76 2.996 1.159 4.811 1.159 5.509 0 9.996-4.487 9.996-9.996s-4.487-9.996-9.996-9.996zm5.808 14.413c-.258.726-1.285 1.345-2.053 1.434-.698.082-1.611.086-2.611-.164-.603-.151-1.376-.352-2.357-.816-4.159-1.969-6.878-6.145-7.086-6.43-.208-.284-1.698-2.258-1.698-4.308 0-2.051 1.076-3.057 1.458-3.475.382-.418.832-.523 1.111-.523.278 0 .556.013.8.024.256.012.6-.097.937.715.347.835 1.183 2.887 1.286 3.097.104.209.173.453.035.731-.139.278-.208.452-.416.694-.208.243-.437.542-.625.729-.208.208-.425.432-.183.85.243.418.1.078 2.262 3.732.278.47.556.626.903.417.347-.208 1.49-.868 1.884-1.15z"/>
        </svg>
      }
      {...props}
    >
      {children}
    </Button>
  );
};

export const CallButton = ({ children, phone, ...props }) => {
  const handleCallClick = () => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <Button
      variant="outline"
      onClick={handleCallClick}
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      }
      {...props}
    >
      {children}
    </Button>
  );
};

export const EmailButton = ({ children, email, subject, body, ...props }) => {
  const handleEmailClick = () => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(body || '')}`;
    window.open(mailtoUrl, '_self');
  };

  return (
    <Button
      variant="outline"
      onClick={handleEmailClick}
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      }
      {...props}
    >
      {children}
    </Button>
  );
};

export default Button;