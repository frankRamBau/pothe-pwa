import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Award, Leaf } from 'lucide-react'

const Conocenos = () => {
  const valores = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Calidad",
      description: "Ingredientes seleccionados y procesos artesanales que garantizan el mejor sabor."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cercanía",
      description: "Construimos relaciones duraderas con cada cliente y comunidad."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Responsabilidad",
      description: "Comprometidos con prácticas sostenibles y el bienestar de nuestro entorno."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Pet Friendly",
      description: "Sabores especiales para que toda la familia, incluidas las mascotas, disfruten."
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-lufga">
            Helado con historia, sabor con propósito
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Somos una familia de amantes del sabor que cree en compartir alegría.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-morado-500/20 to-salmon-500/20 z-10"></div>
            <img 
              src="/images/brand/team-hero.jpg" 
              alt="Equipo Pöthe"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Nuestra Historia */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-lufga">
            Nuestra Historia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            En Pöthe creemos que un buen helado puede contar una historia. La nuestra empieza en 
            el corazón de México, donde la tradición familiar se encontró con la innovación artesanal. 
            Desde nuestros primeros sabores hasta convertirnos en una marca reconocida, cada helado 
            lleva consigo el amor y la dedicación de quienes creemos que los momentos dulces merecen 
            ser extraordinarios.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Hoy, más de 100 sabores después, seguimos siendo esa familia que comenzó con un sueño: 
            crear helados que no solo refresquen, sino que abracen el alma y creen memorias que perduren.
          </p>
        </motion.div>

        {/* Valores */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center font-lufga">
            Valores que nos guían
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-morado-500 mb-4 flex justify-center">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-lufga">
                  {valor.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {valor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-morado-50 to-morado-100 dark:from-morado-900/20 dark:to-morado-800/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-morado-800 dark:text-morado-300 mb-4 font-lufga">
              Nuestra Misión
            </h3>
            <p className="text-morado-700 dark:text-morado-200 leading-relaxed">
              Llevar momentos de felicidad a las personas a través de helados y nieves artesanales, 
              con sabores auténticos y experiencias memorables que fortalezcan los lazos familiares 
              y comunitarios.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-salmon-50 to-salmon-100 dark:from-salmon-900/20 dark:to-salmon-800/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-salmon-800 dark:text-salmon-300 mb-4 font-lufga">
              Nuestra Visión
            </h3>
            <p className="text-salmon-700 dark:text-salmon-200 leading-relaxed">
              Ser una marca mexicana reconocida por su sabor, calidez y compromiso, expandiendo 
              nuestra pasión a través de distribución, franquicias y eventos, llevando la alegría 
              de Pöthe a cada rincón del país.
            </p>
          </motion.div>
        </div>

        {/* ¿Por qué Pöthe? */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-crema-100 to-crema-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center font-lufga">
            ¿Por qué Pöthe?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
            "Pöthe" nace de la combinación de 'pot' (recipiente) y el espíritu de hogar. 
            Un nombre que refleja nuestro deseo de crear algo diferente, con alma y con identidad. 
            Cada helado es un pequeño recipiente de felicidad, diseñado para ser compartido y disfrutado 
            en los momentos que más importan.
          </p>
        </motion.div>

        {/* Llamado a la acción */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-lufga">
            ¿Quieres ser parte de nuestra historia?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Ya sea como cliente, franquiciatario o colaborador...
            <br />
            <em>¡Hablemos y creemos algo dulce juntos!</em>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-morado-500 to-morado-600 text-white px-8 py-3 rounded-full font-medium hover:from-morado-600 hover:to-morado-700 transition-all duration-300 transform hover:scale-105">
              Contáctanos
            </button>
            <button className="bg-gradient-to-r from-salmon-500 to-salmon-600 text-white px-8 py-3 rounded-full font-medium hover:from-salmon-600 hover:to-salmon-700 transition-all duration-300 transform hover:scale-105">
              Escríbenos por WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Conocenos