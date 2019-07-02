module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "index.html",
    "**/*.{json,ico,html,js,css}"
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/sw.js",
  "injectionPointRegexp": /(const precacheManifest = )\[\](;)/
};