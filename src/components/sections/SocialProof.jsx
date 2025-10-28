// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// const SocialProof = () => {
//   const carouselRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStartX, setDragStartX] = useState(0);

//   const stats = [
//     {
//       number: '80+',
//       label: 'Sabores Únicos',
//       icon: '🍦'
//     },
//     {
//       number: '100%',
//       label: 'Natural',
//       icon: '🌱'
//     },
//     {
//       number: '100+',
//       label: 'Eventos Realizados',
//       icon: '🎉'
//     },
//     {
//       number: '10K+',
//       label: 'Clientes Felices',
//       icon: '😊'
//     }
//   ];

//   const testimonials = [
//     {
//       id: 1,
//       name: 'María González',
//       role: 'Evento Corporativo',
//       image: 'https://i.pravatar.cc/150?img=1',
//       text: 'Los helados de Pothe hicieron de nuestro evento corporativo todo un éxito. La calidad y el sabor son incomparables.',
//       rating: 5
//     },
//     {
//       id: 2,
//       name: 'Carlos Ramírez',
//       role: 'Cumpleaños',
//       image: 'https://i.pravatar.cc/150?img=3',
//       text: 'Increíble variedad de sabores. Mis invitados no dejaban de hablar de lo deliciosos que estaban los helados.',
//       rating: 5
//     },
//     {
//       id: 3,
//       name: 'Ana Martínez',
//       role: 'Boda',
//       image: 'https://i.pravatar.cc/150?img=5',
//       text: 'Perfectos para nuestra boda. El servicio fue impecable y los sabores naturales sorprendieron a todos.',
//       rating: 5
//     }
//   ];

//   const scroll = (direction) => {
//     if (!carouselRef.current) return;
//     const scrollAmount = 350;
    
//     if (direction === 'left') {
//       carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//     } else {
//       carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   const handleTouchStart = (e) => {
//     setIsDragging(false);
//     setDragStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     const currentX = e.touches[0].clientX;
//     const diff = Math.abs(currentX - dragStartX);
    
//     if (diff > 5) {
//       setIsDragging(true);
//     }
//   };

//   const handleTouchEnd = () => {
//     setTimeout(() => setIsDragging(false), 100);
//   };

//   const handleMouseDown = (e) => {
//     setIsDragging(false);
//     setDragStartX(e.clientX);
//   };

//   const handleMouseMove = (e) => {
//     if (e.buttons === 1) {
//       const diff = Math.abs(e.clientX - dragStartX);
//       if (diff > 5) {
//         setIsDragging(true);
//       }
//     }
//   };

//   const handleMouseUp = () => {
//     setTimeout(() => setIsDragging(false), 100);
//   };

//   return (
//     <section className="py-16 lg:py-20 bg-gradient-to-br from-morado-50 via-crema-50 to-salmon-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <span className="inline-block text-morado-600 dark:text-morado-400 font-semibold text-sm uppercase tracking-wider mb-3">
//             Lo Que Dicen Nuestros Clientes
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-lufga">
//             Experiencias que{' '}
//             <span className="bg-gradient-to-r from-morado-600 to-salmon-500 bg-clip-text text-transparent">
//               nos inspiran
//             </span>
//           </h2>
//         </motion.div>

//         {/* Stats Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="text-4xl mb-3">{stat.icon}</div>
//               <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 font-lufga">
//                 {stat.number}
//               </div>
//               <div className="text-sm text-gray-600 dark:text-gray-300">
//                 {stat.label}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Testimonials Carousel */}
//         <div className="relative -mx-4 sm:mx-0">
//           {/* Navigation Buttons - Desktop */}
//           <button
//             onClick={() => scroll('left')}
//             className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl text-morado-600 dark:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 items-center justify-center"
//             aria-label="Anterior testimonio"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={() => scroll('right')}
//             className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl text-morado-600 dark:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 items-center justify-center"
//             aria-label="Siguiente testimonio"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* Carousel */}
//           <div
//             ref={carouselRef}
//             className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-0 pb-2"
//             style={{
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//               WebkitOverflowScrolling: 'touch'
//             }}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.id}
//                 className="flex-shrink-0 snap-start w-[300px] sm:w-[360px] lg:w-[400px]"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               >
//                 <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
//                   {/* Quote Icon */}
//                   <div className="w-12 h-12 bg-gradient-to-br from-morado-500 to-salmon-500 rounded-full flex items-center justify-center mb-4">
//                     <Quote className="w-6 h-6 text-white" />
//                   </div>

//                   {/* Rating */}
//                   <div className="flex gap-1 mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>

//                   {/* Testimonial Text */}
//                   <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
//                     "{testimonial.text}"
//                   </p>

//                   {/* Author */}
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-12 h-12 rounded-full object-cover"
//                     />
//                     <div>
//                       <p className="font-bold text-gray-900 dark:text-white">
//                         {testimonial.name}
//                       </p>
//                       <p className="text-sm text-gray-600 dark:text-gray-400">
//                         {testimonial.role}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialProof;

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Instagram, Facebook } from 'lucide-react';

const SocialProof = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Detector de dispositivo móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Comprobar al montar
    checkIsMobile();
    
    // Listener para cambios de tamaño
    window.addEventListener('resize', checkIsMobile);
    
    // Limpiar al desmontar
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Fetch testimonios de redes sociales
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        
        // Simulación de carga - en producción, esto sería una llamada real a API
        // de Instagram o Facebook para obtener testimonios reales
        
        // Ejemplo de estructura para testimonios reales
        const realTestimonials = [
          {
            id: 1,
            name: 'María González',
            role: 'Evento Corporativo',
            image: 'https://i.pravatar.cc/150?img=1',
            text: 'Los helados de Pothe hicieron de nuestro evento corporativo todo un éxito. La calidad y el sabor son incomparables.',
            rating: 5,
            source: 'instagram',
            sourceId: 'post_123456'
          },
          {
            id: 2,
            name: 'Carlos Ramírez',
            role: 'Cumpleaños',
            image: 'https://i.pravatar.cc/150?img=3',
            text: 'Increíble variedad de sabores. Mis invitados no dejaban de hablar de lo deliciosos que estaban los helados.',
            rating: 5,
            source: 'facebook',
            sourceId: 'comment_789012'
          },
          {
            id: 3,
            name: 'Ana Martínez',
            role: 'Boda',
            image: 'https://i.pravatar.cc/150?img=5',
            text: 'Perfectos para nuestra boda. El servicio fue impecable y los sabores naturales sorprendieron a todos.',
            rating: 5,
            source: 'instagram',
            sourceId: 'post_345678'
          }
        ];

        // Simular tiempo de carga para una experiencia más real
        setTimeout(() => {
          setTestimonials(realTestimonials);
          setIsLoading(false);
        }, 300);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('No se pudieron cargar los testimonios');
        setIsLoading(false);
        
        // Cargar testimonios de respaldo en caso de error
        setTestimonials([
          {
            id: 1,
            name: 'María González',
            role: 'Evento Corporativo',
            image: 'https://i.pravatar.cc/150?img=1',
            text: 'Los helados de Pothe hicieron de nuestro evento corporativo todo un éxito. La calidad y el sabor son incomparables.',
            rating: 5
          },
          {
            id: 2,
            name: 'Carlos Ramírez',
            role: 'Cumpleaños',
            image: 'https://i.pravatar.cc/150?img=3',
            text: 'Increíble variedad de sabores. Mis invitados no dejaban de hablar de lo deliciosos que estaban los helados.',
            rating: 5
          },
          {
            id: 3,
            name: 'Ana Martínez',
            role: 'Boda',
            image: 'https://i.pravatar.cc/150?img=5',
            text: 'Perfectos para nuestra boda. El servicio fue impecable y los sabores naturales sorprendieron a todos.',
            rating: 5
          }
        ]);
      }
    };

    fetchTestimonials();
  }, []);

  const stats = [
    {
      number: '80+',
      label: 'Sabores Únicos',
      icon: '🍦'
    },
    {
      number: '100%',
      label: 'Natural',
      icon: '🌱'
    },
    {
      number: '100+',
      label: 'Eventos Realizados',
      icon: '🎉'
    },
    {
      number: '10K+',
      label: 'Clientes Felices',
      icon: '😊'
    }
  ];

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = 350;
    
    if (direction === 'left') {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(false);
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = Math.abs(currentX - dragStartX);
    
    if (diff > 5) {
      setIsDragging(true);
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsDragging(false), 100);
  };

  const handleMouseDown = (e) => {
    setIsDragging(false);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      const diff = Math.abs(e.clientX - dragStartX);
      if (diff > 5) {
        setIsDragging(true);
      }
    }
  };

  const handleMouseUp = () => {
    setTimeout(() => setIsDragging(false), 100);
  };

  // Función para aplicar propiedades de animación condicionalmente
  const getAnimationProps = (animationProps) => {
    // En móvil, no aplicamos animaciones (objeto vacío)
    if (isMobile) return {};
    // En tablet/desktop, aplicamos las propiedades de animación
    return animationProps;
  };

  // Componentes condicionales para móvil vs tablet/desktop
  const HeaderComponent = isMobile ? 'div' : motion.div;
  const StatsContainer = isMobile ? 'div' : motion.div;
  const StatItem = isMobile ? 'div' : motion.div;
  const TestimonialItem = isMobile ? 'div' : motion.div;

  // Componente para mostrar la fuente del testimonio (Instagram o Facebook)
  const TestimonialSource = ({ source, sourceId }) => {
    if (!source) return null;
    
    return (
      <div className="flex items-center mt-2">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          vía {source === 'instagram' ? 'Instagram' : 'Facebook'}
        </span>
        {source === 'instagram' && (
          <Instagram className="w-4 h-4 ml-1 text-pink-500" />
        )}
        {source === 'facebook' && (
          <Facebook className="w-4 h-4 ml-1 text-blue-600" />
        )}
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-morado-50 via-crema-50 to-salmon-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <HeaderComponent
          className="text-center mb-12"
          {...getAnimationProps({
            initial: { opacity: 0, y: -20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 }
          })}
        >
          <span className="inline-block text-morado-600 dark:text-morado-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Lo Que Dicen Nuestros Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-lufga">
            Experiencias que{' '}
            <span className="bg-gradient-to-r from-morado-600 to-salmon-500 bg-clip-text text-transparent">
              nos inspiran
            </span>
          </h2>
        </HeaderComponent>

        {/* Stats Grid */}
        <StatsContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16"
          {...getAnimationProps({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 }
          })}
        >
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              {...getAnimationProps({
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: index * 0.1 }
              })}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 font-lufga">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </StatItem>
          ))}
        </StatsContainer>

        {/* Testimonials Carousel */}
        <div className="relative -mx-4 sm:mx-0">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl text-morado-600 dark:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 items-center justify-center"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl text-morado-600 dark:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 items-center justify-center"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-0 pb-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {isLoading ? (
              // Placeholders de carga
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={`loading-${index}`}
                  className="flex-shrink-0 snap-start w-[300px] sm:w-[360px] lg:w-[400px] bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg h-full animate-pulse"
                >
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full mb-4"></div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    ))}
                  </div>
                  <div className="h-24 bg-gray-300 dark:bg-gray-700 rounded mb-6"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    <div>
                      <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : error ? (
              <div className="flex-shrink-0 snap-start w-full text-center p-6">
                <p className="text-red-500 dark:text-red-400">{error}</p>
              </div>
            ) : (
              testimonials.map((testimonial, index) => (
                <TestimonialItem
                  key={testimonial.id}
                  className="flex-shrink-0 snap-start w-[300px] sm:w-[360px] lg:w-[400px]"
                  {...getAnimationProps({
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.3 },
                    transition: { delay: index * 0.1, duration: 0.5 }
                  })}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-morado-500 to-salmon-500 rounded-full flex items-center justify-center mb-4">
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                        
                        {/* Mostrar fuente del testimonio si existe */}
                        {testimonial.source && (
                          <TestimonialSource 
                            source={testimonial.source} 
                            sourceId={testimonial.sourceId} 
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </TestimonialItem>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;