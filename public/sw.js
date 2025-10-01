// Service Worker con versioning automático
const CACHE_VERSION = 'v0.0.14'; // ⚠️ ACTUALIZA ESTA VERSIÓN EN CADA DEPLOY
const CACHE_NAME = `pothe-pwa-${CACHE_VERSION}`;
const RUNTIME_CACHE = `pothe-runtime-${CACHE_VERSION}`;

// Archivos que siempre deben estar en cache (críticos)
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/pothe.svg'
];

// Instalar SW y pre-cachear archivos críticos
self.addEventListener('install', (event) => {
  console.log(`🔧 SW v${CACHE_VERSION} instalando...`);
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Pre-cacheando archivos críticos');
        return cache.addAll(CRITICAL_ASSETS);
      })
      .then(() => {
        // Fuerza la activación inmediata del nuevo SW
        return self.skipWaiting();
      })
  );
});

// Activar nuevo SW y limpiar caches antiguos
self.addEventListener('activate', (event) => {
  console.log(`✅ SW v${CACHE_VERSION} activando...`);
  
  event.waitUntil(
    // Limpiar todos los caches antiguos
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              console.log('🗑️ Eliminando cache antiguo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Tomar control de todas las pestañas inmediatamente
        return self.clients.claim();
      })
      .then(() => {
        // Notificar a todas las pestañas que hay una nueva versión
        return self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({
              type: 'SW_UPDATED',
              version: CACHE_VERSION
            });
          });
        });
      })
  );
});

// Interceptar peticiones y aplicar estrategia de cache
self.addEventListener('fetch', (event) => {
  // Solo manejar peticiones GET
  if (event.request.method !== 'GET') return;
  
  const { request } = event;
  const url = new URL(request.url);
  
  // Estrategia Network First para HTML (siempre contenido fresco)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Si la respuesta es válida, cachearla
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(RUNTIME_CACHE)
              .then(cache => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Si falla la red, intentar desde cache
          return caches.match(request)
            .then(cachedResponse => {
              return cachedResponse || new Response('Página no disponible offline', {
                status: 404,
                statusText: 'Not Found'
              });
            });
        })
    );
    return;
  }
  
  // Estrategia Cache First para assets estáticos (CSS, JS, imágenes, fuentes)
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/fonts/') ||
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'image' ||
    request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(request)
            .then(response => {
              // Solo cachear respuestas válidas
              if (response && response.status === 200) {
                const responseClone = response.clone();
                caches.open(RUNTIME_CACHE)
                  .then(cache => cache.put(request, responseClone));
              }
              return response;
            });
        })
    );
    return;
  }
  
  // Para todo lo demás, estrategia Network First
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE)
            .then(cache => cache.put(request, responseClone));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});

// Manejar mensajes desde la aplicación
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log(`🚀 Service Worker v${CACHE_VERSION} cargado`);