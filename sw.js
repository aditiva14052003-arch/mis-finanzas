const CACHE_NAME = 'finanzas-pro-v1';
const urlsToCache = [
  '/mis-finanzas/',
  '/mis-finanzas/index.html',
  '/mis-finanzas/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('/mis-finanzas/index.html'))
  );
});
