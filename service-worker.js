const CACHE_NAME = "rijbewijs-a-trainer-v4";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/app.js",
  "./js/data/lessons.js",
  "./js/data/questions.js",
  "./js/data/signs.js",
  "./js/lib/shuffle.js",
  "./js/lib/history.js",
  "./js/views/lessons-view.js",
  "./js/views/exam-setup-view.js",
  "./js/views/exam-view.js",
  "./js/views/results-view.js",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

// Static assets that never change once built — safe to serve cache-first.
const CACHE_FIRST_PATTERN = /\.(png|jpg|jpeg|svg|webp)$/;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const isStaticAsset = CACHE_FIRST_PATTERN.test(new URL(event.request.url).pathname);

  if (isStaticAsset) {
    // Images (icons, sign pictograms, diagrams) never change once built —
    // cache-first is safe and avoids unnecessary network requests.
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        });
      })
    );
    return;
  }

  // App shell (HTML/CSS/JS/data): network-first, so updates are visible
  // immediately on the next load instead of requiring a cache-version bump.
  // Falls back to cache only when actually offline.
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
