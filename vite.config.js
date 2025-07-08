import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/pothe-pwa/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}'],
      },
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'images/icons/*.png',
        'images/brand/logo.svg',
      ],
      manifest: {
        name: 'pöthe - Heladeros desde 1974',
        short_name: 'pöthe',
        description: 'Helados, nieves y paletas. Más de 80 sabores únicos para endulzar tus momentos especiales.',
        version: '1.0.0',
        theme_color: '#7a2d89',
        background_color: '#fbf2d6',
        display: 'standalone',
        display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
        orientation: 'portrait-primary',
        scope: '/pothe-pwa/',
        start_url: '/pothe-pwa/',
        lang: 'es-MX',
        dir: 'ltr',
        categories: ['food', 'business', 'shopping'],
        screenshots: [
          {
            src: 'images/screenshots/desktop-home-tres.png',
            sizes: '1920x1080',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Página principal en escritorio',
          },
          {
            src: 'images/screenshots/desktop-home-dos.png',
            sizes: '1440x900',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Página principal en escritorio',
          },
          {
            src: 'images/screenshots/desktop-home.png',
            sizes: '1280x720',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Página principal en escritorio',
          },
          {
            src: 'images/screenshots/mobile-home-dos.png',
            sizes: '375x812',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Página principal en móvil',
          },
          {
            src: 'images/screenshots/mobile-home-uno.png',
            sizes: '375x812',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Página principal en móvil',
          },
        ],
        icons: [
          {
            src: 'images/icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'images/icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'images/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'images/icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'images/icons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'images/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'images/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'images/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable any',
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
        related_applications: [],
        prefer_related_applications: false,
        share_target: {
          action: '/pothe-pwa/',
          method: 'GET',
          params: {
            title: 'title',
            text: 'text',
            url: 'url',
          },
        },
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          store: ['zustand'],
        },
      },
    },
  },
})