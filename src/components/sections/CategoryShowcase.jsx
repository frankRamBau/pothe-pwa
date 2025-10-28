import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { IceCreamCone, SunSnow, Popsicle, Dog, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const CategoryShowcase = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const categories = [
    {
      id: 'helados',
      name: 'Helados',
      count: 49,
      subtitle: 'Gourmet y especiales',
      icon: <IceCreamCone className="w-10 h-10" />,
      image: '/pothe-pwa/images/categoryShowcase/cS-01.webp',
      gradient: 'from-morado-500 to-morado-600',
      link: '/sabores?category=helados'
    },
    {
      id: 'nieves',
      name: 'Nieves',
      count: 24,
      subtitle: 'Frescas y naturales',
      icon: <SunSnow className="w-10 h-10" />,
      image: '/pothe-pwa/images/categoryShowcase/cS-02.webp',
      gradient: 'from-salmon-500 to-salmon-600',
      link: '/sabores?category=nieves'
    },
    {
      id: 'paletas',
      name: 'Paletas',
      count: 22,
      subtitle: 'Sabores únicos',
      icon: <Popsicle className="w-10 h-10" />,
      image: '/pothe-pwa/images/categoryShowcase/cS-03.webp',
      gradient: 'from-morado-600 to-salmon-500',
      link: '/sabores?category=paletas'
    },
    {
      id: 'petfriendly',
      name: 'Pet Friendly',
      count: null,
      subtitle: 'Para tu mejor amigo',
      icon: <Dog className="w-10 h-10" />,
      image: '/pothe-pwa/images/categoryShowcase/cS-04.webp',
      gradient: 'from-morado-500 to-salmon-500',
      link: '/sabores?category=petfriendly'
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

  const handleCategoryClick = (link) => {
    if (!isDragging) {
      window.location.href = link;
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-crema-50 via-white to-crema-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-12"
        >
          <span className="inline-block text-morado-600 dark:text-morado-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Explora Nuestras Categorías
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-lufga">
            ¿Qué se te antoja hoy?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubre nuestra increíble variedad de sabores en cada categoría
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative -mx-4 sm:mx-0">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl text-morado-600 dark:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl text-morado-600 dark:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 items-center justify-center"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-0"
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
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="flex-shrink-0 snap-start w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  onClick={() => handleCategoryClick(category.link)}
                  className="w-full text-left group"
                >
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Imagen de fondo */}
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay con gradiente */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-50 group-hover:opacity-50 transition-opacity duration-300`}></div>
                      
                      {/* Icono flotante */}
                      <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                        <div className={`bg-gradient-to-br ${category.gradient} bg-clip-text text-morado-500`}>
                          {category.icon}
                        </div>
                      </div>

                      {/* Contador de sabores */}
                      {category.count && (
                        <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="font-bold text-gray-900 dark:text-white text-sm">
                            {category.count}+ Sabores
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Contenido */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-lufga">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {category.subtitle}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-morado-600 dark:text-morado-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        <span>Ver todos</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            ¿No sabes qué elegir? Explora todos nuestros sabores
          </p>
          <button
            onClick={() => window.location.href = '/sabores'}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-morado-500 to-salmon-500 hover:from-morado-600 hover:to-salmon-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Ver Catálogo Completo
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryShowcase;