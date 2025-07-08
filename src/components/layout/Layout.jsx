import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import MobileNavigation from './MobileNavigation'
import Footer from './Footer'
import useResponsive from '../../hooks/useResponsive'

const Layout = () => {
  const { isMobile } = useResponsive()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Desktop */}
      {!isMobile && <Header />}
      
      {/* Main Content */}
      <main className={`flex-1 ${isMobile ? 'pb-20' : ''}`}>
        <Outlet />
      </main>
      
      {/* Footer Desktop */}
      {!isMobile && <Footer />}
      
      {/* Mobile Navigation */}
      {isMobile && <MobileNavigation />}
    </div>
  )
}

export default Layout