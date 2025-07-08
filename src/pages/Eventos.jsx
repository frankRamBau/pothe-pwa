// import React from 'react'

// const Eventos = () => {
//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-lufga">
//             Eventos
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300">
//             ¡Llevamos la alegría a tu evento!
//           </p>
//         </div>

//         {/* Hero */}
//         <div className="bg-gradient-to-r from-morado-600 to-salmon-500 text-white rounded-lg p-8 mb-12">
//           <h2 className="text-2xl font-bold mb-4">
//             Haz de tu celebración algo inolvidable
//           </h2>
//           <p className="mb-6">
//             Con nuestros carritos de helado y nieves artesanales
//           </p>
//           <button className="bg-white text-morado-600 px-6 py-3 rounded-lg font-semibold hover:bg-crema-100 transition-colors duration-200">
//             Solicitar Cotización
//           </button>
//         </div>

//         {/* Services */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             'Bodas',
//             'XV Años',
//             'Cumpleaños',
//             'Bautizos',
//             'Graduaciones',
//             'Eventos Corporativos'
//           ].map((event) => (
//             <div key={event} className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                 {event}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Servicio especializado para {event.toLowerCase()}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Eventos

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, MessageCircle, Star, Users, Calendar, MapPin, Heart, GraduationCap, Baby, Crown, PartyPopper, TreePine } from 'lucide-react'

const Eventos = () => {
  const [currentSlide, setCurrentSlide] = useState({
    bodas: 0,
    xv: 0,
    cumpleanos: 0,
    corporativos: 0
  })

  // Datos de ejemplo para los sliders
  const eventosData = {
    bodas: [
      { id: 1, title: "Boda Elegante", description: "Carritos vintage para bodas", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop" },
      { id: 2, title: "Boda en Jardín", description: "Helados artesanales al aire libre", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop" },
      { id: 3, title: "Boda Íntima", description: "Servicio personalizado", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop" },
      { id: 4, title: "Boda de Playa", description: "Nieves refrescantes", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop" }
    ],
    xv: [
      { id: 1, title: "XV Años Princesa", description: "Tema rosa y dorado", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop" },
      { id: 2, title: "XV Años Moderno", description: "Estilo contemporáneo", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop" },
      { id: 3, title: "XV Años Vintage", description: "Carritos retro", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop" }
    ],
    cumpleanos: [
      { id: 1, title: "Cumpleaños Infantil", description: "Diversión para los pequeños", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop" },
      { id: 2, title: "Cumpleaños Adulto", description: "Elegancia y sabor", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop" },
      { id: 3, title: "Cumpleaños Temático", description: "Personalizado a tu gusto", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=400&fit=crop" }
    ],
    corporativos: [
      { id: 1, title: "Eventos Corporativos", description: "Profesionalismo y calidad", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop" },
      { id: 2, title: "Inauguraciones", description: "Momentos especiales", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop" },
      { id: 3, title: "Team Building", description: "Uniendo equipos", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop" }
    ]
  }

  const nextSlide = (category) => {
    setCurrentSlide(prev => ({
      ...prev,
      [category]: (prev[category] + 1) % eventosData[category].length
    }))
  }

  const prevSlide = (category) => {
    setCurrentSlide(prev => ({
      ...prev,
      [category]: prev[category] === 0 ? eventosData[category].length - 1 : prev[category] - 1
    }))
  }

  const SliderComponent = ({ category, title, data }) => (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <div className="w-3 h-3 bg-gradient-to-r from-morado-500 to-salmon-500 rounded-full"></div>
          {title}
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={() => prevSlide(category)}
            className="p-2 rounded-full bg-crema-100 dark:bg-gray-700 hover:bg-morado-100 dark:hover:bg-morado-900 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-morado-600 dark:text-gray-300" />
          </button>
          <button 
            onClick={() => nextSlide(category)}
            className="p-2 rounded-full bg-crema-100 dark:bg-gray-700 hover:bg-morado-100 dark:hover:bg-morado-900 transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 text-morado-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide[category] * 100}%)` }}
        >
          {data.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-200 opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-4 gap-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(prev => ({ ...prev, [category]: index }))}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentSlide[category] === index 
                ? 'bg-morado-500 w-6' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  )

  const handleWhatsAppClick = () => {
    const phoneNumber = "521234567890" // Reemplaza con tu número de WhatsApp
    const message = encodeURIComponent("¡Hola! Me interesa contratar sus servicios para un evento. ¿Podrían darme más información?")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-crema-50 via-salmon-50 to-morado-50 dark:from-gray-900 dark:via-morado-900 dark:to-salmon-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
                      <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg mb-6">
            <Star className="w-5 h-5 text-salmon-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Eventos Premium</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-morado-600 via-salmon-600 to-morado-500 bg-clip-text text-transparent mb-6 font-lufga">
            Eventos Únicos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transformamos tus momentos especiales con helados artesanales y un servicio excepcional
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-morado-600 via-salmon-600 to-morado-500 text-white rounded-3xl p-12 mb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Haz de tu celebración algo
              <span className="block text-crema-100 flex items-center justify-center gap-2 mt-2">
                <Star className="w-8 h-8" />
                Inolvidable
                <Star className="w-8 h-8" />
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Con nuestros carritos de helado y nieves artesanales que llevan la alegría a cada momento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Users className="w-5 h-5" />
                <span className="font-medium">+500 Eventos</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Disponible 24/7</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Servicio a Domicilio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Event Categories with Sliders */}
        <div className="space-y-12">
          <SliderComponent 
            category="bodas" 
            title="Bodas" 
            data={eventosData.bodas}
          />
          
          <SliderComponent 
            category="xv" 
            title="XV Años" 
            data={eventosData.xv}
          />
          
          <SliderComponent 
            category="cumpleanos" 
            title="Cumpleaños" 
            data={eventosData.cumpleanos}
          />
          
          <SliderComponent 
            category="corporativos" 
            title="Eventos Corporativos" 
            data={eventosData.corporativos}
          />
        </div>

        {/* Other Services */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Bautizos', icon: Baby, color: 'from-salmon-500 to-salmon-600' },
            { name: 'Graduaciones', icon: GraduationCap, color: 'from-morado-500 to-morado-600' },
            { name: 'Baby Showers', icon: Baby, color: 'from-salmon-400 to-salmon-500' },
            { name: 'Aniversarios', icon: Heart, color: 'from-morado-400 to-morado-500' },
            { name: 'Despedidas', icon: PartyPopper, color: 'from-salmon-600 to-morado-600' },
            { name: 'Picnics', icon: TreePine, color: 'from-morado-600 to-salmon-500' }
          ].map((event) => (
            <div key={event.name} className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <event.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {event.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Servicio especializado para {event.name.toLowerCase()}
              </p>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-salmon-500 to-morado-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ¡Agenda tu Evento Ya!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Contáctanos por WhatsApp y recibe una cotización personalizada en minutos
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-salmon-500 to-morado-500 hover:from-salmon-600 hover:to-morado-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Agendar por WhatsApp
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Respuesta inmediata • Cotización gratuita • Servicio 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eventos