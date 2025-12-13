const CACHE_NAME = 'mystery-island-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json'
];

// התקנה ושמירת קבצים בסיסיים
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// שליפת קבצים מהזיכרון או מהרשת
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});