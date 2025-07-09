'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7a087369fb3bd82d869dd213956c353a",
".git/config": "89a37dc368f07b6ab0d710de40c8d869",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ea61ad00cc8c7ec105b66a5e994da273",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a7995df1f5ea952da09cfb20a5b3304d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "62f82c51e6105a102939e78decc3d597",
".git/logs/refs/heads/master": "62f82c51e6105a102939e78decc3d597",
".git/logs/refs/remotes/origin/master": "f6b20fcf7245ce1d36dc2ef9413d32a7",
".git/objects/00/3ecdd2d7227a690fb6477d0c3b62c3c095b047": "281a28ff932a0feb71697d39091f5cba",
".git/objects/06/2f3299ac6d58a80842f1e46d43cf14575dc671": "ccd096d39f3b7ef9813ffa43f551b462",
".git/objects/06/36f56b84cdf8b7e06e804e48dfcc731e9a00a7": "1584c2973421d5c7abe1d73108a27026",
".git/objects/08/118d7da0631dd6e9d9418d9c6d43e4426a4eca": "7015836cbae3cd9e4cac4fdf8778872d",
".git/objects/11/35d5745abd3e1f18a07fb72a707986b6551c92": "cc7776e88ababc80c539b60f4e8c835b",
".git/objects/16/12f6b77673915562dfc4b147055147d5600993": "3ee968591221a59b73ac89b2cd14dedf",
".git/objects/17/948982bb911f1c3de79e5014db6f7237ec5e42": "893b300b9b186b33b516d6197a922d37",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/21/f17fa65ecc5bcf1693601f3678f8f569b2080d": "a8f4423d8414c46dc6bfe90ee3221cf8",
".git/objects/23/43436baa6e8fba2dae156f7acf2cebc1fe7ab0": "c15c1a600a0986f7075a29b9299aec13",
".git/objects/24/7e876071f50e86957ac20853ec18592c91b790": "33183a47b8d3c87dfc497776c33b806a",
".git/objects/2c/ab8205573b51d4e8b0c8ca26ad0a7d6bb4222e": "d3109828fd5b21366cea56cf4332d5ff",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3f/c322ab72d3fc4b2314bd0de80e6a1775474eed": "fb4f170bf678db7f6f02384f8cc0a846",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/e858e67d7fdcf8289ff30d97d96c3949454838": "0eb799fd2aba7e85c019d4431e795bb8",
".git/objects/46/11d91c16233306d3a0083db3f0f856c600d405": "a78cf159a01136dec50b076eeb7dc12d",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/56/81454f9e256cf729c6560e313699cdcadbeb39": "62208d384d2d0d167b06af2e622731ed",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/201952d819fb332cfbbf9096ddf2c718becaee": "0a845344db071d323aca07930fc4acaf",
".git/objects/65/a92b4f71aa72e77bd76dcdad48d6e625b08e3a": "2e1f9584b1248391b8360c446241242c",
".git/objects/67/803bb642742643c9525b6d25b8ade89383232c": "5d40c4c7976f38c9b005ca506909bdbd",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/f91ea7f905ecd292bda51a927f649e2995bb8d": "2090f182ffcacb6f1581d008201daf65",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/79/0cafd1693f8a908047f8bc0ee39bdbedf63526": "f7133bc65b003e9ac3ac0e7109280504",
".git/objects/83/4866f4b4e86d25bb3bdce85a342175b58466b7": "7517405380e3db4e811dc080a019c5f3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/03f51724cf2a7a83141876db16f5eef2c93058": "3d05b78b998b23671e226ad5d9a90217",
".git/objects/8d/32dce1e8ad7d623eff2f9e673a31925b7c2b40": "4625cdf0119840f70f43f05ac236a672",
".git/objects/8d/3bf605c1c15e757e200f9ee7d2f13a83e291dd": "02e361e99f901f43167922a17f0b5b30",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/c74e0a4228f2c6b06c405518e09ea9b79c43cb": "3163734854863bba89a915ef06ea4c4e",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f4f8e6413fc7438acce707f0fb34b7690c79ed": "4cdf6165c74395362492b98b35c31776",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ca704fec307292c6bcf428622ae6791292ccd4": "58c5eea0a1036e67f3b161094eb79fdc",
".git/objects/c1/1fb1a6bdd81c11671b1531d15ba07cb447d65f": "a541de8d961581e599247bb83ba84e1e",
".git/objects/c2/c96250a42e9ad26f48630b323e36ff5abcdb77": "4d05d87476b67bba42efaa06db2329ed",
".git/objects/c4/f433b8023b93e09f69c955141edeee0e398221": "1e403d6a110d0c8ae4b3cd2ca999a6ed",
".git/objects/c6/747ab2791cd7b711ebf26db4fd2ee377583321": "d018a84962f01de66aa5db058c2c822a",
".git/objects/ca/e9b20e4ef9e0f073e41944771629811091ec96": "335db521d49f5b7d6887064657ee0544",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/df/398628280f582c5e65e6ae4441ac714941cbf1": "29a1baae86d492c182b90c08bfac9427",
".git/objects/df/983c68cab385f3860b8974108467c225fe4212": "d402a395fe64e1cd9a17d17b64a4a1bf",
".git/objects/e0/b03cf326b1d79418df0d97e13f3fa15a3497f0": "952e16a9f23ecf507aac3876017184e8",
".git/objects/e5/0afd7066291261c5c7189f232d11f6c988e853": "9623b77511879c0f7fa52130c9a4e684",
".git/objects/e5/ab464431a87f31075f743d1199081278996827": "d08be40039295e0d2dd5023e281604bd",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/e0aec318334d0914caa55033f441a5577da0f2": "8cfc133b21a9879a0685a26a11b28b1d",
".git/objects/f6/c7e17eb15001c844e81c8f43f14bfac66b3a14": "972d3aea5345fa73f9bb65fc15b84a67",
".git/objects/f8/857ed6c0b1f12233c71e7fc4d82adff7187e7a": "97027427a6947c4cd80ed6b17b50d3cd",
".git/objects/fe/55888adcc81a9d3bf8c2f30f2d3ddaa02a393d": "4c6c052911eb56a218e182beecb35eff",
".git/objects/ff/36e16cc48751f5d8a3eeab9e4ac9f0e47c3349": "14cc8f50d9a63d38ed69ca7209ad5733",
".git/ORIG_HEAD": "f297c338c9c04df94f3b6f391a13640e",
".git/refs/heads/master": "29c4371a53d23877ba1605aefd8f8df4",
".git/refs/remotes/origin/master": "29c4371a53d23877ba1605aefd8f8df4",
"assets/AssetManifest.bin": "05d3c835ea15b110eb9d23b1ac952512",
"assets/AssetManifest.bin.json": "f8252e4ffe95122ae740da6396fece50",
"assets/AssetManifest.json": "7526ec666e5b111c6fa1ecd117f799af",
"assets/assets/fabriklab_logo.png": "2427d3e924f4c446c0346750c24d2fb4",
"assets/assets/home_card_1.jpg": "62b4012a39bf3b0baceb651a09c95492",
"assets/assets/home_card_2.jpg": "3e83103bb336c628f82cd3073708902d",
"assets/assets/logo.png": "aa12859985a4a86287cde05e2df874ab",
"assets/assets/search_result1.png": "bac303a567c651069efe2a8c0db16811",
"assets/assets/search_result2.png": "3a79ae8f1c762d4641395597180842ce",
"assets/assets/search_result3.png": "451c1b5fbe87bcf9fd4dabfe5448a23b",
"assets/assets/welcome_background.png": "d591123d585f6ece5b46e3222047eb33",
"assets/FontManifest.json": "80b700ffc245d341a70d104a0eea09c2",
"assets/fonts/MaterialIcons-Regular.otf": "baae241c8b37c6dba539174445b35157",
"assets/fonts/OpenSans-Bold.ttf": "0a191f83602623628320f3d3c667a276",
"assets/fonts/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
"assets/fonts/OpenSans-SemiBold.ttf": "e2ca235bf1ddc5b7a350199cf818c9c8",
"assets/NOTICES": "ac41299888817acc9fbafee1f301e7c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c3ed82a76fa789fab342e42b0e4b8a46",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce7c36d13287bd6a34d7eb587c90c133",
"/": "ce7c36d13287bd6a34d7eb587c90c133",
"main.dart.js": "ec9ff5ee7514360bf542cc4198449ccf",
"manifest.json": "c9831aabc07a9fc6a61918c5bade4e35",
"version.json": "d5b278427b5bdb8c7a7fbf636537e46d"};
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
