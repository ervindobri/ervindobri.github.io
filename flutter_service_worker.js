'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3176d1c08bac99821c11e24786a5d2d5",
"index.html": "2b219d11e1e6c45dfa8f5eace3942577",
"/": "2b219d11e1e6c45dfa8f5eace3942577",
"main.dart.js": "c7917ad4029d76ebb558208b633a82a0",
"favicon.png": "fd89cceaa15b4dfb625fe37f3d8cf098",
"icons/Icon-192.png": "8338d72fd9928ae9fd82df3af1874985",
"icons/Icon-maskable-192.png": "8338d72fd9928ae9fd82df3af1874985",
"icons/Icon-maskable-512.png": "a2cae429f88b2a1c40e158a1524985d9",
"icons/Icon-512.png": "a2cae429f88b2a1c40e158a1524985d9",
"manifest.json": "54c1326265f2d9d7752b84543f630c4a",
"assets/AssetManifest.json": "a39d6f5bbf2bf84618c9f0f3e84fd67d",
"assets/NOTICES": "e882f7ed2df28bc4f68a26a450fca717",
"assets/FontManifest.json": "8296583ddb9ffefc5830f1d709ad60aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/python.png": "067050f6ecc418ea7a7d2f3557683c8c",
"assets/assets/images/flutter.png": "bda3a4487ce803cbd7e47f6171ac4560",
"assets/assets/images/figma.png": "e24035d141a2cd480c646b42a6ea1b79",
"assets/assets/images/csharp.png": "af3793ff32565b15f099c7a4a04a01c8",
"assets/assets/images/work/myo/main.png": "fbf930333758f147dbcb8b88bd9dcf85",
"assets/assets/images/work/myo/2.png": "f25f696654d3963d03e78d646fa53b9a",
"assets/assets/images/work/myo/1.png": "c78aae6ae7a7319738fbfff4510d8c03",
"assets/assets/images/work/others/sepsi.png": "3620570c99aa4ea87f57e5f1cd9fcf87",
"assets/assets/images/work/others/payment.png": "37f785bd995a39f7e017b4c062c0f76f",
"assets/assets/images/work/others/placeholder.png": "345a9efdf118e4bdf8b5d2068a36948b",
"assets/assets/images/work/others/barber.png": "9fcc507d80411c4239f248b9e5c3a4fd",
"assets/assets/images/work/others/adidas.png": "8aa4933c1c8baeb4494f42251d69b09f",
"assets/assets/images/work/cheesify/main.png": "ca955374ee5f04719b671e4486350e25",
"assets/assets/images/work/cheesify/2.png": "43f0b6f9f3ef7e8eebc1f6f40122b058",
"assets/assets/images/work/cheesify/3.png": "64bbfea5ead997a1e755e73c5d93cc6d",
"assets/assets/images/work/cheesify/1.png": "ac3145c494385c2f92ef60404bf110c8",
"assets/assets/images/work/ballerz/main.png": "f4b15a429a2c8f62f7ea104a0a203590",
"assets/assets/images/work/ballerz/2.png": "34f0b07df17e0afbe7b4c5695dea642f",
"assets/assets/images/work/ballerz/1.png": "f3f451f2518a2e35cc1d6acddff8dba8",
"assets/assets/images/work/barbr/dark.png": "c38de37f70f6ecf2cf112630ac244b37",
"assets/assets/images/work/barbr/main.png": "a3de38cfd0c772b66eff0e0553ecfbbb",
"assets/assets/images/work/barbr/light.png": "bf8275bbb7f29763109ae82130de5624",
"assets/assets/images/devops.png": "fa5eb426dc48ac2187dbb88e9cf793b4",
"assets/assets/blob1.png": "d596a5e6531e65329daa753a32820dce",
"assets/assets/blob2.png": "9a494c00c2d798fe9049efe3aefb8f26",
"assets/assets/blob3.png": "7e3faad964711cf8ded7e059c2e06cce",
"assets/assets/avatar.png": "ce883cc2b271ede3874c1d4ffa05ed3f",
"assets/assets/logo1.png": "9b2aaae43841b9266288a454fbef7e71",
"assets/assets/files/items.json": "d7e802716f88a576fa789847f47008b8",
"assets/assets/files/CV.pdf": "8316c5c2c5fb170041221b9162ee871f",
"assets/assets/pic.jpeg": "9e87ccd16f5ea88ca766f241449dff78",
"assets/assets/fonts/Helvetica-BoldOblique.ttf": "1243b706dbf774edb405221533014853",
"assets/assets/fonts/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"assets/assets/fonts/helvetica-compressed.otf": "bec59aa5a94f833295a4bd1c137906ed",
"assets/assets/fonts/Helvetica-Bold.ttf": "d13db1fed3945c3b8c3293bfcfadb32f",
"assets/assets/fonts/Helvetica-light.ttf": "9a8c18bd1dbe8508bc2525be7e07d0ff",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
