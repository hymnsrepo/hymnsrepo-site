/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","7b830b49bcbef33dc271d136d22fb85b"],["/about/index.html","d078592dfb74785f6c8608bd498910be"],["/gulpfile.js","93d7d2362dd62fcf3504089b008b37db"],["/hymns/a-new-commandment/index.html","e0b078ebeca1b52c81c2eaa6f46a200a"],["/hymns/abide-with-me/index.html","092b1d4d716187a3a16a36cc21df899e"],["/hymns/above-all/index.html","b8bf99de03ba28e729dbf7439cbb8e77"],["/hymns/accept-almighty-father/index.html","f9f7deac97f32f351c7950c3da6744a3"],["/hymns/all-over-the-world/index.html","d55e23eb4204812ee2f81f0b1127f51e"],["/hymns/all-peoples-of-the-universe/index.html","5ed3713e77e7fadedcf11315e5f74be8"],["/hymns/all-that-i-am/index.html","79dc06054b920f97bb404bfcc83a8384"],["/hymns/all-the-ends-of-the-earth/index.html","e8e56a0cc649c126db5966648ef7a2e3"],["/hymns/all-the-way-my-saviour-leads-me/index.html","9671465e58507e9be426333d38ef05c0"],["/hymns/all-to-jesus-i-surrender/index.html","858c1c4fad414b7268d81eb93db85cb2"],["/hymns/amazing-grace/index.html","7e097eee2367fe8b095981e4cdf9a3f9"],["/hymns/as-i-kneel-before-you/index.html","b5a8153071ef549daffca8a94be84b45"],["/hymns/as-the-deer/index.html","647fbcfc4a0772a967efe1287ef9d30f"],["/hymns/as-we-gather-may-your-spirit-work-within-us/index.html","6c021ed32e082a25a2403feb07b3e7e0"],["/hymns/at-the-cross-her-station-keeping/index.html","3c26af4542470268117c9d1d48aa2006"],["/hymns/at-the-name-of-jesus/index.html","9f83168aa130e39e065832830e6674be"],["/hymns/at-this-time-of-giving/index.html","e57dbd8b57ec9fa034d27c9dd0c4c8b2"],["/hymns/be-exalted/index.html","68bf07edc38110cc652cadcc297459fb"],["/hymns/be-not-afraid-i-go-before-you-always/index.html","54c4300d07295af74c5cf779682c0e4f"],["/hymns/be-still-and-know/index.html","d3abdb58007e42d4da773015929b7d1c"],["/hymns/be-still-for-the-presence-of-the-lord/index.html","1502208a4a89fc28a75e58c60adda242"],["/hymns/be-thou-my-vision/index.html","e3b191ae526793170ef3b9ed9943c5e8"],["/hymns/beginning-today/index.html","705f819108bf5e0cec9909f63ac567b3"],["/hymns/bestir-thy-power/index.html","b2a7ea0bcc53203c3213fa00e4de1301"],["/hymns/bind-us-together/index.html","b130b5fb8e14f882a67b4b926af99f4c"],["/hymns/blessed-are-they-who-are-poor-in-spirit/index.html","04a1b53fbf83eb67decfeacc466ba976"],["/hymns/blessed-assurance/index.html","1b649d89cf564057e1cd3ae0eacb2987"],["/hymns/blest-are-they/index.html","27360622d8dd4d5be3f556db011934c8"],["/hymns/blest-are-you-lord/index.html","b6d501fc1a888ae0515a964242ae0cb7"],["/hymns/bread-that-was-sown/index.html","9ab7e8d230454f198d532ee464f8736d"],["/hymns/cause-me-to-come/index.html","ea8b7a91795b8a4c0441a59da84bcc98"],["/hymns/celebrate-god/index.html","60b30d3998ead0923f0abe4c205be35d"],["/hymns/christ-be-our-light/index.html","7caf9299d16ecab53af23ff8d04e6163"],["/hymns/colours-of-day/index.html","52874668a2a3daa95e6217f4cd8299ef"],["/hymns/come-back-to-me/index.html","d8a8286cb206d11e33d478d466909233"],["/hymns/come-come-emmanuel/index.html","8a4f7b3ed03ce4233f75d37c1087de68"],["/hymns/come-holy-ghost/index.html","778bf41d88be32300b20eb14c4953630"],["/hymns/come-in-pilgrim/index.html","96e7e11613cf25a729b55e9fdc1cdb6f"],["/hymns/come-into-his-presence/index.html","e0f559da0b0c8654c2f404bf2b4b47db"],["/hymns/come-thou-long-expected-jesus/index.html","b2bb6eae524e43b8eaa7b7b63b41c662"],["/hymns/come-to-us/index.html","505723467bd7b8b1adba4aca90964f20"],["/hymns/count-your-blessings/index.html","efd9cdb380e0ac8557ae7b5a927364cc"],["/hymns/daily-daily-sing-to-mary/index.html","323f799ff94f3790fee66c2b4d88ec6f"],["/hymns/deep-calls-to-deep/index.html","da33961417a9689be76932bc47c9b650"],["/hymns/do-this-in-memory-of-me/index.html","413cb2f6ba09a7f120086ef1deb5b557"],["/hymns/enter-his-gates/index.html","568db9a359aed2ba6b318f8d703d2d2a"],["/hymns/every-morning/index.html","b57af2be345bafa110a5340cc91cf628"],["/hymns/father-we-adore-you/index.html","55660edbe5308d371aba4538ad7e47e8"],["/hymns/find-us-ready/index.html","dbd73ab7f77a4349a2443ee3d5772a73"],["/hymns/from-the-depths/index.html","4fe25e32fe693dbcba19c27dad91ca93"],["/hymns/give-me-oil-in-my-lamp/index.html","b0abba9b726da79092cb0975a65f1b25"],["/hymns/give-thanks/index.html","916a8ba956edd0d764a15bdbb2d39e37"],["/hymns/glory-and-praise-to-our-god/index.html","32c2a874b9b1b292bbe4d939f46456d5"],["/hymns/glory-to-you/index.html","168b7a1b660160eb38b6a616db57d316"],["/hymns/go-go-into-the-world/index.html","65a079467070e6cb56a1ec19e4c97a46"],["/hymns/go-the-mass-is-ended/index.html","d52448813effb4cb0526e4f74c3adf19"],["/hymns/god-is-good-to-me/index.html","31128d3a08357c8640733ee1a1eec799"],["/hymns/god-is-so-good/index.html","9b8d0ef83eeb4052eb772c0accc80023"],["/hymns/great-indeed-are-your-works/index.html","2f61f8dd8211414c564216457f7866e9"],["/hymns/great-things-happen/index.html","856844922124a79dd79a724dd29e076f"],["/hymns/greater-love-and-friendship/index.html","3e290feda35e7f5d5928f800c304189f"],["/hymns/hail-holy-joseph-hail/index.html","7df6133c357d2b65022152a0a0d3b28c"],["/hymns/hail-mary-full-of-grace/index.html","c2108abd8d9fd9541e2c25a044d31514"],["/hymns/hail-to-thee-true-body-sprung/index.html","7328958845707df36ee8a7d1795052b1"],["/hymns/he-is-lord/index.html","d1ddcb52782a28b5c1f498103facf837"],["/hymns/hide-me-in-the-hollow-of-your-loving-hand/index.html","44df6cc2d0fcb79d8b13926c5061c603"],["/hymns/his-name-is-higher/index.html","bf90c28968afd7b4be7ddd5bbad961d6"],["/hymns/holy-god-we-praise-thy-name/index.html","8d8155c3d70fce51adae39d51996bc90"],["/hymns/holy-holy-holy-lord-god-almighty/index.html","903f8cc8011f7b92ce9368be84277f68"],["/hymns/holy-virgin/index.html","d038b572cb7e38c505b4e086f2069af5"],["/hymns/how-i-rejoiced-when-i-heard-them-say/index.html","5fff6321d88f87a445329a206e350095"],["/hymns/how-lovely-is-your-dwelling-place-o-lord/index.html","bcfb10642fe70dab041b8fb3fd47fac4"],["/hymns/i-am-the-bread-of-life/index.html","14ba7301b79b1d0233a9801d6f8537bd"],["/hymns/i-am-the-light/index.html","17a084a547dceb73edac44a00e088310"],["/hymns/i-dare-not-sing/index.html","3d46341c055bc59e609070a28ee8ab8d"],["/hymns/i-give-my-hands/index.html","2a54e88de5aa7e17feff2349e8d4ff96"],["/hymns/i-have-decided/index.html","289b71e59742d101bfa05576eb064325"],["/hymns/i-now-no-longer-live/index.html","48f988c65b7592af1e268fca2740f63b"],["/hymns/i-rejoiced-when-i-heard/index.html","80679b38a339a0b273d6775fe9b13899"],["/hymns/i-will-play/index.html","a8ac294046ce395266e053a771137cc7"],["/hymns/i-will-sing-of-the-mercies/index.html","535d9d9f4b2979b335fb1cd5255c3f7f"],["/hymns/if-you-wish-to-be-my-disciple/index.html","a0b56885a76ca7722a7d64419c2c9ea9"],["/hymns/ill-turn-my-steps/index.html","6611b9c7f068761b45cbaef8bb0b8db7"],["/hymns/in-his-time/index.html","cf30df7696612265ddc290ae048a6bbf"],["/hymns/in-the-lord-is-my-hope/index.html","7a88dde4f2172c5b98b4bdb61516af64"],["/hymns/into-your-hands-we-commend-our-spirit/index.html","337d8d7603f0acdec86d0e395497a345"],["/hymns/it-was-six-days-before-the-passover/index.html","6b28bf1615ebbd734d7d53d03a4121e8"],["/hymns/ive-wandered-far-away-from-god/index.html","b1c97c16b5d03517e81ff0391ee46eab"],["/hymns/jesus-always-loved-his-own/index.html","1b03d9c3c65657a60c9c4fe5213867bd"],["/hymns/jesus-my-lord-my-god-my-all/index.html","0ec249593da0282f0e5b3d9c9218eb9b"],["/hymns/jesus-you-are-my-salvation/index.html","a39fa78c21838b85661fda110a7f7988"],["/hymns/jesus-youre-the-sweetest-name-of-all/index.html","3557a76b3fdfeea08f125b2ab7dc46ef"],["/hymns/just-to-fix-our-eyes-on-jesus/index.html","f3d64a3143c0d582bddff3c1d8a225dc"],["/hymns/lay-your-hands/index.html","6766238d082d37f48e4d988fda59928b"],["/hymns/let-it-be-done/index.html","f56904eb19201f4552b25476a1d8f0c7"],["/hymns/let-us-bow-in-adoration/index.html","de5ec1955b570c123f0b607f2ca782b5"],["/hymns/listen-to-your-people/index.html","a88c7d46981ea7c377c930d95ebe77ae"],["/hymns/living-waters-flow-on/index.html","ec0f3b1cd704324fe8de0028d41c3f82"],["/hymns/lord-make-me-like-you/index.html","c32b5659ef5dbd140e5062592aaf06eb"],["/hymns/lose-yourself-in-me/index.html","5fea5f9182441bcab878c05449648fde"],["/hymns/love-has-captured-the-night/index.html","f43b6aec58b0e70d544fa77cab09885c"],["/hymns/make-me-a-servant/index.html","74dacd985f79480c1d7348b653077cae"],["/hymns/make-me-an-instrument/index.html","8d496f092388005a46dcef496e494e0d"],["/hymns/mary-from-thy-sacred-image/index.html","a4211bd78ff61bc0191df12b30ba02b5"],["/hymns/mother-dear-o-pray-for-me/index.html","ae05cd63405ab944ee5177c0bde6ddc6"],["/hymns/mother-dearest-mother-fairest/index.html","80a287f250dd45dcb1c1181c7b78bcd8"],["/hymns/mother-of-god-plead-with-your-son/index.html","2d3e06511e28b711d5f3f94a48bbc6bb"],["/hymns/my-lord-he-died-for-a-kingdom/index.html","6154f3e8594e4597533fd1b60e095757"],["/hymns/my-soul-rejoices/index.html","c992552b0b8c72aa1ba276ffec4542c9"],["/hymns/nearer-my-god-to-thee/index.html","3e228b2fbf8e99b764966d36830786e4"],["/hymns/o-cross-erected/index.html","785171c59e61c75c5bf0a70ada473667"],["/hymns/o-sacrament-most-holy/index.html","ac7cd009b680be47361dc84e0cf529fe"],["/hymns/on-a-hill-far-away/index.html","a1c34a26705204937027e16515fe44ab"],["/hymns/our-hearts-were-made-for-you-lord/index.html","3072a33f43345707463fb9e97548d333"],["/hymns/praise-him-praise-him/index.html","d24e90c254b501811af91eb86baa3174"],["/hymns/ready-the-way/index.html","7333055f91d80516c93cd8e8b0f51580"],["/hymns/rejoice-evermore/index.html","d2bcd0c87c357edc2ac5f49d3dd4842f"],["/hymns/shepherd-of-my-soul/index.html","a4c0f1c612c63ae3ac5e3c5a3f067902"],["/hymns/sing-life-sing-love-sing-jesus/index.html","25e4aeac2995713a0da19abbd93210f3"],["/hymns/sing-my-tongue/index.html","8a7e0d5b954bfab34add18abca6357e0"],["/hymns/soul-of-my-saviour/index.html","9a6121bc31ed80a91433f628c30c1a74"],["/hymns/sweet-heart-of-jesus/index.html","e7825f95d2eb0cb8e84e5f9f65a0391b"],["/hymns/take-our-bread/index.html","2297dcee75cf7d8b367565e888505274"],["/hymns/ten-thousand-angels/index.html","0f08c443ae0c863a7b5c980dab8e23d1"],["/hymns/thank-you-lord-for-all-youve-done/index.html","ce3217a272a425973a95d28af1cc4008"],["/hymns/thank-you-o-lord-your-love-is-boundless/index.html","707b23e1da785a4f6182efb2e0209ea7"],["/hymns/thanks-be-to-god/index.html","33af7492e7613f592106e3708a2350b0"],["/hymns/the-cup-of-blessing-that-we-raise/index.html","6e67be66bfa81598ef4351ba616b57ca"],["/hymns/the-lord-is-my-shepherd/index.html","de3c41e7a04049a41304567b2d65e093"],["/hymns/the-more-we-hear/index.html","17e510ea4dc368e0fa183720b1d1ab62"],["/hymns/the-saviour-is-waiting/index.html","86e31750088a5aaec619c1c96626e9dd"],["/hymns/the-steadfast-love/index.html","989210c91865a2bf4ee0e4930cac99f2"],["/hymns/then-sings-my-soul/index.html","af7a092ebf8b07a89ccc1949fca49330"],["/hymns/these-forty-days/index.html","c97ce841fb4a6bac9ee7d7bb953088d7"],["/hymns/though-the-mountains-may-fall/index.html","2ae1e403ce0cdd6c959ec45cb93a9547"],["/hymns/walk-with-me-o-my-lord/index.html","6c4d6218cffbdec82607edcf9eee6bca"],["/hymns/water-water-and-the-spirit/index.html","ab92fb4a2817f19100bdb8d6540e605c"],["/hymns/we-offer-you-o-lord-divine/index.html","df85b8658008cfe52700291dddf13b2f"],["/hymns/we-see-the-troubles-in-our-lives/index.html","51c160c2954a46a8337f098afc169432"],["/hymns/we-want-to-give-you-thanks-lord/index.html","4731a7f9043cde94f3cd4ffbacb6848c"],["/hymns/whatsoever-you-do-to-the-least-of-my-people/index.html","4c4ba1fc3bcb94b2da415bb022ef3122"],["/index.html","1b8ae960c07d53adc1074dd2a3a914d1"],["/launcher-icon-2x.png","cca0ab0996bddc2c0cc0e49729f7052c"],["/launcher-icon-3x.png","dcb209d58dc0df6f8092e0923caccc4e"],["/launcher-icon-4x.png","0f4d10f49de1df7e97c5dad8fe75486a"],["/order-of-mass/index.html","40ea38c19f096f773ec5a8630391bbdd"],["/public/css/lanyon.css","695bf0024f2c0135ecd2e28e3f8b648b"],["/public/css/poole.css","873c679adf2c9f354d10fcbfd3453cde"],["/public/css/site.css","444365248c5e3aa0a97b278539584782"],["/public/css/syntax.css","0d3adf5d678394205b2209489843b41e"],["/service-worker-registration.js","a32718ebced9b80580b3fe5fc6495789"],["/service-worker.js","c8f54a4036ce53e04e9de5d2e38d4769"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      return self.clients.claim();
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url));
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







