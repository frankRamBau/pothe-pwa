import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, Tag, ArrowRight } from 'lucide-react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos', count: 12 },
    { id: 'recipes', name: 'Recetas y tips', count: 4 },
    { id: 'events', name: 'Eventos', count: 3 },
    { id: 'news', name: 'Novedades', count: 2 },
    { id: 'health', name: 'Salud', count: 2 },
    { id: 'curiosities', name: 'Curiosidades', count: 1 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "5 consejos para conservar tus helados en casa",
      excerpt: "Descubre cómo mantener la textura perfecta de tus helados favoritos por más tiempo.",
      image: "/images/blog/consejos-helados.jpg",
      date: "2024-06-20",
      category: "recipes",
      categoryName: "Recetas y tips",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Nuestros nuevos sabores de temporada",
      excerpt: "Conoce los sabores especiales que hemos preparado para esta temporada.",
      image: "/images/blog/sabores-temporada.jpg",
      date: "2024-06-15",
      category: "news",
      categoryName: "Novedades",
      readTime: "2 min"
    },
    {
      id: 3,
      title: "Cómo organizar el evento perfecto con helados",
      excerpt: "Guía completa para hacer de tu celebración un momento inolvidable.",
      image: "/images/blog/eventos-perfectos.jpg",
      date: "2024-06-10",
      category: "events",
      categoryName: "Eventos",
      readTime: "5 min"
    },
    {
      id: 4,
      title: "Helados sin azúcar: deliciosos y saludables",
      excerpt: "Conoce nuestras opciones saludables sin sacrificar el sabor.",
      image: "/images/blog/sin-azucar.jpg",
      date: "2024-06-05",
      category: "health",
      categoryName: "Salud",
      readTime: "4 min"
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
          <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-morado-500/60 to-salmon-500/60 z-10 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl md:text-4xl font-normal mb-4 font-lufga">
                  El rincón dulce de <span className="font-semibold text-5xl tracking-wide">pöthe</span>
                </h1>
                <p className="text-xl max-w-3xl">
                  Tips, recetas, novedades y todo sobre el mundo del helado y la vida dulce
                </p>
              </div>
            </div>
            <img 
              src="/images/blog/blog-hero.jpg" 
              alt="Blog Pöthe"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Búsqueda y Filtros */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Barra de búsqueda */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-morado-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Filtros por categoría */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-morado-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-morado-100 dark:hover:bg-morado-900/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Lista de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-morado-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.categoryName}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-lufga">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center text-morado-500 hover:text-morado-600 font-medium transition-colors duration-300">
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {filteredPosts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No se encontraron artículos que coincidan con tu búsqueda.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Blog