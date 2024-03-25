// service-worker.js

const CACHE_NAME = 'my-ecommerce-app-cache-v1';
const urlsToCache = [
  '/',
  'images/icon-192x192.png',
  'images/icon-192x192.png',
  'camera.jpg',
  'canon eos 12d.png',
  'cart.html',
  'index.html',
  'product.html',
  'shop.html',
  'style.css',
  'success.html',
  'intro-bg_1.jpg',
  'service-worker.js',
  'manifest.json'

  // Add more files to cache as needed
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  // Perform activation steps
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
