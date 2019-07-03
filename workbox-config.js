module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "offline.html",
    "404.html",
    "**/*.{json,ico,html,js,css}"
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/sw.js",
  "injectionPointRegexp": /(const precacheManifest = )\[\](;)/
};