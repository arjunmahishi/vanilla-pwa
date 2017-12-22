let version = 1.0;

const filesToCache = [
	"/",
	"/index.html",
	"js/main.js",
	"css/main.js"
];

self.addEventListener("install", function(event) {
	event.waitUntil(caches.open("vanillaV" + version).then((cache) =>{
		return cache.addAll(filesToCache);
	}));
    console.log("service worker installed...")
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});