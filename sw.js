// Service Worker para PWA Pöthe
const CACHE_NAME = 'pothe-pwa-v1.0.0';
const STATIC_CACHE = 'pothe-static-v1';
const DYNAMIC_CACHE = 'pothe-dynamic-v1';

// Archivos esenciales para cachear
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/images/brand/logo.svg',
  // Agregar otros archivos estáticos críticos
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Cacheando archivos estáticos');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker: Instalación completada');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Error durante la instalación', error);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activando...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // Eliminar caches antiguos
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Eliminando cache antiguo', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activación completada');
        return self.clients.claim();
      })
  );
});

// Interceptar peticiones de red
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo manejar peticiones HTTP/HTTPS
  if (!request.url.startsWith('http')) return;

  // Estrategia: Cache First para archivos estáticos
  if (isStaticResource(request.url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Estrategia: Network First para contenido dinámico
  if (isDynamicContent(request.url)) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Estrategia: Stale While Revalidate para imágenes
  if (isImageRequest(request)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Por defecto: Network First
  event.respondWith(networkFirst(request));
});

// Estrategia Cache First
async function cacheFirst(request) {
  try {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    
    const networkResponse = await fetch(request);
    const cache = await caches.open(STATIC_CACHE);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    console.error('Cache First falló:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Estrategia Network First
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(DYNAMIC_CACHE);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    
    // Página offline personalizada para navegación
    if (request.mode === 'navigate') {
      return caches.match('/offline.html') || new Response(
        getOfflineHTML(),
        { 
          headers: { 'Content-Type': 'text/html' }
        }
      );
    }
    
    return new Response('No disponible offline', { status: 503 });
  }
}

// Estrategia Stale While Revalidate
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cached = await cache.match(request);
  
  const networkRequest = fetch(request).then(response => {
    cache.put(request, response.clone());
    return response;
  });
  
  return cached || networkRequest;
}

// Helpers para identificar tipos de recursos
function isStaticResource(url) {
  return url.includes('/icons/') || 
         url.includes('/manifest.json') ||
         url.includes('.css') ||
         url.includes('.js') ||
         url.endsWith('/');
}

function isDynamicContent(url) {
  return url.includes('/api/') ||
         url.includes('/sabores') ||
         url.includes('/eventos') ||
         url.includes('/blog');
}

function isImageRequest(request) {
  return request.destination === 'image' ||
         request.url.includes('/images/');
}

// HTML offline básico
function getOfflineHTML() {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pöthe - Sin conexión</title>
      <style>
        body {
          font-family: system-ui, -apple-system, sans-serif;
          margin: 0;
          padding: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #fbf2d6, #e76c6a);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .container {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          max-width: 400px;
        }
        h1 { color: #7a2d89; margin-bottom: 1rem; }
        p { color: #666; margin-bottom: 1.5rem; }
        .icon { font-size: 4rem; margin-bottom: 1rem; }
        .retry-btn {
          background: #7a2d89;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 1rem;
        }
        .retry-btn:hover {
          background: #5a1f69;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="icon">🍦</div>
        <h1>¡Ups! Sin conexión</h1>
        <p>Parece que no tienes conexión a internet. Pero no te preocupes, ¡los helados de Pöthe te esperan!</p>
        <button class="retry-btn" onclick="location.reload()">
          Reintentar
        </button>
      </div>
    </body>
    </html>
  `;
}

// Manejar mensajes del cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Notificaciones push (opcional)
self.addEventListener('push', event => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    data: data.data,
    actions: [
      {
        action: 'view',
        title: 'Ver',
        icon: '/icons/icon-72x72.png'
      },
      {
        action: 'close',
        title: 'Cerrar'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Manejar clics en notificaciones
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});