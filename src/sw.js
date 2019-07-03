importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  const precacheManifest = [];
  workbox.precaching.precacheAndRoute(precacheManifest);

  workbox.routing.registerRoute(
    /(.*)\.(?:png|html|gif|jpg)/,
    workbox.strategies.cacheFirst({
      cacheName: 'mood-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );

  // const indexHandler = workbox.strategies.cacheFirst({
  //   cacheName: 'mood-index-cache',
  //   plugins: [
  //     new workbox.expiration.Plugin({
  //       maxEntries: 50,
  //     })
  //   ]
  // });

  // workbox.routing.registerRoute(/(.*)index(.*)\.html/, args => {
  //   return indexHandler.handle(args).then(response => {
  //     if (!response) {
  //       console.log("Caching a response!!!!");
  //       return caches.match('/offline.html');
  //     } else if (response.status === 404) {
  //       return caches.match('/404.html');
  //     }
  //     return response;
  //   });
  // });

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
