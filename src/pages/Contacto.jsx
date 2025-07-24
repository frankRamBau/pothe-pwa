import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import HeaderMobile from '../components/layout/HeaderMobile'

const Contacto = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  const contactOptions = [
    {
      id: 'eventos',
      title: 'Quiero helado para mi evento',
      description: 'Llevamos el sabor a bodas, cumpleaños, XV años y más.',
      buttonText: 'Pedir información para eventos',
      icon: '🎉',
      color: 'from-morado-500 to-morado-600'
    },
    {
      id: 'distribucion',
      title: 'Tengo un negocio y quiero vender Pöthe',
      description: 'Distribuimos a cafeterías, restaurantes y tiendas.',
      buttonText: 'Quiero distribuir sus productos',
      icon: '🏪',
      color: 'from-salmon-500 to-salmon-600'
    },
    {
      id: 'franquicia',
      title: 'Me interesa abrir una franquicia',
      description: '¿Te imaginas un Pöthe en tu ciudad? Hagámoslo posible.',
      buttonText: 'Hablemos de franquicias',
      icon: '🚀',
      color: 'from-crema-500 to-crema-600'
    },
    {
      id: 'general',
      title: 'Solo quiero preguntar algo rápido',
      description: '¡Aquí estamos para lo que necesites!',
      buttonText: 'Escríbenos por WhatsApp',
      icon: '💬',
      color: 'from-green-500 to-green-600'
    }
  ]

  const sucursales = [
    {
      name: 'Pachuca',
      address: 'Av. Principal 123, Centro, Pachuca, Hidalgo',
      phone: '+52 771 123 4567',
      hours: 'Lun - Dom: 11:00 - 20:00 hrs'
    },
    {
      name: 'Cruz Azul',
      address: 'Blvd. Cruz Azul 456, Cruz Azul, Hidalgo',
      phone: '+52 778 987 6543',
      hours: 'Lun - Dom: 11:00 - 20:00 hrs'
    }
  ]

  return (
    <>
    <HeaderMobile />
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-morado-500/60 to-salmon-500/60 z-10 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-lufga">
                  Platiquemos
                </h1>
                <p className="text-xl max-w-3xl">
                  Estamos aquí para ayudarte, endulzar tu evento o hacer crecer tu negocio.
                  <br />
                  Elige cómo quieres comenzar la conversación:
                </p>
              </div>
            </div>
            <img 
              src="/pothe-pwa/images/contact/contact-hero.jpg" 
              alt="Contacto Pöthe"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Opciones de contacto */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-lufga">
                {option.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {option.description}
              </p>
              <button className={`w-full bg-gradient-to-r ${option.color} text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                {option.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Información de contacto directo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contacto rápido */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-lufga">
              Contacto Directo
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-green-500 mr-4" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">WhatsApp</p>
                  <p className="text-gray-600 dark:text-gray-300">+52 771 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-morado-500 mr-4" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Teléfono</p>
                  <p className="text-gray-600 dark:text-gray-300">771-123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-salmon-500 mr-4" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">hola@pothe.mx</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-crema-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Horarios</p>
                  <p className="text-gray-600 dark:text-gray-300">Todos los días de 11:00 a 20:00 hrs</p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              <p className="font-medium text-gray-900 dark:text-white mb-4">Síguenos en:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-salmon-500 hover:text-salmon-600 transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-morado-500 hover:text-morado-600 transition-colors duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sucursales */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-lufga">
              Nuestras Sucursales
            </h2>
            
            <div className="space-y-6">
              {sucursales.map((sucursal, index) => (
                <div key={index} className="border-l-4 border-morado-500 pl-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {sucursal.name}
                  </h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-sm">{sucursal.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <p className="text-sm">{sucursal.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <p className="text-sm">{sucursal.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contacto