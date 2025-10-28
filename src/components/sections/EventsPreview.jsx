// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { Calendar, Sparkles, Heart } from 'lucide-react';

// const EventsPreview = () => {
//   const navigate = useNavigate();

//   const handleVerEventos = () => {
//     navigate('/eventos');
//   };

//   return (
//     <section className="py-16 lg:py-24 bg-gradient-to-br from-crema-50 to-crema-100 dark:from-gray-900 dark:to-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* Contenido de texto */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
            
//             {/* Badge superior */}
//             <div className="inline-flex items-center px-4 py-2 bg-morado-100 dark:bg-morado-900 text-morado-700 dark:text-morado-300 rounded-full text-sm font-medium">
//               <Sparkles className="w-4 h-4 mr-2" />
//               Eventos especiales
//             </div>

//             {/* Título principal */}
//             <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white font-lufga leading-tight">
//               ¿Tienes un <span className="text-morado-500">evento?</span>
//             </h2>

//             {/* Descripción emocional */}
//             <div className="space-y-4">
//               <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
//                 "Llevamos la felicidad en frío a donde tú estés."
//               </p>
              
//               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//                 Convertimos tus momentos especiales en experiencias inolvidables. 
//                 Nuestros helados artesanales son el complemento perfecto para cualquier celebración, 
//                 porque creemos que cada evento merece ese toque dulce y único.
//               </p>
//             </div>

//             {/* Lista de tipos de eventos */}
//             <div className="grid grid-cols-2 gap-4 py-6">
//               {[
//                 { icon: Heart, text: 'Bodas', color: 'morado' },
//                 { icon: Sparkles, text: 'XV Años', color: 'salmon' },
//                 { icon: Calendar, text: 'Cumpleaños', color: 'morado' },
//                 { icon: Heart, text: 'Bautizos', color: 'salmon' }
//               ].map((evento) => (
//                 <div
//                   key={evento.text}
//                   className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
//                 >
//                   <div className={`flex-shrink-0 w-8 h-8 bg-${evento.color}-100 dark:bg-${evento.color}-900/30 rounded-full flex items-center justify-center`}>
//                     <evento.icon className={`w-4 h-4 text-${evento.color}-600 dark:text-${evento.color}-400`} />
//                   </div>
//                   <span className="font-medium">{evento.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Botón CTA */}
//             <div className="flex justify-center lg:justify-start">
//               <motion.button
//                 onClick={handleVerEventos}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center px-8 py-4 bg-morado-500 hover:bg-morado-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
//               >
//                 <span>Ver eventos</span>
//                 <svg 
//                   className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     strokeWidth={2} 
//                     d="M17 8l4 4m0 0l-4 4m4-4H3" 
//                   />
//                 </svg>
//               </motion.button>
//             </div>

//             {/* Elementos decorativos adicionales */}
//             <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4 opacity-60">
//               <div className="flex items-center space-x-1">
//                 <div className="w-2 h-2 bg-morado-400 rounded-full"></div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">Personalizado</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <div className="w-2 h-2 bg-salmon-400 rounded-full"></div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">A domicilio</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <div className="w-2 h-2 bg-crema-400 rounded-full"></div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">Profesional</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Imagen del evento */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative overflow-hidden rounded-2xl">
//               <img
//                 src="/pothe-pwa/images/brand/eventos.jpg"
//                 alt="XV años en Queretaro - Servicio de helados gourmet"
//                 className="w-full h-[400px] lg:h-[500px] object-cover"
//                 loading="lazy"
//               />
              
//               {/* Overlay decorativo */}
//               <div className="absolute inset-0 bg-gradient-to-t from-morado-900/20 to-transparent"></div>
              
//               {/* Contenido encima de la imagen */}
//               <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
//                 <div>
//                   <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold drop-shadow-lg">XV años en Queretaro</p>
//                   <p className="text-sm lg:text-base opacity-90 mt-2">(Servicio de helados gourmet)</p>
//                 </div>
//               </div>
              
//               {/* Badge decorativo */}
//               <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
//                 🎉 +500 eventos realizados
//               </div>
//             </div>

//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventsPreview;

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Cake, PartyPopper, ArrowRight } from 'lucide-react';

const EventsPreview = () => {
  const eventTypes = [
    {
      icon: <Cake className="w-6 h-6" />,
      name: 'Cumpleaños',
      description: 'Haz tu celebración inolvidable'
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: 'Eventos Corporativos',
      description: 'Sorprende a tu equipo'
    },
    {
      icon: <PartyPopper className="w-6 h-6" />,
      name: 'Bodas & Quinceaños',
      description: 'Momentos especiales'
    }
  ];

  const handleContactClick = () => {
    // Puedes cambiar esto por el número de WhatsApp real
    const phoneNumber = '5212345678901'; // Reemplazar con número real
    const message = encodeURIComponent('Hola! Me gustaría cotizar helados para un evento');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-12 lg:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-salmon-600 dark:text-salmon-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Eventos Especiales
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-lufga">
              Endulzamos tus{' '}
              <span className="bg-gradient-to-r from-salmon-500 to-morado-600 bg-clip-text text-transparent">
                celebraciones
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Llevamos helados artesanales a tu evento. Servicio personalizado, 
              atención de calidad y los mejores sabores para tus invitados.
            </p>

            {/* Tipos de eventos - Compacto */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {eventTypes.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-crema-50 dark:bg-gray-800 hover:bg-crema-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-salmon-500 to-salmon-600 flex items-center justify-center text-white mb-3">
                    {event.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                    {event.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-salmon-500 to-salmon-600 hover:from-salmon-600 hover:to-salmon-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Cotiza tu Evento
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/eventos'}
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300"
              >
                Ver Más Detalles
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Galería de Fotos - Compacta */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Foto principal - más grande */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]">
                <img
                  src="/pothe-pwa/images/eventsPreview/eP-01.webp"
                  alt="Evento con helados Pothe"
                  className="w-full h-full object-cover object-[center_40%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">Eventos Memorables</p>
                  <p className="text-sm opacity-90">Con los mejores helados</p>
                </div>
              </div>

              {/* Fotos secundarias */}
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square">
                <img
                  src="/pothe-pwa/images/eventsPreview/eP-02.webp"
                  alt="Evento corporativo"
                  className="w-full h-full object-cover object-[right_40%]"
                />
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square">
                <img
                  src="/pothe-pwa/images/eventsPreview/eP-03.webp"
                  alt="Cumpleaños con helados"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Badge flotante */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-salmon-500 to-morado-600 text-white px-6 py-3 rounded-full shadow-xl transform rotate-12">
              <p className="font-bold text-sm">Servicio Premium</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;