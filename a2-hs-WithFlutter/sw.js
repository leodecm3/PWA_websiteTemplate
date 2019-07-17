self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/PWA_websiteTemplate/a2-hs-WithFlutter/',
       '/PWA_websiteTemplate/a2-hs-WithFlutter/index.html',
       '/PWA_websiteTemplate/a2-hs-WithFlutter/index.js',
       '/PWA_websiteTemplate/a2-hs-WithFlutter/style.css',
       '/PWA_websiteTemplate/a2-hs-WithFlutter/images/fox1.jpg',
       '/PWA_websiteTemplate/a2-hs-WithFlutter/images/fox2.jpg',
       '/PWA_websiteTemplate/a2-hs-WithFlutter/images/fox3.jpg',
       '/PWA_websiteTemplate/a2-hs-WithFlutter/images/fox4.jpg'
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
