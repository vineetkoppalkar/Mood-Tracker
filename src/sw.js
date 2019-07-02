importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

const precacheManifest = [];

workbox.precaching.precacheAndRoute(precacheManifest);

const dataCacheConfig = {
  cacheName: 'mood-entry-data'
};

workbox.routing.registerRoute(/.*/, workbox.strategies.cacheFirst(dataCacheConfig), 'GET');