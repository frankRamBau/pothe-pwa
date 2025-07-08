import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BrandStory = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/conocenos');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-crema-50 to-crema-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Imagen del local o fundadores */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="../public/images/brand/semblanza.jpg"
                alt="Local Pöthe - Fundadores preparando helados artesanales"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-morado-900/20 to-transparent"></div>
              
              {/* Badge decorativo */}
              <div className="absolute top-4 right-4 bg-morado-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Heladeros desde 1974
              </div>
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-salmon-200 dark:bg-salmon-800 rounded-full opacity-60 blur-xl"></div>
          </motion.div>

          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            
            {/* Badge superior */}
            <div className="inline-flex items-center px-4 py-2 bg-morado-100 dark:bg-morado-900 text-morado-700 dark:text-morado-300 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Nuestra Historia
            </div>

            {/* Título principal */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white font-lufga leading-tight">
              Helados que cuentan
              <span className="text-morado-500 block">
                una historia
              </span>
            </h2>

            {/* Descripción emocional */}
            <div className="space-y-4">
              <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                En Pöthe creemos que un buen helado puede contar una historia. 
                La nuestra empieza en <span className="font-semibold text-morado-600 dark:text-morado-400">una pequeña cocina</span> con 
                el sueño de crear momentos inolvidables.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Cada sabor que creamos lleva consigo la pasión por lo artesanal, 
                el cariño de las manos que lo preparan y la alegría de quienes lo disfrutan. 
                Porque para nosotros, hacer helado no es solo un trabajo, es compartir felicidad.
              </p>
            </div>

            {/* Estadísticas rápidas */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-morado-600 dark:text-morado-400 font-lufga">
                  80+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Sabores únicos
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-salmon-500 dark:text-salmon-400 font-lufga">
                  5
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Años de experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-morado-600 dark:text-morado-400 font-lufga">
                  1K+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Clientes felices
                </div>
              </div>
            </div>

            {/* Botón CTA */}
            <motion.button
              onClick={handleLearnMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-morado-500 hover:bg-morado-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Conoce nuestra historia</span>
              <svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </motion.button>

            {/* Elementos decorativos adicionales */}
            <div className="flex items-center space-x-4 pt-4 opacity-60">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-morado-400 rounded-full"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Artesanal</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-salmon-400 rounded-full"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Familiar</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-crema-400 rounded-full"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Auténtico</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-morado-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-salmon-300 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default BrandStory;