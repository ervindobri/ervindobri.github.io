'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "83bea42cd623f797587eff39d2d5c7f8",
"assets/AssetManifest.bin.json": "a21089fe0d3080fc2c468123c76da027",
"assets/AssetManifest.json": "3bf2e0b569dfab05b5e655d04d83bab2",
"assets/assets/avatar.png": "ce883cc2b271ede3874c1d4ffa05ed3f",
"assets/assets/blob1.png": "d596a5e6531e65329daa753a32820dce",
"assets/assets/blob2.png": "9a494c00c2d798fe9049efe3aefb8f26",
"assets/assets/blob3.png": "7e3faad964711cf8ded7e059c2e06cce",
"assets/assets/files/CV.pdf": "8316c5c2c5fb170041221b9162ee871f",
"assets/assets/files/items.json": "457dbe87ee77316884554247771803ca",
"assets/assets/files/loading.gif": "7cadbe7481ec903cfd77685fcde87e16",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/app-store.png": "ba52f400d9c0cd9c77d1f631f5983803",
"assets/assets/icons/bulb-dark.png": "f1b5d6ad80fa653bbfc050d90c75b5df",
"assets/assets/icons/bulb-light.png": "71bf5c4b2653b9475b9126525d1dce87",
"assets/assets/icons/coffee.svg": "0e331c19586e880a94afcfc7ca471b98",
"assets/assets/icons/github.png": "80aa0f335f0e2e666194d7a2882d3c1e",
"assets/assets/icons/github.svg": "1a95275936b750e205e4a1b2033ec32f",
"assets/assets/icons/play-store.png": "01553b203f83394ab2018907c2925dcb",
"assets/assets/images/csharp.png": "af3793ff32565b15f099c7a4a04a01c8",
"assets/assets/images/devops.png": "fa5eb426dc48ac2187dbb88e9cf793b4",
"assets/assets/images/figma.png": "e24035d141a2cd480c646b42a6ea1b79",
"assets/assets/images/flutter.png": "bda3a4487ce803cbd7e47f6171ac4560",
"assets/assets/images/me-2.png": "e0353812a0736b090c9984a2c9c02345",
"assets/assets/images/me.png": "4b9e520bc5b52a6607485f9a99d2718a",
"assets/assets/images/me.svg": "dfc0efe05cb21d77229313b4f826ff62",
"assets/assets/images/python.png": "067050f6ecc418ea7a7d2f3557683c8c",
"assets/assets/images/work/ballerz/1.png": "f3f451f2518a2e35cc1d6acddff8dba8",
"assets/assets/images/work/ballerz/2.png": "34f0b07df17e0afbe7b4c5695dea642f",
"assets/assets/images/work/ballerz/main.png": "f4b15a429a2c8f62f7ea104a0a203590",
"assets/assets/images/work/barbr/dark.png": "c38de37f70f6ecf2cf112630ac244b37",
"assets/assets/images/work/barbr/light.png": "bf8275bbb7f29763109ae82130de5624",
"assets/assets/images/work/barbr/main.png": "a3de38cfd0c772b66eff0e0553ecfbbb",
"assets/assets/images/work/cheesify/1.png": "ac3145c494385c2f92ef60404bf110c8",
"assets/assets/images/work/cheesify/2.png": "43f0b6f9f3ef7e8eebc1f6f40122b058",
"assets/assets/images/work/cheesify/3.png": "64bbfea5ead997a1e755e73c5d93cc6d",
"assets/assets/images/work/cheesify/main.png": "ca955374ee5f04719b671e4486350e25",
"assets/assets/images/work/myo/1.png": "c78aae6ae7a7319738fbfff4510d8c03",
"assets/assets/images/work/myo/2.png": "f25f696654d3963d03e78d646fa53b9a",
"assets/assets/images/work/myo/main.png": "fbf930333758f147dbcb8b88bd9dcf85",
"assets/assets/images/work/others/adidas.png": "8aa4933c1c8baeb4494f42251d69b09f",
"assets/assets/images/work/others/barber.png": "9fcc507d80411c4239f248b9e5c3a4fd",
"assets/assets/images/work/others/day73.png": "dbfa76c28777b8784d712de22cef0720",
"assets/assets/images/work/others/day75.png": "ce56fea80f0addcd1af6f15eaa4a4a79",
"assets/assets/images/work/others/day94.png": "d92ebb2dff19b686c1d051e6065d7b26",
"assets/assets/images/work/others/day96.png": "b1d04c1a557b260f733a734ec452aa71",
"assets/assets/images/work/others/day98.png": "0996b4629fd0e229ce063ddf74dd5695",
"assets/assets/images/work/others/payment.png": "37f785bd995a39f7e017b4c062c0f76f",
"assets/assets/images/work/others/placeholder.png": "345a9efdf118e4bdf8b5d2068a36948b",
"assets/assets/images/work/others/sepsi.png": "3620570c99aa4ea87f57e5f1cd9fcf87",
"assets/assets/images/work/penzmuzeum/1.png": "cdc598bf6345627337d8f2455ab5267e",
"assets/assets/images/work/penzmuzeum/2.png": "7a418e8ea8dad2c7fa6494e7f26fd42c",
"assets/assets/images/work/penzmuzeum/main.png": "7cb19015757547487aeb8ebee077df14",
"assets/assets/logo1.png": "9b2aaae43841b9266288a454fbef7e71",
"assets/assets/pic.jpeg": "9e87ccd16f5ea88ca766f241449dff78",
"assets/FontManifest.json": "e91dbff0b658c88f9ddacd619a78dc18",
"assets/fonts/MaterialIcons-Regular.otf": "c1e815063ecefeb3df8c2cef48186d4b",
"assets/NOTICES": "2c1ec5d86908a1d63d1ddbfef235c1b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1237f666da6db630c854aabbb7eb5d85",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "fd89cceaa15b4dfb625fe37f3d8cf098",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "8338d72fd9928ae9fd82df3af1874985",
"icons/Icon-512.png": "a2cae429f88b2a1c40e158a1524985d9",
"icons/Icon-maskable-192.png": "8338d72fd9928ae9fd82df3af1874985",
"icons/Icon-maskable-512.png": "a2cae429f88b2a1c40e158a1524985d9",
"index.html": "f3e944395925f955cb8b1ada4afe8ecf",
"/": "f3e944395925f955cb8b1ada4afe8ecf",
"main.dart.js": "04a5b6704ff1fcea8dbe8815781288a5",
"manifest.json": "5b7ff73711b4b6362cf3da42082b9ec3",
"version.json": "3176d1c08bac99821c11e24786a5d2d5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
