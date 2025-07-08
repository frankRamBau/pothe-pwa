import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, Heart, Share2, ShoppingCart } from 'lucide-react'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedSize, setSelectedSize] = useState('mediano')
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock data - En producción vendría de la store
  const product = {
    id: 1,
    name: "Baileys",
    category: "Helado Gourmet",
    type: "helado",
    rating: 4.8,
    reviews: 234,
    image: "/images/products/baileys.jpg",
    gallery: [
      "/images/products/baileys-1.jpg",
      "/images/products/baileys-2.jpg",
      "/images/products/baileys-3.jpg"
    ],
    description: "Un helado cremoso con el inconfundible sabor del licor Baileys. Perfecto para los amantes de los sabores sofisticados, combina la suavidad de la crema con toques de whisky irlandés y vainilla.",
    nutritionalInfo: [
      { label: "Con alcohol", value: "Solo adultos", icon: "🔞" },
      { label: "Cremoso", value: "Textura premium", icon: "🥛" },
      { label: "Artesanal", value: "Hecho a mano", icon: "👨‍🍳" }
    ],
    sizes: [
      { name: "chico", price: 45, ml: "120ml" },
      { name: "mediano", price: 65, ml: "200ml" },
      { name: "grande", price: 85, ml: "300ml" },
      { name: "medio litro", price: 150, ml: "500ml" },
      { name: "un litro", price: 280, ml: "1000ml" }
    ],
    relatedProducts: [
      { id: 2, name: "Conejo Turín", image: "/images/products/conejo-turin.jpg", rating: 4.7 },
      { id: 3, name: "Trufa", image: "/images/products/trufa.jpg", rating: 4.9 },
      { id: 4, name: "Matcha", image: "/images/products/matcha.jpg", rating: 4.6 }
    ]
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} - Pöthe`,
        text: product.description,
        url: window.location.href
      })
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón de regreso */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-morado-500 hover:text-morado-600 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Regresar
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galería de imágenes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={toggleFavorite}
                className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                  isFavorite 
                    ? 'bg-salmon-500 text-white' 
                    : 'bg-white/80 text-gray-600 hover:bg-white'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            {/* Miniaturas */}
            <div className="flex space-x-4">
              {product.gallery.map((image, index) => (
                <div key={index} className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-morado-500 transition-colors duration-300 cursor-pointer">
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Información del producto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-morado-100 dark:bg-morado-900/30 text-morado-700 dark:text-morado-300 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <button
                  onClick={handleShare}
                  className="p-2 text-gray-500 hover:text-morado-500 transition-colors duration-300"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-lufga">
                {product.name}
              </h1>
              
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600 dark:text-gray-300">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Información nutricional */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 font-lufga">
                Características especiales
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.nutritionalInfo.map((info, index) => (
                  <div key={index} className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-full">
                    <span className="mr-2">{info.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {info.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selector de tamaños */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 font-lufga">
                Tamaños disponibles
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => handleSizeSelect(size.name)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                      selectedSize === size.name
                        ? 'border-morado-500 bg-morado-50 dark:bg-morado-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-morado-300'
                    }`}
                  >
                    <div className="font-medium text-gray-900 dark:text-white capitalize">
                      {size.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {size.ml}
                    </div>
                    <div className="text-lg font-bold text-morado-600 dark:text-morado-400 mt-1">
                      ${size.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Botón de contacto */}
            <button className="w-full bg-gradient-to-r from-morado-500 to-morado-600 text-white px-8 py-4 rounded-xl font-medium hover:from-morado-600 hover:to-morado-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Pedir por WhatsApp
            </button>
          </motion.div>
        </div>

        {/* Productos relacionados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-lufga">
            Si te gustó este, prueba también...
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(`/producto/${relatedProduct.id}`)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                      {relatedProduct.rating}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductDetail