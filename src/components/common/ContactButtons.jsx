import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail,
  Facebook,
  Instagram
} from 'lucide-react';

const ContactButtons = ({ 
  variant = 'default', 
  showPhone = true, 
  showEmail = true, 
  showWhatsApp = true,
  className = '',
  orientation = 'horizontal' // 'horizontal' | 'vertical'
}) => {
  // Números y enlaces de contacto (estos deberían venir de constants o env)
  const contactInfo = {
    whatsapp: {
      number: '5217711234567', // Formato internacional sin +
      message: 'Hola, me interesa conocer más sobre Pöthe 🍦'
    },
    phone: '771-123-4567',
    email: 'hola@pothe.mx'
  };

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(contactInfo.whatsapp.message);
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.number}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Función para llamar (solo funciona en móvil)
  const makeCall = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  // Función para abrir email
  const sendEmail = () => {
    window.location.href = `mailto:${contactInfo.email}?subject=Consulta sobre Pöthe`;
  };

  // Variantes de estilo
  const variants = {
    default: {
      button: 'bg-morado-500 hover:bg-morado-600 text-white',
      size: 'px-6 py-3',
      text: 'text-sm font-medium'
    },
    primary: {
      button: 'bg-morado-500 hover:bg-morado-600 text-white shadow-lg hover:shadow-xl',
      size: 'px-8 py-4',
      text: 'text-base font-semibold'
    },
    secondary: {
      button: 'bg-salmon-500 hover:bg-salmon-600 text-white',
      size: 'px-6 py-3',
      text: 'text-sm font-medium'
    },
    outline: {
      button: 'border-2 border-morado-500 text-morado-500 hover:bg-morado-500 hover:text-white',
      size: 'px-6 py-3',
      text: 'text-sm font-medium'
    },
    minimal: {
      button: 'text-morado-500 hover:text-morado-600 hover:bg-morado-50 dark:hover:bg-morado-950',
      size: 'px-4 py-2',
      text: 'text-sm font-medium'
    }
  };

  const currentVariant = variants[variant] || variants.default;

  // Clases base para los botones
  const baseButtonClasses = `
    inline-flex items-center justify-center gap-2 
    rounded-xl transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-morado-500 focus:ring-offset-2
    transform hover:scale-105 active:scale-95
    ${currentVariant.button} 
    ${currentVariant.size} 
    ${currentVariant.text}
  `;

  // Contenedor según orientación
  const containerClasses = `
    ${orientation === 'vertical' ? 'flex flex-col space-y-3' : 'flex flex-wrap gap-3'}
    ${className}
  `;

  // Animaciones
  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const buttonAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={containerClasses}
      initial="hidden"
      animate="visible"
      variants={containerAnimation}
    >
      {/* Botón de WhatsApp */}
      {showWhatsApp && (
        <motion.button
          onClick={openWhatsApp}
          className={`${baseButtonClasses} group`}
          variants={buttonAnimation}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span>WhatsApp</span>
        </motion.button>
      )}

      {/* Botón de teléfono */}
      {showPhone && (
        <motion.button
          onClick={makeCall}
          className={`${baseButtonClasses} group`}
          variants={buttonAnimation}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span>Llamar</span>
        </motion.button>
      )}

      {/* Botón de email */}
      {showEmail && (
        <motion.button
          onClick={sendEmail}
          className={`${baseButtonClasses} group`}
          variants={buttonAnimation}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span>Email</span>
        </motion.button>
      )}
    </motion.div>
  );
};

// Componente específico para WhatsApp (el más importante para Pöthe)
export const WhatsAppButton = ({ 
  message, 
  variant = 'primary', 
  className = '',
  children 
}) => {
  const contactInfo = {
    number: '5217711234567',
    defaultMessage: 'Hola, me interesa conocer más sobre Pöthe 🍦'
  };

  const openWhatsApp = () => {
    const finalMessage = message || contactInfo.defaultMessage;
    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappUrl = `https://wa.me/${contactInfo.number}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const variants = {
    primary: 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-morado-500 hover:bg-morado-600 text-white',
    outline: 'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
  };

  return (
    <motion.button
      onClick={openWhatsApp}
      className={`
        inline-flex items-center justify-center gap-2 px-6 py-3 
        rounded-xl font-semibold transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
        ${variants[variant]}
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <MessageCircle className="w-5 h-5" />
      {children || 'Escríbenos por WhatsApp'}
    </motion.button>
  );
};

// Componente para botones de redes sociales
export const SocialButtons = ({ className = '' }) => {
  const socialLinks = {
    facebook: 'https://facebook.com/pothe.mx',
    instagram: 'https://instagram.com/pothe.mx'
  };

  const openSocialLink = (platform) => {
    window.open(socialLinks[platform], '_blank');
  };

  return (
    <motion.div 
      className={`flex gap-3 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {/* Facebook */}
      <motion.button
        onClick={() => openSocialLink('facebook')}
        className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full 
                   transition-all duration-300 shadow-lg hover:shadow-xl
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </motion.button>

      {/* Instagram */}
      <motion.button
        onClick={() => openSocialLink('instagram')}
        className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 
                   text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zm5.569 18.306c-.757.756-1.756 1.172-2.828 1.172H9.24c-2.196 0-3.99-1.794-3.99-3.99V9.24c0-2.196 1.794-3.99 3.99-3.99h5.518c2.196 0 3.99 1.794 3.99 3.99v5.518c0 1.072-.416 2.071-1.172 2.828z"/>
          <path d="M12.017 7.729c-2.359 0-4.258 1.899-4.258 4.258s1.899 4.258 4.258 4.258 4.258-1.899 4.258-4.258-1.899-4.258-4.258-4.258zm0 6.991c-1.509 0-2.733-1.224-2.733-2.733s1.224-2.733 2.733-2.733 2.733 1.224 2.733 2.733-1.224 2.733-2.733 2.733z"/>
          <circle cx="16.69" cy="7.347" r="1.029"/>
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default ContactButtons;