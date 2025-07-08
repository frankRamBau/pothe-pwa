import React from 'react'
import { Link } from 'react-router-dom'

const HeaderMobile = () => {
  return (
    <header className="block lg:hidden bg-gradient-to-r from-morado-500 to-morado-800 top-0 left-0 right-0 z-[60]">
      <div className="flex items-center justify-center h-16 px-4">
        <Link to="/" className="flex-shrink-0">
          <div className="text-4xl font-semibold text-white tracking-wide hover:text-morado-100 transition-colors duration-200">
            pöthe
          </div>
        </Link>
      </div>
    </header>
  )
}

export default HeaderMobile