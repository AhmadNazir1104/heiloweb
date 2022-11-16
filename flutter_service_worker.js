'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9c1abf097c01d37ed95dec0651526e49",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Regular.ttf": "731a28a413d642522667a2de8681ff35",
"assets/assets/png/26170505_879427062237691_7434598743530738532_o%25201.png": "f1e7f54d6a92bbeb2c4f179d3e078abc",
"assets/assets/png/admin_contact.png": "b2e8542dae5dd7699fcab2d136eb125a",
"assets/assets/png/admin_financial.png": "043c824885574712eeaf282ebb971d73",
"assets/assets/png/admin_paymentrequest.png": "67efcdd652d3d08b3f0fa8e7dfe46aaf",
"assets/assets/png/admin_student.png": "ecaa64405238854ef06b7052e5cca8dc",
"assets/assets/png/avatar%25201.png": "91ca3f8aba79a3df110f2abf995e6ae3",
"assets/assets/png/b1.png": "4da5cfebeb83eeebe3d364b2cbfb8200",
"assets/assets/png/b11.png": "ed02ed0cd96a62fc569d9739c18b7b06",
"assets/assets/png/bg1.png": "52bb3eecaf857ebb2b922d691c713a01",
"assets/assets/png/bg2.png": "dc7cd7a673dcb59cbe942fe1c65ab565",
"assets/assets/png/bg3.png": "2bf9596577e1ef204fdbd4a180ac738a",
"assets/assets/png/bluebook.png": "f0799ff94c699ea99904cdc65066b7df",
"assets/assets/png/bookicon.png": "c1c307b6c66a9d2df7c9c1633afc1ea8",
"assets/assets/png/c1.png": "4ef9be58e2dbb546da95c4d7bc77c140",
"assets/assets/png/c2.png": "bd1b197a36c70d70d1b691813c5b1b23",
"assets/assets/png/c3.png": "48d21d477afbf4b9a65800480db38c5e",
"assets/assets/png/card1.png": "bd750b1cdd65180e86065dcd9dde8254",
"assets/assets/png/card2.png": "9cc63fadd6f9c550c570dae0195836bb",
"assets/assets/png/card3.png": "a197660d474984089bd6beb2de07d662",
"assets/assets/png/card4.png": "5181bb5301e57a851a0687b88104420e",
"assets/assets/png/charles.png": "37e29e9a9380426e812c1d81a6028199",
"assets/assets/png/chat.png": "3f30216f76625fd41db0b16adb0393fd",
"assets/assets/png/dashboard.png": "1990a02bb512ced9b6173678d8dc52e0",
"assets/assets/png/editProfile.png": "ea5e9843e407068c638faa86dc41fd0d",
"assets/assets/png/favouriteIcon.png": "aa4ba2ccb8daa01676b1e7d19a0df59d",
"assets/assets/png/g1.png": "9f02689acfadd925bce33b786836696c",
"assets/assets/png/g11.png": "e1840240cc8393ac56c0ed6bcc2325d6",
"assets/assets/png/g2.png": "aa11d2ed30680ffe13330c855df6bc05",
"assets/assets/png/g3.png": "a7c1c64815e865a2d5bce7f283f7b777",
"assets/assets/png/g4.png": "8599ff6b17f7230c497f4c746cbfbc8c",
"assets/assets/png/gg1.png": "e0afa31113cf9398dddddc0d42525298",
"assets/assets/png/Group%25201026.png": "97616b11d04c83c2961481b9c20ddbfb",
"assets/assets/png/Group%2520528.png": "ae37cd4adf33f0d04b8b2d9231d08757",
"assets/assets/png/Group%2520724.png": "2421385f5e958d69175b95b2db4a8770",
"assets/assets/png/Group%2520725.png": "f610dfcd3cb7d046a8adb069094e1a01",
"assets/assets/png/Group.png": "145417390f4bbadb46e92d76583751b2",
"assets/assets/png/iconoir_verified-user.png": "2542cbe2aba53a2b503f7b2a8d729ead",
"assets/assets/png/inbox.png": "970348e055b3a8dc856eec50dfd36bcf",
"assets/assets/png/logo.png": "0d769ab3067d1517694e616c351ea519",
"assets/assets/png/logo1.png": "8db50c1bdbceee43776724ca85f48098",
"assets/assets/png/logoWhite.png": "b45c82e5d5c663cbb7f468529d814821",
"assets/assets/png/Mail.png": "58efb2650c3853493533e6b9a4804c14",
"assets/assets/png/Maximilien-Robespierre%25206.png": "17b85c4dc34a809fc589f0095676b3f5",
"assets/assets/png/ondemand.png": "6f42ef77a353aa63ad08b69b05ec0ed4",
"assets/assets/png/profile.png": "b9ca80b5e5a53ae40a6e14bca95d4e89",
"assets/assets/png/quiz.png": "456a35bdab9d445a142a6b2c2c546459",
"assets/assets/png/r1.png": "ab5c74410c975e0c3b0a7ddba31f2b80",
"assets/assets/png/r11.png": "d9fb22748bda8961aee32d3dbbc3e423",
"assets/assets/png/searchicon.png": "fa497b1361a505cf07d53ad311e8555a",
"assets/assets/png/star.png": "cc620d0af098dd31ec6fc039a02b7947",
"assets/assets/png/student_dashboard.png": "5ee78b2269e75a6550e389bc26667ad1",
"assets/assets/png/student_demand.png": "84360cf65f93cadf5dbd3c947aca08cc",
"assets/assets/png/student_edit_profile.png": "ea5e9843e407068c638faa86dc41fd0d",
"assets/assets/png/student_inbox.png": "970348e055b3a8dc856eec50dfd36bcf",
"assets/assets/png/student_profile.png": "b9ca80b5e5a53ae40a6e14bca95d4e89",
"assets/assets/png/student_quiz.png": "456a35bdab9d445a142a6b2c2c546459",
"assets/assets/png/teacher_dashboard.png": "e40178c341161abcc066c4bd2ff10312",
"assets/assets/png/teacher_wallet.png": "f3e967a8ba306b6e6c81d9c38e0a46d9",
"assets/assets/png/trophy.png": "21f8fd141da9c917fb4dbf87c119a21c",
"assets/assets/png/wp2398385%25201.png": "9618bd82c4ac129707a47106baa73d66",
"assets/assets/png/y1.png": "523387d3ba6b9bdfacd8dbbdbc2a58c0",
"assets/assets/png/y11.png": "253f83494a407cfbedd1c5762ccb0874",
"assets/FontManifest.json": "7bb121d080d1fabd928ebe28605e1d15",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "358f23c96dd9836af8e79342393270c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "e766963327e0a89f9ec2ba88646b6177",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "db78b9359171f24936b16d84f63af378",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "1ab236ed440ee51810c56bd16628aef0",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4aed445aff636985e5916ad6fee92257",
"/": "4aed445aff636985e5916ad6fee92257",
"main.dart.js": "2c5caa503de7918533b7c352b0bc0aab",
"manifest.json": "36882d0768d2bc3b6dd0b5c1c06a62a5",
"version.json": "73736aed800da03a639702c45aeca31d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
