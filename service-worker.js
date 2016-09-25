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

var precacheConfig = [["/404.html","7b830b49bcbef33dc271d136d22fb85b"],["/about/index.html","d078592dfb74785f6c8608bd498910be"],["/gulpfile.js","93d7d2362dd62fcf3504089b008b37db"],["/hymns/a-new-commandment/index.html","3ca9ade3363bca4f0b20c529afcc5898"],["/hymns/abide-with-me/index.html","23297f92e808c5250344c2d9e0399099"],["/hymns/above-all/index.html","d5f0788104c3fd852f913d43c7fa9260"],["/hymns/accept-almighty-father/index.html","f779a160a2bd2576cd96d1a5904228e1"],["/hymns/all-over-the-world/index.html","4c5279f785870b5ec91c464caee52099"],["/hymns/all-peoples-of-the-universe/index.html","cc1ed4084edba1e30cc237b26905c84e"],["/hymns/all-that-i-am/index.html","0c35a6bcd46384cc0fe58b5a0650f56a"],["/hymns/all-the-ends-of-the-earth/index.html","cf3318d8f485bf12cbb045c7753235da"],["/hymns/all-the-way-my-saviour-leads-me/index.html","69258b7bc35f7500b75b31cc5e82cce5"],["/hymns/all-to-jesus-i-surrender/index.html","c7565456da6a6c6d9fb07780a28c4be3"],["/hymns/amazing-grace/index.html","bde55bdc9d9a0415d151737bdf3fea60"],["/hymns/as-i-kneel-before-you/index.html","bea08ec2aac4891259043ef0a07c5956"],["/hymns/as-the-deer/index.html","09cd9b7d7ca4e06b37efc2f101d73c69"],["/hymns/as-we-gather-may-your-spirit-work-within-us/index.html","a4d6bd13057a6f1199a23cfeadbcea3c"],["/hymns/at-the-cross-her-station-keeping/index.html","2558fb5480a4c249d89f5db6f8273804"],["/hymns/at-the-name-of-jesus/index.html","563a083401096979ab7c8687d555baf9"],["/hymns/at-this-time-of-giving/index.html","7db53b2c9a54d206c6a7fd93d1d87da4"],["/hymns/be-exalted/index.html","d8167bfd9d5cd43b9a5ed077761add5f"],["/hymns/be-not-afraid-i-go-before-you-always/index.html","06b69d683ea2e71214c873b03e3aee25"],["/hymns/be-still-and-know/index.html","a21d54d7590bfb8655d8eebbcebeed44"],["/hymns/be-still-for-the-presence-of-the-lord/index.html","3c3ab5f7de1267863fd3b4761b6c7f96"],["/hymns/be-thou-my-vision/index.html","a13fe4d89fd00c2da35919f1618a617a"],["/hymns/beginning-today/index.html","3ebac4f391ef44397d97c7746db2577d"],["/hymns/bestir-thy-power/index.html","b8fd53b07fe6e886d6acd77876ddd148"],["/hymns/bind-us-together/index.html","f82035f6bae25a53e298f510030c3208"],["/hymns/blessed-are-they-who-are-poor-in-spirit/index.html","1d49c6a75b159b708300cc38a26be0dd"],["/hymns/blessed-assurance/index.html","89e6099f2fe90345a6b4bbeeda210c38"],["/hymns/blest-are-they/index.html","91c40b61c072184cc58177cd66803487"],["/hymns/blest-are-you-lord/index.html","79b9d97de7ee35b67544fd49d5ff68cc"],["/hymns/bread-that-was-sown/index.html","f21a649f956b1d83dd12c28e1443d5b3"],["/hymns/cause-me-to-come/index.html","0f954a996041b696ca59d85de67e8d48"],["/hymns/celebrate-god/index.html","7b66697cee1468bf1b04d03d54389f48"],["/hymns/christ-be-our-light/index.html","ca5984b2147f788cb492469e770c4f65"],["/hymns/colours-of-day/index.html","4cf1bb7fa6a061c324b6f02b3ea15126"],["/hymns/come-back-to-me/index.html","3318590900601f4cc175b647da783a14"],["/hymns/come-come-emmanuel/index.html","98edaabf161acf3cc80dd8ada8f1e65f"],["/hymns/come-holy-ghost/index.html","2c9e7282484973ed3ca40325c7a1b25e"],["/hymns/come-in-pilgrim/index.html","b0ec690525ec7f56bc67a08021a41845"],["/hymns/come-into-his-presence/index.html","92f4931ebc017da7a3eaba94f9c18dd1"],["/hymns/come-thou-long-expected-jesus/index.html","565e9b288bfefca37ee62e08f9ecc408"],["/hymns/come-to-us/index.html","a38902c0941f2cd78717b8d53ab3f0c6"],["/hymns/count-your-blessings/index.html","fbfb12d77a746defddb343ed92aa4459"],["/hymns/daily-daily-sing-to-mary/index.html","b40c8f0a86d5972a930eff2138068200"],["/hymns/deep-calls-to-deep/index.html","9f1545f9a465434c3f4d03271b2808f4"],["/hymns/do-this-in-memory-of-me/index.html","2f74e8ca62d165f8fb9cdfd4f57fbe8c"],["/hymns/enter-his-gates/index.html","34ecb477847cdca8863777ef9765f522"],["/hymns/every-morning/index.html","737aa27572d2685cafb0aa55962354b0"],["/hymns/father-we-adore-you/index.html","65eab2f0bada783e947d5a8b6e7755cc"],["/hymns/find-us-ready/index.html","a3e6dda3494adabdc19823ecf03de627"],["/hymns/from-the-depths/index.html","69fd42ff778f1fd53d6c952e57cffb6a"],["/hymns/give-me-oil-in-my-lamp/index.html","abd2040844c77b71e11fd309d86063ba"],["/hymns/give-thanks/index.html","4c1eb60a069c33f6d179890d65d4de7a"],["/hymns/glory-and-praise-to-our-god/index.html","35e215b0b798f0c3f05713a3f22582ca"],["/hymns/go-go-into-the-world/index.html","be28b65606e1886e0001a58589485876"],["/hymns/go-the-mass-is-ended/index.html","9d8f9949b6edd5b8e0f0926e6f1b3562"],["/hymns/god-is-good-to-me/index.html","63eecccde7d31d559bed83b053f8646c"],["/hymns/god-is-so-good/index.html","5bdb12e93ecaa65694800a5db2d42ab8"],["/hymns/great-indeed-are-your-works/index.html","c3b31d8caeb7901e524ffc4a416e0433"],["/hymns/great-things-happen/index.html","9b7c3ee7fced8256b432f1f0696813ea"],["/hymns/greater-love-and-friendship/index.html","5f4765df3f96cbbfa12f27e3740544fc"],["/hymns/hail-holy-joseph-hail/index.html","99c8cdf4b8f1d678e9f32db001054daf"],["/hymns/hail-mary-full-of-grace/index.html","b4ab6739e19dafbcd56b081080869e99"],["/hymns/hail-to-thee-true-body-sprung/index.html","54bc83c4394e59d034ffe3e8cd617885"],["/hymns/he-is-lord/index.html","260f80a4a5088ff64e4a6a95c76c93a0"],["/hymns/hide-me-in-the-hollow-of-your-loving-hand/index.html","871d7a6c407205315f741c4ef97b744c"],["/hymns/his-name-is-higher/index.html","aa233d868dcc516f7ec4d0fd7a495a4a"],["/hymns/holy-god-we-praise-thy-name/index.html","e6d81818556a5d33655349c268d4b2bf"],["/hymns/holy-holy-holy-lord-god-almighty/index.html","a44a4442f33a979caee52562b68df719"],["/hymns/holy-virgin/index.html","b896dbb0102ed8c134a5d63672ed66d8"],["/hymns/how-i-rejoiced-when-i-heard-them-say/index.html","dc04035fcadffc1094d50d5479f85b4c"],["/hymns/how-lovely-is-your-dwelling-place-o-lord/index.html","19e4ac3588458b982c27a9d07d56dd47"],["/hymns/i-am-the-bread-of-life/index.html","7144bed63107a7684f4eb8367ed5b928"],["/hymns/i-am-the-light/index.html","c96ac5fedf95718153e2dc77e0106539"],["/hymns/i-dare-not-sing/index.html","5901c08f8ac8989aae478deb3181d486"],["/hymns/i-give-my-hands/index.html","d98a5e853a0a22bd7195bd399fae7fbd"],["/hymns/i-have-decided/index.html","24a5f6ae61e61667e1269ce8a076bbbc"],["/hymns/i-now-no-longer-live/index.html","803b73b871347178c05fbcb9fa4bac67"],["/hymns/i-rejoiced-when-i-heard/index.html","5144bb4c8445fb58195573d3889fdc37"],["/hymns/i-will-play/index.html","f96a108d90888d34f9ffdbe6f6c07538"],["/hymns/i-will-sing-of-the-mercies/index.html","8392f53dcd24cabc5044fa21bdfcfe10"],["/hymns/if-you-wish-to-be-my-disciple/index.html","d92c3cb5de9c5bc2fb472c82c96b119d"],["/hymns/ill-turn-my-steps/index.html","ad94c8bb958021a652f1ec3104143fca"],["/hymns/in-his-time/index.html","5040dae1955e8f7bf6cb0f6e33e7deb7"],["/hymns/in-the-lord-is-my-hope/index.html","3e0607b860cbe7fe1b7b7259da31a0c1"],["/hymns/into-your-hands-we-commend-our-spirit/index.html","e3dd6e6666272a2379f6ba1c656f532d"],["/hymns/it-was-six-days-before-the-passover/index.html","87440940bca7f525287e5b23e62054bc"],["/hymns/ive-wandered-far-away-from-god/index.html","e7693c8d3d716c36d7ebe350d4fe7db7"],["/hymns/jesus-always-loved-his-own/index.html","1bd76eb71d2bacbb93d8f722e81f48ee"],["/hymns/jesus-my-lord-my-god-my-all/index.html","0c06479b641c8a3917f8b283543009ea"],["/hymns/jesus-you-are-my-salvation/index.html","e6250129721109f0fe4d6f3e072804b8"],["/hymns/jesus-youre-the-sweetest-name-of-all/index.html","aa29964d088dc859365f0f10c42d0d73"],["/hymns/just-to-fix-our-eyes-on-jesus/index.html","39d63773f8c9bfdb85a91a6131bf8e7d"],["/hymns/lay-your-hands/index.html","4f0b6bba4c4feb5125762b830009bf32"],["/hymns/let-it-be-done/index.html","de2487ba3cac3da87394b032464cc2dc"],["/hymns/let-us-bow-in-adoration/index.html","9040b71675e8a14aedfe1120be586366"],["/hymns/listen-to-your-people/index.html","e627656848a2efc3bb10b57f71807a5a"],["/hymns/living-waters-flow-on/index.html","c28f0f8f98ecba048dbe91158b5fbe4b"],["/hymns/lord-make-me-like-you/index.html","6919cef22c5cdab11e09da2c87f2b118"],["/hymns/lose-yourself-in-me/index.html","0f069d11fba6a9018c4647dca709b245"],["/hymns/love-has-captured-the-night/index.html","ac315664502d2f83614ec9b1f7f1951c"],["/hymns/make-me-a-servant/index.html","2983f90080b1c3ac542feb021c33fa43"],["/hymns/make-me-an-instrument/index.html","ceb35512ed284804c9f9042eec83c0dc"],["/hymns/mary-from-thy-sacred-image/index.html","0848bb39dff9bf6440842cc930fd78c7"],["/hymns/mother-dear-o-pray-for-me/index.html","41220fae45a23db612f26db8e294349c"],["/hymns/mother-dearest-mother-fairest/index.html","7f3af3a3b4b1b58c6d4318ac89fdd5e2"],["/hymns/mother-of-god-plead-with-your-son/index.html","78619cdd32db0e94a4131b1d416c2888"],["/hymns/my-lord-he-died-for-a-kingdom/index.html","2ad470360a0017292d5180c0f534821a"],["/hymns/my-soul-rejoices/index.html","58dc749952fb0a6ee5968102dcb9b927"],["/hymns/nearer-my-god-to-thee/index.html","08a26c3dd9743063387f993aab55757f"],["/hymns/o-cross-erected/index.html","ed7e72a17486487710f0a372b41c82a3"],["/hymns/o-sacrament-most-holy/index.html","06b9b688af8ec87857f809739275afbe"],["/hymns/on-a-hill-far-away/index.html","fa79b8b1629d798701c60084500efad7"],["/hymns/our-hearts-were-made-for-you-lord/index.html","271ee63bc937740c32e6b7fda32b10dc"],["/hymns/praise-him-praise-him/index.html","7d6f68c1886c890d3c2c93ea1fdc8308"],["/hymns/ready-the-way/index.html","98067e123e44e6f72d5bfdecfd715426"],["/hymns/rejoice-evermore/index.html","e590f3ac70ac3dc7673067fc35ae9bdf"],["/hymns/shepherd-of-my-soul/index.html","60319fb0bec2b6b747d7f7f6363cdc20"],["/hymns/sing-life-sing-love-sing-jesus/index.html","67e918a503bb1337ba868d8598319f44"],["/hymns/sing-my-tongue/index.html","859dd6812d1d791715706b74df5569d7"],["/hymns/soul-of-my-saviour/index.html","ff1cbe2714c973c410d44449d6eb7b9a"],["/hymns/sweet-heart-of-jesus/index.html","58ece8445e10e2d7340664b6c0af847d"],["/hymns/take-our-bread/index.html","62b622f9fb4ab4191ccb48b822d12e71"],["/hymns/thank-you-lord-for-all-youve-done/index.html","c5abc50b1656c461885e2d2e0fa160c1"],["/hymns/thank-you-o-lord-your-love-is-boundless/index.html","ec03192c6cef9f1161e7973ae96e6ca3"],["/hymns/thanks-be-to-god/index.html","217196a35ae928c85414856becaac8a8"],["/hymns/the-cup-of-blessing-that-we-raise/index.html","ca19bf84a3ba7ebce1450aec088ef1c9"],["/hymns/the-lord-is-my-shepherd/index.html","b39910d2f5fc41fa83f78c6a8c140c44"],["/hymns/the-more-we-hear/index.html","b2f7f3788d80d62d60732821ec22d05a"],["/hymns/the-saviour-is-waiting/index.html","3638193ec66474250e47d8aa953dfe7e"],["/hymns/the-steadfast-love/index.html","19f76adacc0521b936bf9acafeeeab65"],["/hymns/then-sings-my-soul/index.html","6b89a360a15d0df4d1942b4e8db85a3d"],["/hymns/these-forty-days/index.html","ded9c301c0be37ec9e192bd0a3e155c1"],["/hymns/though-the-mountains-may-fall/index.html","bebe5fd5737d16cbd9c15e3b0f076ba7"],["/hymns/walk-with-me-o-my-lord/index.html","cfd7bea6aaf6de45f3331df23e711752"],["/hymns/water-water-and-the-spirit/index.html","732c45810b8413d3b02b6f4ece34df2e"],["/hymns/we-offer-you-o-lord-divine/index.html","dd191e548caea6386eb4ae32edd39dc0"],["/hymns/we-see-the-troubles-in-our-lives/index.html","51e642544739e41dddc2d714eaafa5d5"],["/hymns/we-want-to-give-you-thanks-lord/index.html","39199d7d85f475f565f099178695ef0e"],["/hymns/whatsoever-you-do-to-the-least-of-my-people/index.html","8d971487f22f7398609af0ecd6548efc"],["/index.html","b823f28cc5f82a3a966bce53480ea192"],["/launcher-icon-2x.png","cca0ab0996bddc2c0cc0e49729f7052c"],["/launcher-icon-3x.png","dcb209d58dc0df6f8092e0923caccc4e"],["/launcher-icon-4x.png","0f4d10f49de1df7e97c5dad8fe75486a"],["/order-of-mass/index.html","40ea38c19f096f773ec5a8630391bbdd"],["/public/css/lanyon.css","695bf0024f2c0135ecd2e28e3f8b648b"],["/public/css/poole.css","873c679adf2c9f354d10fcbfd3453cde"],["/public/css/site.css","444365248c5e3aa0a97b278539584782"],["/public/css/syntax.css","0d3adf5d678394205b2209489843b41e"],["/service-worker-registration.js","a32718ebced9b80580b3fe5fc6495789"],["/service-worker.js","090869aae103dc7dae3e59e299a489e1"]];
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







