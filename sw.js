const VERSION = "v1";

const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = ["/", "/index.html", "/style.css", "/app.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_STATIC_RESOURCES);
  });
});
