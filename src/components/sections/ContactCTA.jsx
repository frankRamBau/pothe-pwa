import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, Users, Smartphone, Clock } from 'lucide-react';
import ContactButtons from '../common/ContactButtons';

const ContactCTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const backgroundVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-morado-50 via-crema-50 to-salmon-50 dark:from-morado-950 dark:via-morado-900 dark:to-salmon-950" />
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-morado-200/30 dark:bg-morado-700/30 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-salmon-200/30 dark:bg-salmon-700/30 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-crema-300/40 dark:bg-crema-600/40 rounded-full blur-lg" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Ícono decorativo */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <MessageCircle 
                size={64} 
                className="text-morado-500 dark:text-morado-400 md:w-20 md:h-20" 
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"
              />
            </div>
          </motion.div>

          {/* Título principal */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-lufga mb-6"
          >
            <span className="bg-gradient-to-r from-morado-600 to-salmon-500 bg-clip-text text-transparent">
              ¿Tienes dudas?
            </span>
            <br />
            <span className="text-morado-800 dark:text-morado-200">
              ¡Escríbenos por WhatsApp!
            </span>
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Estamos aquí para ayudarte con tus antojos, eventos especiales 
            o cualquier pregunta sobre nuestros deliciosos helados artesanales.
          </motion.p>

          {/* Beneficios rápidos */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
          >
            {[
              { icon: Zap, text: "Respuesta inmediata" },
              { icon: Users, text: "Atención personalizada" },
              { icon: Smartphone, text: "Disponible 24/7" }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200/50 dark:border-gray-700/50"
                >
                  <IconComponent size={18} className="text-morado-500 dark:text-morado-400" />
                  <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                    {benefit.text}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Botón principal de WhatsApp */}
          <motion.div
            variants={itemVariants}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              variants={backgroundVariants}
              whileHover="hover"
              className="inline-block"
            >
              <ContactButtons
                variant="whatsapp"
                size="large"
                message="¡Hola! Me gustaría conocer más sobre sus helados artesanales 🍦"
                className="transform transition-all duration-300 hover:shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Información adicional */}
          {/* <motion.div
            variants={itemVariants}
            className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
          >
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-4">
              También puedes contactarnos por:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <ContactButtons
                variant="phone"
                size="small"
                phone="+52-771-123-4567"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
              <ContactButtons
                variant="email"
                size="small"
                email="hola@pothe.mx"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div> */}

          {/* Horarios de atención */}
          <motion.div
            variants={itemVariants}
            className="mt-6"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full border border-green-200/50 dark:border-green-700/50">
              <Clock size={16} className="text-green-500" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                Abierto ahora • 11:00 - 20:00 hrs
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Efecto de partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 bg-morado-300/40 dark:bg-morado-600/40 rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactCTA;