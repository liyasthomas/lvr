const version = "0.6.1";
const cacheName = 'saap-${version}';
self.addEventListener('install', e => {
	const timeStamp = Date.now();
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
        '/',
        '/index.html',
				'/assets/css/style.css',
				'/assets/js/aframe.min.js',
				'/assets/js/aframe-ar.js',
				'/assets/js/aframe-extras.min.js',
				'/assets/js/script.js'
      ])
				.then(() => self.skipWaiting());
		})
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.open(cacheName)
		.then(cache => cache.match(event.request, {
			ignoreSearch: true
		}))
		.then(response => {
			return response || fetch(event.request);
		})
	);
});
