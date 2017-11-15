const CACHE_NAME = 'cache-token';
const staticUrlsToCache = ['/style.css', '/script.js', '/logo.png'];
const shellUrlsToCache = ['/'];
const urlsToCache = [
    ...staticUrlsToCache,
    shellUrlsToCache.map(url => `${url}?shell`),
];

self.addEventListener('install', event =>
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    )
);

self.addEventListener('fetch', event => {
    let request = event.request;

    const shellUrl = shellUrlsToCache.find(url => request.url.endsWith(url));
    if (shellUrl) {
        request = new Request(`${shellUrl}?shell`);
    }

    event.respondWith(
        caches.match(request).then(response => response || fetch(request))
    );
});
