importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) {
	console.log("Yay! Workbox is loaded 🎉");
} else {
	console.log("Boo! Workbox didn't load 😬");
}

workbox.routing.registerRoute(
	new RegExp('.*\.js'),
	workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
	// Cache CSS files
	/.*\.css/,
	// Use cache but update in the background ASAP
	workbox.strategies.staleWhileRevalidate({
		// Use a custom cache name
		cacheName: 'css-cache',
	})
);

workbox.routing.registerRoute(
	// Cache image files
	/.*\.(?:png|jpg|jpeg|svg|gif)/,
	// Use the cache if it's available
	workbox.strategies.cacheFirst({
		// Use a custom cache name
		cacheName: 'image-cache',
		plugins: [
      new workbox.expiration.Plugin({
				// Cache only 20 images
				maxEntries: 20,
				// Cache for a maximum of a week
				maxAgeSeconds: 7 * 24 * 60 * 60,
			})
    ],
	})
);

workbox.precaching.precacheAndRoute([
    '/lvr/assets/css/style.min.css',
    '/lvr/assets/js/script.min.js',
	{
		url: '/lvr/index.html',
		revision: '383676'
	},
]);

//This is the "Offline page" service worker

//Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener('install', function (event) {
	var offlinePage = new Request('index.html');
	event.waitUntil(
		fetch(offlinePage).then(function (response) {
			return caches.open('pwabuilder-offline').then(function (cache) {
				console.log('Cached offline page during Install ' + response.url);
				return cache.put(offlinePage, response);
			});
		}));
});

//If any fetch fails, it will show the offline page.
//Maybe this should be limited to HTML documents?
self.addEventListener('fetch', function (event) {
	event.respondWith(
		fetch(event.request).catch(function (error) {
			console.error('Network request Failed. Serving offline page ' + error);
			return caches.open('pwabuilder-offline').then(function (cache) {
				return cache.match('index.html');
			});
		}));
});

//This is a event that can be fired from your page to tell the SW to update the offline page
self.addEventListener('refreshOffline', function (response) {
	return caches.open('pwabuilder-offline').then(function (cache) {
		console.log('Offline page updated from refreshOffline event: ' + response.url);
		return cache.put(offlinePage, response);
	});
});
