cacheName = 'my-cache';
    const filestoCache = [
      '/index.html',
      '/css/home-style.css',
      '/js/listing.js',
      '/img/pattern2b.png'
	  '/img/logo.png'
    ]; 
    self.addEventListener('install', e => {
      e.waitUntil(
        caches.open(cacheName)
        .then(cache => cache.addAll(filesToCache))
      );
    });