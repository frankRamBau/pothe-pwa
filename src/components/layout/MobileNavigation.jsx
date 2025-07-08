import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  IceCreamCone,
  Coffee,
  CalendarDays,
  MessageCircle,
} from 'lucide-react'

const MobileNavigation = () => {
  const location = useLocation()

  const navItems = [
    {
      name: 'Inicio',
      path: '/',
      icon: Home
    },
    {
      name: 'Sabores',
      path: '/sabores',
      icon: IceCreamCone
    },
    {
      name: 'Delicias',
      path: '/delicias',
      icon: Coffee
    },
    {
      name: 'Eventos',
      path: '/eventos',
      icon: CalendarDays
    },
    {
      name: 'Ayuda',
      path: '/contacto',
      icon: MessageCircle
    }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          const IconComponent = item.icon
          const activeFillColor = 'oklch(90.2% 0.040 320.74)' // Tailwind morado-300 hex

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1 transition-colors duration-200 ${
                isActive
                  ? 'text-morado-600 dark:text-morado-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-morado-600 dark:hover:text-morado-400'
              }`}
            >
              <IconComponent
                className="h-5 w-5 mb-1"
                strokeWidth={isActive ? 2.5 : 1.5}
                fill={isActive ? activeFillColor : 'none'}
              />
              <span className="text-xs font-medium truncate">
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileNavigation