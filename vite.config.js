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
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'images/icons/*.png',
        'images/brand/logo.svg',
      ],
      manifest: {
        name: 'Pöthe - Heladeros desde 1974',
        short_name: 'Pöthe',
        description:
          'Helados, nieves y paletas. Más de 80 sabores únicos para endulzar tus momentos especiales.',
        version: '1.0.0',
        theme_color: '#7a2d89',
        background_color: '#fbf2d6',
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
            description:
              'Explora más de 80 sabores de helados, nieves y paletas',
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
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}'],
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
});