const CACHE_NAME = 'deaddrops-v2';
const ASSETS = [
  './',
  './index.html',
  './request.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/lucide@latest'
];

// Instalace a cachování zdrojů pro offline
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});

// Příjem systémových notifikací z aplikace
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body, icon } = event.data.payload;
    self.registration.showNotification(title, {
      body: body,
      icon: icon || 'https://cdn-icons-png.flaticon.com/512/565/565547.png',
      badge: 'https://cdn-icons-png.flaticon.com/512/565/565547.png',
      vibrate: [100, 50, 100]
    });
  }
});
