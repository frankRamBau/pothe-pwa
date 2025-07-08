import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "María González",
    rating: 5,
    comment: "Los helados de Pöthe son simplemente increíbles. El sabor Baileys es mi favorito, ¡tiene el balance perfecto!",
    avatar: null, // Se usará ícono de usuario por defecto
    location: "Pachuca, Hidalgo"
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    rating: 5,
    comment: "Contraté sus servicios para mi boda y fue la mejor decisión. Los invitados no dejaban de hablar del carrito de helados.",
    avatar: null,
    location: "CDMX"
  },
  {
    id: 3,
    name: "Ana Sofía Martín",
    rating: 5,
    comment: "Como amante de los helados artesanales, puedo decir que Pöthe supera todas mis expectativas. ¡El Matcha es espectacular!",
    avatar: null,
    location: "Estado de México"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating 
              ? 'fill-yellow-400 text-yellow-400' 
              : 'text-gray-300 dark:text-gray-600'
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* Header del testimonial */}
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-morado-400 to-morado-600 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>
        
        {/* Info del usuario */}
        <div className="flex-1">
          <h4 className="font-lufga font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {testimonial.location}
          </p>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
      
      {/* Comentario */}
      <blockquote className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
        "{testimonial.comment}"
      </blockquote>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-crema-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-lufga text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que dicen nuestros
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-morado-600 to-salmon-500 ml-2">
              clientes felices
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Cada sonrisa es nuestra mejor recompensa. Aquí algunas historias reales de quienes ya probaron la magia de Pöthe.
          </p>
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-morado-600 to-salmon-500 rounded-2xl p-8 text-white">
            <h3 className="font-lufga text-2xl font-bold mb-4">
              ¿Quieres ser el siguiente en compartir tu experiencia?
            </h3>
            <p className="text-white/90 mb-6">
              Visítanos y descubre por qué nuestros clientes siempre regresan por más.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-morado-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg"
            >
              Encuentra tu sabor favorito
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;