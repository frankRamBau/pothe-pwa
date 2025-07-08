// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   return (
//     <section className="relative overflow-hidden py-20 lg:py-32">
//       {/* Background Animation */}
//       <div className="absolute inset-0 bg-gradient-to-r from-morado-100 to-salmon-100 dark:from-morado-900/20 dark:to-salmon-900/20">
//         <motion.div
//           animate={{
//             background: [
//               'radial-gradient(circle at 20% 50%, rgba(122, 45, 137, 0.1) 0%, transparent 50%)',
//               'radial-gradient(circle at 80% 50%, rgba(231, 108, 106, 0.1) 0%, transparent 50%)',
//               'radial-gradient(circle at 40% 50%, rgba(122, 45, 137, 0.1) 0%, transparent 50%)'
//             ]
//           }}
//           transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
//           className="absolute inset-0"
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center">
//           <motion.h1
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl lg:text-7xl font-lufga font-bold text-morado-600 dark:text-morado-400 mb-6"
//           >
//             Helados que te
//             <motion.span
//               animate={{ color: ['#7a2d89', '#e76c6a', '#7a2d89'] }}
//               transition={{ duration: 3, repeat: Infinity }}
//               className="block"
//             >
//               abrazan el alma
//             </motion.span>
//           </motion.h1>

//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light italic"
//           >
//             Hechos con amor, para momentos que se disfrutan lento.
//           </motion.p>

//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <Link to="/sabores">
//               <motion.button
//                 type="button"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-gradient-to-r from-morado-500 to-morado-600 text-white px-8 py-4 rounded-full font-semibold text-lg cursor-pointer"
//               >
//                 Ver Sabores
//               </motion.button>
//             </Link>

//             <Link to="/eventos">
//               <motion.button
//                 type="button"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-salmon-500 text-salmon-500 dark:text-salmon-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-salmon-500 hover:text-white transition-all duration-300 cursor-pointer"
//               >
//                 Eventos Especiales
//               </motion.button>
//             </Link>
//           </motion.div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <motion.div
//         animate={{ y: [0, -20, 0] }}
//         transition={{ duration: 3, repeat: Infinity }}
//         className="absolute top-20 left-10 w-16 h-16 bg-salmon-200 dark:bg-salmon-800 rounded-full opacity-50"
//       />
//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="absolute bottom-20 right-10 w-12 h-12 bg-morado-200 dark:bg-morado-800 rounded-full opacity-50"
//       />
//     </section>
//   );
// };

// export default HeroSection

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  // Slides con imágenes promocionales para helados
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=800&h=400&fit=crop',
      title: 'Sabores de Temporada',
      subtitle: 'Nuevos helados artesanales',
      description: 'Descubre nuestros sabores únicos hechos con ingredientes frescos',
      buttonText: 'Ver Sabores',
      buttonLink: '/sabores',
      alt: 'helados-temporada'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=400&fit=crop',
      title: 'Eventos Especiales',
      subtitle: 'Celebra con nosotros',
      description: 'Organizamos tu evento con los mejores helados artesanales',
      buttonText: 'Reservar Evento',
      buttonLink: '/eventos',
      alt: 'eventos-especiales'
    }
    // {
    //   id: 3,
    //   image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=400&fit=crop',
    //   title: 'Promociones',
    //   subtitle: '2x1 en helados familiares',
    //   description: 'Disfruta más pagando menos, válido todo el mes',
    //   buttonText: 'Ver Ofertas',
    //   buttonLink: '/promociones',
    //   alt: 'promociones-helados'
    // }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play funcionalidad
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden h-[500px] lg:h-[600px]">
      {/* Slider Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-salmon-400 font-semibold text-lg mb-2"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.div>

                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl lg:text-6xl font-lufga font-bold text-white mb-4"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-gray-200 mb-8 max-w-lg"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = slides[currentSlide].buttonLink}
                      className="bg-gradient-to-r from-morado-500 to-morado-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      {slides[currentSlide].buttonText}
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <motion.div
            className="h-full bg-gradient-to-r from-morado-500 to-salmon-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            key={currentSlide}
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;