import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom'; // <- Importar Link

const NaturalDifferentiator = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Ingredientes 100% Naturales',
      description: 'Elaborados con ingredientes frescos de la más alta calidad, sin aditivos artificiales.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Sin Conservadores',
      description: 'Productos libres de conservadores y colorantes artificiales. Sabor auténtico y natural.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Más de 80 Sabores',
      description: 'Una variedad única de sabores artesanales que no encontrarás en ningún otro lugar.'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagen/Hero */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/pothe-pwa/images/naturalDifferentiator/nD-01.webp"
                alt="Helados artesanales naturales Pothe"
                className="w-full h-full object-cover"
              />
              {/* Badge flotante */}
              <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-morado-600" />
                  <span className="font-bold text-gray-900 dark:text-white">100% Natural</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            {/* Encabezado */}
            <div className="mb-8">
              <span className="inline-block text-morado-600 dark:text-morado-400 font-semibold text-sm uppercase tracking-wider mb-3">
                La Diferencia Pothe
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-lufga">
                Sabor auténtico,{' '}
                <span className="bg-gradient-to-r from-morado-600 to-salmon-500 bg-clip-text text-transparent">
                  100% natural
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                En Pothe, creemos que los mejores helados se hacen con ingredientes reales. 
                Por eso seleccionamos cuidadosamente cada componente para ofrecerte un sabor 
                auténtico y delicioso.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  {/* Icono */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-morado-500 to-morado-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Texto */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA opcional usando Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Link
                to="/sabores"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-morado-500 to-morado-600 hover:from-morado-600 hover:to-morado-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Conoce Todos Nuestros Sabores
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NaturalDifferentiator;