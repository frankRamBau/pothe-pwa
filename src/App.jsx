import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/ui/LoadingSpinner'
import Home from './pages/Home'
import Sabores from './pages/Sabores'
import Eventos from './pages/Eventos'
import Conocenos from './pages/Conocenos'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import Delicias from './pages/Delicias'
import useResponsive from './hooks/useResponsive'

function App() {
  const { isMobile } = useResponsive()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular tiempo de carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500) // 3.5 segundos para ver toda la animación

    return () => clearTimeout(timer)
  }, [])

  // Mostrar loading mientras carga
  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />
  }

  return (
    <div className="App min-h-screen bg-crema-50 dark:bg-gray-900 transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sabores" element={<Sabores />} />
          {isMobile && <Route path="delicias" element={<Delicias />} />}
          <Route path="eventos" element={<Eventos />} />
          <Route path="conocenos" element={<Conocenos />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App