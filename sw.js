/* Offline cache for 兒歌彈彈樂 Tap Tap Music for Toddlers. Bump CACHE when index.html or any asset changes. */
var CACHE = 'tap-tunes-v10';
var ASSETS = ['./', './index.html', './manifest.json', './icon.svg', './icon-180.png', './icon-512.png', './hooray.wav', './well-done.mp3', './bye-once.mp3',
  './pick-bunny-yue.mp3', './pick-bunny-en.mp3', './pick-row-yue.mp3', './pick-row-en.mp3', './pick-twinkle-yue.mp3', './pick-twinkle-en.mp3',
  './pick-london-yue.mp3', './pick-london-en.mp3', './pick-sakura-yue.mp3', './pick-sakura-en.mp3'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      return hit || fetch(e.request).catch(function () { return caches.match('./index.html'); });
    })
  );
});
