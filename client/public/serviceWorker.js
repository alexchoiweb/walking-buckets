var cacheName = 'bucket-cache-v03';
var filesToCache = [
  '../build/index.html',
  '../build/static/css/main.6b68dd1c.chunk.css',
  '../build/static/css/main.6b68dd1c.chunk.css.map',
  '../build/static/js/1.cf1a253b.chunk.js'
  // '/',
  // '/index.html',
  // '/images/icons/icon-72x72.png',
  // '/images/icons/icon-96x96.png',
  // '/images/icons/icon-128x128.png',
  // '/images/icons/icon-144x144.png',
  // '/images/icons/icon-152x152.png',
  // '/images/icons/icon-192x192.png',
  // '/images/icons/icon-384x384.png',
  // '/images/icons/icon-512x512.png',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

//hi hi note