self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installed');
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', function(e) {
  // Simple pass-through service worker (no caching for now)
  return fetch(e.request);
});