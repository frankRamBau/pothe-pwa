// import React from "react";
// import { motion } from "framer-motion";

// // Array con 12 partners de ejemplo
// const partners = [
//   {
//     id: 1,
//     name: "Café de Altura",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Café de Altura - Proveedor de café premium",
//   },
//   {
//     id: 2,
//     name: "Panadería Central",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Panadería Central - Pan artesanal fresco",
//   },
//   {
//     id: 3,
//     name: "Lácteos del Valle",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Lácteos del Valle - Productos lácteos naturales",
//   },
//   {
//     id: 4,
//     name: "Frutas Tropicales",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Frutas Tropicales - Frutas frescas de temporada",
//   },
//   {
//     id: 5,
//     name: "Carnes Premium",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Carnes Premium - Cortes selectos de calidad",
//   },
//   {
//     id: 6,
//     name: "Vegetales Orgánicos",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Vegetales Orgánicos - Verduras cultivadas naturalmente",
//   },
//   {
//     id: 7,
//     name: "Mariscos Frescos",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Mariscos Frescos - Pescados y mariscos del día",
//   },
//   {
//     id: 8,
//     name: "Especias del Mundo",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Especias del Mundo - Condimentos internacionales",
//   },
//   {
//     id: 9,
//     name: "Vinos Selectos",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Vinos Selectos - Vinos premium nacionales",
//   },
//   {
//     id: 10,
//     name: "Postres Artesanales",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Postres Artesanales - Dulces hechos a mano",
//   },
//   {
//     id: 11,
//     name: "Aceites Gourmet",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Aceites Gourmet - Aceites premium para cocinar",
//   },
//   {
//     id: 12,
//     name: "Productos Locales",
//     logo: "/images/brand/brand-placeholder.jpg",
//     alt: "Productos Locales - Ingredientes de la región",
//   },
// ];

// const PartnersMarquee = ({
//   title = "Nuestras marcas aliadas",
//   subtitle = "Trabajamos con los mejores para ofrecerte calidad excepcional",
//   showHeader = true,
//   speed = 60, // Velocidad más lenta para mejor visualización
//   className = "",
// }) => {
//   // Creamos múltiples copias para asegurar loop infinito suave
//   const repeatedPartners = [...partners, ...partners, ...partners];

//   return (
//     <section
//       className={`py-12 lg:py-16 bg-gradient-to-br from-morado-50 to-white ${className}`}
//     >
//       <div className="container mx-auto px-4">
//         {showHeader && (
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
//               {title}
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               {subtitle}
//             </p>
//           </div>
//         )}

//         <div className="relative overflow-hidden">
//           {/* Gradientes para efecto fade */}
//           <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-morado-50 via-morado-50/80 to-transparent z-10 pointer-events-none"></div>
//           <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-morado-50 via-morado-50/80 to-transparent z-10 pointer-events-none"></div>

//           <motion.div
//             className="flex items-center"
//             animate={{
//               x: [0, -33.333333 + "%"], // Mueve exactamente 1/3 para loop perfecto
//             }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: speed,
//                 ease: "linear",
//               },
//             }}
//           >
//             {repeatedPartners.map((partner, idx) => (
//               <div
//                 key={`${partner.id}-${idx}`}
//                 className="flex-shrink-0 mx-6 lg:mx-8 inline-block"
//               >
//                 <div className="flex items-center justify-center h-20 lg:h-24 w-40 lg:w-48 group">
//                   <div className="relative w-full h-full flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4">
//                     <img
//                       src={partner.logo}
//                       alt={partner.alt}
//                       className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
//                       loading="lazy"
//                     />
//                     {/* Overlay con nombre del partner */}
//                     <div className="absolute inset-0 bg-black/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <span className="text-white text-sm font-medium text-center px-2">
//                         {partner.name}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="text-center mt-8 lg:mt-12">
//           <p className="text-sm text-gray-500 font-medium">
//             ¿Quieres ser nuestro aliado estratégico?{" "}
//             <a
//               href="#contacto"
//               className="text-morado-600 hover:text-morado-800 underline decoration-2 underline-offset-2 transition-colors"
//             >
//               Contáctanos
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnersMarquee;

import React from "react";
import { motion } from "framer-motion";

// Array con 12 partners de ejemplo
const partners = [
  {
    id: 1,
    name: "Café de Altura",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Café de Altura - Proveedor de café premium",
  },
  {
    id: 2,
    name: "Panadería Central",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Panadería Central - Pan artesanal fresco",
  },
  {
    id: 3,
    name: "Lácteos del Valle",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Lácteos del Valle - Productos lácteos naturales",
  },
  {
    id: 4,
    name: "Frutas Tropicales",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Frutas Tropicales - Frutas frescas de temporada",
  },
  {
    id: 5,
    name: "Carnes Premium",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Carnes Premium - Cortes selectos de calidad",
  },
  {
    id: 6,
    name: "Vegetales Orgánicos",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Vegetales Orgánicos - Verduras cultivadas naturalmente",
  },
  {
    id: 7,
    name: "Mariscos Frescos",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Mariscos Frescos - Pescados y mariscos del día",
  },
  {
    id: 8,
    name: "Especias del Mundo",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Especias del Mundo - Condimentos internacionales",
  },
  {
    id: 9,
    name: "Vinos Selectos",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Vinos Selectos - Vinos premium nacionales",
  },
  {
    id: 10,
    name: "Postres Artesanales",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Postres Artesanales - Dulces hechos a mano",
  },
  {
    id: 11,
    name: "Aceites Gourmet",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Aceites Gourmet - Aceites premium para cocinar",
  },
  {
    id: 12,
    name: "Productos Locales",
    logo: "/images/brand/brand-placeholder.jpg",
    alt: "Productos Locales - Ingredientes de la región",
  },
];

const PartnersMarquee = ({
  title = "Nuestras marcas aliadas",
  subtitle = "Trabajamos con los mejores para ofrecerte calidad excepcional",
  showHeader = true,
  speed = 50, // Velocidad más lenta para mejor visualización
  className = "",
}) => {
  // Creamos múltiples copias para asegurar loop infinito suave
  const repeatedPartners = [...partners, ...partners, ...partners];

  return (
    <section
      className={`py-12 lg:py-16 bg-gradient-to-br from-morado-100 to-morado-50 ${className}`}
    >
      <div className="container mx-auto px-4">


        <div className="relative overflow-hidden">
          {/* Gradientes para efecto fade */}
          <div className="absolute left-0 top-0 w-32 h-full to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex items-center"
            animate={{
              x: [0, -33.333333 + "%"], // Mueve exactamente 1/3 para loop perfecto
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: speed,
                ease: "linear",
              },
            }}
          >
            {repeatedPartners.map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="flex-shrink-0 mx-6 lg:mx-8 inline-block"
              >
                <div className="flex items-center justify-center h-20 lg:h-24 w-40 lg:w-48 group">
                  <div className="relative w-full h-full flex items-center justify-center hover:shadow-md transition-all duration-300 p-4">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className=""
                      loading="lazy"
                    />
                    {/* Overlay con nombre del partner */}
                    <div className="absolute inset-0 bg-black/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm font-medium text-center px-2">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;