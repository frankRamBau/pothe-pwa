import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold text-morado-400 mb-4 font-lufga">
              pöthe
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Helados artesanales que abrazan el alma. 
              Hechos con amor para momentos que se disfrutan lento.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-salmon-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-salmon-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988c6.62 0 11.987-5.367 11.987-11.988C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.81 3.708 13.659 3.708 12.362c0-1.297.49-2.448 1.297-3.323.875-.807 2.026-1.297 3.323-1.297 1.297 0 2.448.49 3.323 1.297.808.875 1.297 2.026 1.297 3.323 0 1.297-.49 2.448-1.297 3.323-.875.808-2.026 1.297-3.323 1.297zm7.83-9.044h-1.441V6.547h1.441v1.397zm0 0"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/sabores" className="text-gray-300 hover:text-white transition-colors duration-200">Sabores</Link></li>
              <li><Link to="/eventos" className="text-gray-300 hover:text-white transition-colors duration-200">Eventos</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link to="/conocenos" className="text-gray-300 hover:text-white transition-colors duration-200">Conócenos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>📍 Pachuca, Hidalgo</p>
              <p>📍 Cruz Azul, Hidalgo</p>
              <p>🕐 11:00 - 20:00 hrs</p>
              <p>📱 WhatsApp</p>
            </div>
          </div>

          {/* Coverage */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Cobertura</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Hidalgo</li>
              <li>• CDMX</li>
              <li>• Estado de México</li>
              <li>• Puebla</li>
              <li>• Querétaro</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Pöthe. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer