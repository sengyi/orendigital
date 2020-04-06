self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/orendigital/test1/',
       '/orendigital/test1/index.html',
       '/orendigital/test1/index.js',
       '/orendigital/test1/style.css',
       '/orendigital/test1/images/fox1.jpg',
       '/orendigital/test1/images/fox2.jpg',
       '/orendigital/test1/images/fox3.jpg',
       '/orendigital/test1/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
