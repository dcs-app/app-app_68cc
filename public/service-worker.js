/* DCS-PWA-ADDALL-SAFE — one missing precache URL must not fail SW install */
try{if(self.Cache&&self.Cache.prototype&&self.Cache.prototype.addAll){var _dcsAddAll=self.Cache.prototype.addAll;self.Cache.prototype.addAll=function(u){var self2=this;return Promise.allSettled((u||[]).map(function(x){return self2.add(x).catch(function(){})})).then(function(){})}}}catch(_e){}
/* Simple Service Worker for offline caching of static assets */
const CACHE_NAME = 'haveli-bistro-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/menu.html',
  '/reservation.html',
  '/about.html',
  '/gallery.html',
  '/contact.html',
  '/manifest.json',
  '/icon.svg',
  '/icon.svg',
  // Add any CSS/JS files you generate later
];

/* Install – cache core assets */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

/* Activate – clean old caches */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

/* Fetch – serve from cache, fall back to network */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});