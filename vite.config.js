// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';
// import { VitePWA } from 'vite-plugin-pwa';
// import path from 'path';

// export default defineConfig({
//   base: process.env.NODE_ENV === 'production' ? '/pothe-pwa/' : '/',
//   plugins: [
//     react(),
//     tailwindcss(),
//     VitePWA({
//       registerType: 'autoUpdate',
//       includeAssets: [
//         'favicon.ico',
//         'apple-touch-icon.png',
//         'images/icons/*.png',
//         'images/brand/logo.svg',
//       ],
//       manifest: {
//         name: 'Pöthe - Heladeros desde 1974',
//         short_name: 'Pöthe',
//         description:
//           'Helados, nieves y paletas. Más de 80 sabores únicos para endulzar tus momentos especiales.',
//         version: '1.0.0',
//         theme_color: '#7a2d89',
//         background_color: '#FFFFFF',
//         display: 'standalone',
//         display_override: ['standalone', 'minimal-ui'],
//         orientation: 'portrait-primary',
//         scope: '/pothe-pwa/',
//         start_url: '/pothe-pwa/',
//         lang: 'es-MX',
//         dir: 'ltr',
//         categories: ['food', 'business', 'shopping'],
//         icons: [
//           {
//             src: 'images/icons/icon-192x192.png',
//             sizes: '192x192',
//             type: 'image/png',
//             purpose: 'any maskable',
//           },
//           {
//             src: 'images/icons/icon-512x512.png',
//             sizes: '512x512',
//             type: 'image/png',
//             purpose: 'any maskable',
//           },
//         ],
//         shortcuts: [
//           {
//             name: 'Ver Sabores',
//             short_name: 'Sabores',
//             description:
//               'Explora más de 80 sabores de helados, nieves y paletas',
//             url: '/pothe-pwa/sabores',
//             icons: [
//               {
//                 src: 'images/icons/shortcut-sabores.png',
//                 sizes: '96x96',
//                 type: 'image/png',
//               },
//             ],
//           },
//           {
//             name: 'Eventos',
//             short_name: 'Eventos',
//             description: 'Contrata nuestro servicio para eventos especiales',
//             url: '/pothe-pwa/eventos',
//             icons: [
//               {
//                 src: 'images/icons/shortcut-eventos.png',
//                 sizes: '96x96',
//                 type: 'image/png',
//               },
//             ],
//           },
//           {
//             name: 'Contacto',
//             short_name: 'Contacto',
//             description: 'Ponte en contacto con nosotros',
//             url: '/pothe-pwa/contacto',
//             icons: [
//               {
//                 src: 'images/icons/shortcut-contacto.png',
//                 sizes: '96x96',
//                 type: 'image/png',
//               },
//             ],
//           },
//         ],
//       },
//       workbox: {
//         globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}'],
//         maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
//       },
//       devOptions: {
//         enabled: true,
//         suppressWarnings: true,
//       },
//     }),
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
//   server: {
//     host: true,
//     port: 3000,
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ['react', 'react-dom'],
//           router: ['react-router-dom'],
//           animations: ['framer-motion'],
//           store: ['zustand'],
//         },
//       },
//     },
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/pothe-pwa/' : '/',
  
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'prompt',
      
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.(?:html)$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24, // 24 horas
              },
              networkTimeoutSeconds: 3,
            },
          },
          {
            urlPattern: /^https:\/\/.*\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 días
              },
            },
          },
          {
            urlPattern: /^https:\/\/.*\.(?:js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 días
              },
            },
          },
        ],
        
        skipWaiting: true,
        clientsClaim: true,
      },
      
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'images/icons/*.png',
        'images/brand/logo.svg',
      ],
      
      manifest: {
        name: 'Pöthe - Heladeros desde 1974',
        short_name: 'Pöthe',
        description: 'Helados, nieves y paletas. Más de 80 sabores únicos para endulzar tus momentos especiales.',
        version: '1.0.0',
        theme_color: '#7a2d89',
        background_color: '#FFFFFF',
        display: 'standalone',
        display_override: ['standalone', 'minimal-ui'],
        orientation: 'portrait-primary',
        scope: '/pothe-pwa/',
        start_url: '/pothe-pwa/',
        lang: 'es-MX',
        dir: 'ltr',
        categories: ['food', 'business', 'shopping'],
        icons: [
          {
            src: 'images/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'images/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        shortcuts: [
          {
            name: 'Ver Sabores',
            short_name: 'Sabores',
            description: 'Explora más de 80 sabores de helados, nieves y paletas',
            url: '/pothe-pwa/sabores',
            icons: [
              {
                src: 'images/icons/shortcut-sabores.png',
                sizes: '96x96',
                type: 'image/png',
              },
            ],
          },
          {
            name: 'Eventos',
            short_name: 'Eventos',
            description: 'Contrata nuestro servicio para eventos especiales',
            url: '/pothe-pwa/eventos',
            icons: [
              {
                src: 'images/icons/shortcut-eventos.png',
                sizes: '96x96',
                type: 'image/png',
              },
            ],
          },
          {
            name: 'Contacto',
            short_name: 'Contacto',
            description: 'Ponte en contacto con nosotros',
            url: '/pothe-pwa/contacto',
            icons: [
              {
                src: 'images/icons/shortcut-contacto.png',
                sizes: '96x96',
                type: 'image/png',
              },
            ],
          },
        ],
      },
      
      devOptions: {
        enabled: true,
        suppressWarnings: true,
      },
    }),
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  
  server: {
    host: true,
    port: 3000,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  },
  
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
            return `assets/images/[name].[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name].[hash][extname]`;
          }
          if (/\.css$/i.test(assetInfo.name)) {
            return `assets/css/[name].[hash][extname]`;
          }
          
          return `assets/[name].[hash][extname]`;
        },
        
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
        
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          store: ['zustand'],
        },
      },
    },
    
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    chunkSizeWarningLimit: 1000,
  },
  
  preview: {
    port: 4173,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  }
});