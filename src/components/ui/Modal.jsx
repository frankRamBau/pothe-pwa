import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Button from './Button'

const Modal = ({
  isOpen = false,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = '',
  overlayClassName = '',
  contentClassName = '',
  headerClassName = '',
  bodyClassName = '',
  footer,
  footerClassName = ''
}) => {
  // Cerrar con tecla Escape
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeOnEscape, onClose])

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Configuración de tamaños
  const sizeClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    full: 'max-w-full'
  }

  // Animaciones
  const overlayVariants = {
    hidden: { 
      opacity: 0,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  }

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  }

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose?.()
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className={`modal-portal ${className}`}>
          {/* Overlay */}
          <motion.div
            className={`
              fixed inset-0 z-50 flex items-center justify-center p-4
              bg-black/50 backdrop-blur-sm
              ${overlayClassName}
            `}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleOverlayClick}
          >
            {/* Modal Content */}
            <motion.div
              className={`
                relative w-full ${sizeClasses[size]}
                bg-white dark:bg-gray-900
                rounded-2xl shadow-2xl
                max-h-[90vh] flex flex-col
                border border-gray-200 dark:border-gray-700
                ${contentClassName}
              `}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              {(title || showCloseButton) && (
                <div className={`
                  flex items-center justify-between p-6 pb-4
                  border-b border-gray-200 dark:border-gray-700
                  ${headerClassName}
                `}>
                  {title && (
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-lufga">
                      {title}
                    </h3>
                  )}
                  
                  {showCloseButton && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onClose}
                      className="
                        !p-2 ml-auto
                        text-gray-500 hover:text-gray-700 
                        dark:text-gray-400 dark:hover:text-gray-200
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        rounded-lg transition-colors
                      "
                      aria-label="Cerrar modal"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              )}

              {/* Body */}
              <div className={`
                flex-1 overflow-y-auto p-6
                ${!title && !showCloseButton ? 'pt-6' : ''}
                ${!footer ? 'pb-6' : 'pb-4'}
                ${bodyClassName}
              `}>
                {children}
              </div>

              {/* Footer */}
              {footer && (
                <div className={`
                  flex items-center justify-end gap-3 p-6 pt-4
                  border-t border-gray-200 dark:border-gray-700
                  ${footerClassName}
                `}>
                  {footer}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

// Componente Modal.Confirm para confirmaciones rápidas
const ModalConfirm = ({
  isOpen,
  onClose,
  onConfirm,
  title = '¿Estás seguro?',
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  confirmVariant = 'primary',
  isLoading = false,
  ...props
}) => {
  const handleConfirm = async () => {
    if (onConfirm) {
      await onConfirm()
    }
    onClose?.()
  }

  const footer = (
    <>
      <Button
        variant="outline"
        onClick={onClose}
        disabled={isLoading}
      >
        {cancelText}
      </Button>
      <Button
        variant={confirmVariant}
        onClick={handleConfirm}
        loading={isLoading}
      >
        {confirmText}
      </Button>
    </>
  )

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      footer={footer}
      {...props}
    >
      {message && (
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {message}
        </p>
      )}
    </Modal>
  )
}

// Componente Modal.Product para detalles de productos
const ModalProduct = ({
  isOpen,
  onClose,
  product,
  ...props
}) => {
  if (!product) return null

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      className="product-modal"
      {...props}
    >
      <div className="space-y-6">
        {/* Imagen del producto */}
        <div className="aspect-square w-full max-w-sm mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-morado-50 to-salmon-50 dark:from-morado-900/20 dark:to-salmon-900/20">
          <img
            src={product.image || '/images/products/placeholder.jpg'}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Información del producto */}
        <div className="text-center space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-lufga">
              {product.name}
            </h2>
            <p className="text-morado-600 dark:text-morado-400 font-medium">
              {product.category}
            </p>
          </div>

          {product.description && (
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {product.rating}
              </span>
            </div>
          )}

          {/* Tamaños disponibles */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Tamaños disponibles:
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="
                      px-3 py-1 rounded-full text-sm
                      bg-morado-100 text-morado-800
                      dark:bg-morado-900/30 dark:text-morado-300
                    "
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Etiquetas especiales */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="
                    px-2 py-1 rounded-full text-xs
                    bg-salmon-100 text-salmon-800
                    dark:bg-salmon-900/30 dark:text-salmon-300
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}

// Adjuntar sub-componentes
Modal.Confirm = ModalConfirm
Modal.Product = ModalProduct

export default Modal