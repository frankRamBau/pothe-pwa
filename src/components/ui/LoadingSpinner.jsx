// import React from 'react'
// import { motion } from 'framer-motion'

// const LoadingSpinner = ({ isLoading = true }) => {
//   if (!isLoading) return null

//   const letters = ['p', 'ö', 't', 'h', 'e']

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-morado-600 to-morado-800">
//       {/* Fondo con overlay */}
//       <div className="absolute inset-0 bg-morado-700" 
//            style={{ background: 'var(--color-morado-600, #7a2d89)' }} />
      
//       {/* Contenedor principal */}
//       <div className="relative z-10 flex flex-col items-center justify-center">
//         {/* Logo animado */}
//         <div className="flex items-center justify-center mb-8">
//           {letters.map((letter, index) => (
//             <motion.span
//               key={`${letter}-${index}`}
//               className="text-6xl md:text-8xl font-semibold tracking-wider text-white select-none"
//               initial={{ 
//                 opacity: 0, 
//                 y: 50, 
//                 scale: 0.5 
//               }}
//               animate={{ 
//                 opacity: 1, 
//                 y: 0, 
//                 scale: index === 1 ? [1, 1.2, 1] : 1,
//               }}
//               transition={{
//                 delay: index * 0.2,
//                 duration: 0.6,
//                 type: "spring",
//                 damping: 12,
//                 stiffness: 200,
//                 scale: index === 1 ? {
//                   duration: 1.5,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 } : undefined
//               }}
//             >
//               {letter}
//             </motion.span>
//           ))}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default LoadingSpinner


import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin)

const LoadingSpinner = ({ isLoading = true }) => {
  const overlayRef = useRef(null)
  const lettersRef = useRef([])
  const typeRef = useRef(null)

  useEffect(() => {
    if (isLoading) {
      const tl = gsap.timeline()
      lettersRef.current.forEach((el, i) => {
        if (i !== 1) {
          tl.fromTo(
            el,
            { opacity: 0, y: 80, scale: 0.5 },
            { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(3)' },
            i * 0.08
          )
        }
      })
      gsap.fromTo(
        lettersRef.current[1],
        { opacity: 0, y: -30, scale: 1.4 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'bounce.out', delay: 0.8 }
      )

      gsap.to(typeRef.current, {
        duration: 1,
        text: "HELADEROS DESDE 1974",
        ease: "none",
        delay: 1.6,
      })
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        scale: 1,
        duration: 1,
        ease: 'power1.out',
        onComplete: () => overlayRef.current.style.display = 'none'
      })
    }
  }, [isLoading])

  if (!isLoading && !overlayRef.current) return null

  const letters = ['p', 'ö', 't', 'h', 'e']

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-morado-600 to-morado-800"
      style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      <div className="absolute inset-0 bg-morado-700 opacity-80" />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 w-max">
        {/* Animación principal de letras */}
        <div className="flex items-center justify-center">
          {letters.map((ltr, i) => (
            <span
              key={i}
              ref={el => lettersRef.current[i] = el}
              className="text-6xl md:text-8xl font-semibold tracking-wider text-white select-none"
            >
              {ltr}
            </span>
          ))}
        </div>

        <div
          className="text-lg md:text-md font-bold tracking-wider text-salmon-500 select-none hasTypewriter text-center"
          style={{ minWidth: '22ch' }}
        >
          <span ref={typeRef} />
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner