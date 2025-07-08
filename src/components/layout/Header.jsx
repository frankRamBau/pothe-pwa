import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../common/SearchBar'
import ThemeToggle from '../common/ThemeToggle'

const Header = () => {
  const location = useLocation()
  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Sabores', path: '/sabores' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Conócenos', path: '/conocenos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contacto' }
  ]

  return (
    <>
      {/* Desktop Header - Funcionalidad completa */}
      <header className="hidden lg:block bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Top */}
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="text-2xl lg:text-4xl font-semibold text-morado-600 dark:text-morado-400 tracking-wide">
                pöthe
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <SearchBar />
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 py-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-morado-600 dark:text-morado-400 border-b-2 border-morado-600 dark:border-morado-400 pb-1'
                    : 'text-gray-700 dark:text-gray-300 hover:text-morado-600 dark:hover:text-morado-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Search - Solo para tablet */}
          <div className="md:block lg:hidden py-3 border-t border-gray-200 dark:border-gray-700">
            <SearchBar />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header