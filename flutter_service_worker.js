'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "a2cae429f88b2a1c40e158a1524985d9",
"icons/Icon-maskable-512.png": "a2cae429f88b2a1c40e158a1524985d9",
"icons/Icon-192.png": "8338d72fd9928ae9fd82df3af1874985",
"icons/Icon-maskable-192.png": "8338d72fd9928ae9fd82df3af1874985",
"manifest.json": "54c1326265f2d9d7752b84543f630c4a",
"index.html": "801b50bdd7055b02889cec80ea1e0617",
"/": "801b50bdd7055b02889cec80ea1e0617",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "4b8a947246d3536c1e3ff47dcf833b43",
"assets/assets/icons/bulb-light.png": "71bf5c4b2653b9475b9126525d1dce87",
"assets/assets/icons/workplace.svg": "71e1f15c1e12b5a8eb97b3afbf7f2b84",
"assets/assets/icons/github.svg": "e057cfa95a4593022a80636a5f08081f",
"assets/assets/icons/bulb-dark.png": "f1b5d6ad80fa653bbfc050d90c75b5df",
"assets/assets/icons/book.svg": "600e52a32cce8fa8cbf121cbe89e6a47",
"assets/assets/icons/play-store.svg": "70f852993ae7e2e49cfc0f06ca393c41",
"assets/assets/icons/app-store.svg": "2f0d1cdbc88b82e4961898433b45901e",
"assets/assets/icons/bulb-line.svg": "06fc57871bbf96cf808f4d21e389765f",
"assets/assets/icons/download-cloud.svg": "979f191e73ddb7bd14da62581c85e280",
"assets/assets/icons/map-pin.svg": "f3158b883a0d68c9dfbea8f57f9b891c",
"assets/assets/icons/github.png": "80aa0f335f0e2e666194d7a2882d3c1e",
"assets/assets/icons/coffee.svg": "c1c90d7ce3b6d7a876c1ea90f84c7bac",
"assets/assets/blob1.png": "d596a5e6531e65329daa753a32820dce",
"assets/assets/images/devops.png": "fa5eb426dc48ac2187dbb88e9cf793b4",
"assets/assets/images/me.png": "4b9e520bc5b52a6607485f9a99d2718a",
"assets/assets/images/work/penzmuzeum/main.png": "7cb19015757547487aeb8ebee077df14",
"assets/assets/images/work/penzmuzeum/1.png": "cdc598bf6345627337d8f2455ab5267e",
"assets/assets/images/work/penzmuzeum/2.png": "7a418e8ea8dad2c7fa6494e7f26fd42c",
"assets/assets/images/work/myo/main.png": "fbf930333758f147dbcb8b88bd9dcf85",
"assets/assets/images/work/myo/1.png": "c78aae6ae7a7319738fbfff4510d8c03",
"assets/assets/images/work/myo/2.png": "f25f696654d3963d03e78d646fa53b9a",
"assets/assets/images/work/cheesify/3.png": "64bbfea5ead997a1e755e73c5d93cc6d",
"assets/assets/images/work/cheesify/main.png": "ca955374ee5f04719b671e4486350e25",
"assets/assets/images/work/cheesify/1.png": "ac3145c494385c2f92ef60404bf110c8",
"assets/assets/images/work/cheesify/2.png": "43f0b6f9f3ef7e8eebc1f6f40122b058",
"assets/assets/images/work/others/adidas.png": "8aa4933c1c8baeb4494f42251d69b09f",
"assets/assets/images/work/others/sepsi.png": "3620570c99aa4ea87f57e5f1cd9fcf87",
"assets/assets/images/work/others/barber.png": "9fcc507d80411c4239f248b9e5c3a4fd",
"assets/assets/images/work/others/placeholder.png": "345a9efdf118e4bdf8b5d2068a36948b",
"assets/assets/images/work/others/day94.png": "d92ebb2dff19b686c1d051e6065d7b26",
"assets/assets/images/work/others/day96.png": "b1d04c1a557b260f733a734ec452aa71",
"assets/assets/images/work/others/day75.png": "ce56fea80f0addcd1af6f15eaa4a4a79",
"assets/assets/images/work/others/day73.png": "dbfa76c28777b8784d712de22cef0720",
"assets/assets/images/work/others/day98.png": "0996b4629fd0e229ce063ddf74dd5695",
"assets/assets/images/work/others/payment.png": "37f785bd995a39f7e017b4c062c0f76f",
"assets/assets/images/work/barbr/main.png": "a3de38cfd0c772b66eff0e0553ecfbbb",
"assets/assets/images/work/barbr/dark.png": "c38de37f70f6ecf2cf112630ac244b37",
"assets/assets/images/work/barbr/light.png": "bf8275bbb7f29763109ae82130de5624",
"assets/assets/images/work/ballerz/main.png": "f4b15a429a2c8f62f7ea104a0a203590",
"assets/assets/images/work/ballerz/1.png": "f3f451f2518a2e35cc1d6acddff8dba8",
"assets/assets/images/work/ballerz/2.png": "34f0b07df17e0afbe7b4c5695dea642f",
"assets/assets/images/csharp.png": "af3793ff32565b15f099c7a4a04a01c8",
"assets/assets/images/profile-bg.png": "7fdf66a539cbea873b51eb9387091731",
"assets/assets/images/me.svg": "003b75998c36752e765657a1e16dc1f7",
"assets/assets/images/flutter.png": "bda3a4487ce803cbd7e47f6171ac4560",
"assets/assets/images/figma.png": "e24035d141a2cd480c646b42a6ea1b79",
"assets/assets/images/me-2.png": "01b71b63f1bed0dd2533e76fd704c381",
"assets/assets/images/python.png": "067050f6ecc418ea7a7d2f3557683c8c",
"assets/assets/pic.jpeg": "9e87ccd16f5ea88ca766f241449dff78",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/blob2.png": "9a494c00c2d798fe9049efe3aefb8f26",
"assets/assets/files/myCV.pdf": "4b993755a604bd5dffbf158b1dd7158d",
"assets/assets/files/loading.gif": "7cadbe7481ec903cfd77685fcde87e16",
"assets/assets/files/items.json": "593f0f5533b5b580b820cd0f8a46f73e",
"assets/assets/logo1.png": "9b2aaae43841b9266288a454fbef7e71",
"assets/assets/avatar.png": "ce883cc2b271ede3874c1d4ffa05ed3f",
"assets/assets/animations/fire.riv": "2d9c9dc36fa881c2ebd2d6a696563851",
"assets/assets/blob3.png": "7e3faad964711cf8ded7e059c2e06cce",
"assets/fonts/MaterialIcons-Regular.otf": "943045d8033876190da170de737caba4",
"assets/NOTICES": "bd4ddd5bff04b2162cf39290096e3ed8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9e1159eed6c20d1524e398c2ca45844a",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "c38f916c401abfc903dd3bcf9b7bb221",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1718bbf76272f5f6473dd2d84e5cf2e1",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "001b908ce28c687ee265a06b486341e7",
"assets/FontManifest.json": "f3f0f12dc088ac548ce561943a20df5a",
"assets/AssetManifest.bin": "be3055fc1e3fe296c33e2b3eb9e71f3b",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "fd89cceaa15b4dfb625fe37f3d8cf098",
"flutter_bootstrap.js": "a689fa31541307b24ab8527035bcb784",
"version.json": "3176d1c08bac99821c11e24786a5d2d5",
"main.dart.js": "b8ce4fa8e434d1c4d6a5a4ead3cfe0a6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
