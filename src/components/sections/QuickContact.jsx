import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const QuickContact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Visítanos',
      value: 'Esquina con Francisco P, Av Revolución, Mariel, 42060 Pachuca de Soto, Hgo.',
      link: 'https://maps.app.goo.gl/yJBhdG41nMja5Zhv8',
      type: 'maps'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Horarios',
      value: 'Lun - Dom 11:00 - 20:00 hrs',
      link: null,
      type: 'info'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Llámanos',
      value: '(55) 1234-5678',
      link: 'tel:+527711234567', // Reemplazar con teléfono real
      type: 'phone'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      value: 'Chatea con nosotros',
      link: 'https://wa.me/527711234567', // Reemplazar con WhatsApp real
      type: 'whatsapp'
    }
  ];

  const handleClick = (item) => {
    if (item.link) {
      if (item.type === 'whatsapp' || item.type === 'maps') {
        window.open(item.link, '_blank');
      } else {
        window.location.href = item.link;
      }
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header compacto */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 font-lufga">
            ¿Tienes dudas?{' '}
            <span className="bg-gradient-to-r from-morado-600 to-salmon-500 bg-clip-text text-transparent">
              Contáctanos
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Estamos aquí para ayudarte
          </p>
        </motion.div>

        {/* Grid de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={item.link ? { y: -4 } : {}}
              className={item.link ? 'cursor-pointer' : ''}
              onClick={() => handleClick(item)}
            >
              <div className={`bg-gradient-to-br from-crema-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 text-center h-full shadow-md ${
                item.link ? 'hover:shadow-lg transition-all duration-300' : ''
              }`}>
                {/* Icono */}
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  item.type === 'whatsapp' 
                    ? 'bg-gradient-to-br from-green-500 to-green-600' 
                    : 'bg-gradient-to-br from-morado-500 to-salmon-500'
                } text-white`}>
                  {item.icon}
                </div>

                {/* Label */}
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">
                  {item.label}
                </h3>

                {/* Value */}
                <p className={`text-sm ${
                  item.link 
                    ? 'text-morado-600 dark:text-morado-400 font-medium' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}>
                  {item.value}
                </p>

                {/* Link indicator */}
                {item.link && (
                  <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Click para {item.type === 'whatsapp' ? 'chatear' : item.type === 'maps' ? 'ver mapa' : 'contactar'}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA adicional opcional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            También puedes seguirnos en nuestras redes sociales
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickContact;