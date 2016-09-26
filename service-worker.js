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

var precacheConfig = [["/404.html","7b830b49bcbef33dc271d136d22fb85b"],["/about/index.html","d078592dfb74785f6c8608bd498910be"],["/gulpfile.js","93d7d2362dd62fcf3504089b008b37db"],["/hymns/a-new-commandment/index.html","785693b344166d269c54407b1706035b"],["/hymns/abide-with-me/index.html","775c282d5024f96288adf97e36b56fab"],["/hymns/above-all/index.html","ce0dc59cf343ffde0cd7d821949507cb"],["/hymns/accept-almighty-father/index.html","a4d2958343cf2a34eceb20ac636b6db2"],["/hymns/all-over-the-world/index.html","df21de07ce94217143f8d0b034123b88"],["/hymns/all-peoples-of-the-universe/index.html","10752d71c52619f9afdac10219e3752f"],["/hymns/all-that-i-am/index.html","aa9da10c09a0b447f338cdc7f9b3d4c2"],["/hymns/all-the-ends-of-the-earth/index.html","de655999661cd98e7f76b679225f5f3b"],["/hymns/all-the-way-my-saviour-leads-me/index.html","538ef1842db38cc838921cc0464b87f7"],["/hymns/all-to-jesus-i-surrender/index.html","9e6914f1627673c7cfdca100c3ede35a"],["/hymns/amazing-grace/index.html","225862c38fa52d0396a04ac98047a4b5"],["/hymns/as-i-kneel-before-you/index.html","33a711a1f42505f8073a1a5056c887d9"],["/hymns/as-the-deer/index.html","3af482003e43ad0f30d77a5e3a6ff6ba"],["/hymns/as-we-gather-may-your-spirit-work-within-us/index.html","0f79f0d1cfe7305ad79ea5e73d83e57c"],["/hymns/at-the-cross-her-station-keeping/index.html","a2476c94804d6ba7a2982ee2ce6d03b5"],["/hymns/at-the-name-of-jesus/index.html","ac443a6083e97115b42647321eef350f"],["/hymns/at-this-time-of-giving/index.html","69abc55f15d87de8f28e41387fd94668"],["/hymns/be-exalted/index.html","0bc25a4d36c10b0325d2dda905bc7c58"],["/hymns/be-not-afraid-i-go-before-you-always/index.html","ca0bb3906c6f3ba2ee9dc0c6bc1b85a4"],["/hymns/be-still-and-know/index.html","d7f8470ca8e78a7979f435eb10e1caaa"],["/hymns/be-still-for-the-presence-of-the-lord/index.html","136884f5394b760304420fcbfb8b364c"],["/hymns/be-thou-my-vision/index.html","a0d6461d9aad6d7198aa9f7a52b56d21"],["/hymns/beginning-today/index.html","b709378a80f34f250f01c5262e3e705a"],["/hymns/bestir-thy-power/index.html","428631fe94e5d61699ee0db522835e1a"],["/hymns/bind-us-together/index.html","8296b98a37bedac54405c5aadddef2c2"],["/hymns/blessed-are-they-who-are-poor-in-spirit/index.html","e20932b3fd011ca9ec4766a33cca3437"],["/hymns/blessed-assurance/index.html","ccd4c98ab6aed97ba7e2a16174a69d3a"],["/hymns/blest-are-they/index.html","016814575995ff6eff3264f106b513a8"],["/hymns/blest-are-you-lord/index.html","fd8a6146f8185019205a707cb804b8b2"],["/hymns/bread-that-was-sown/index.html","e6a66131eb2586a9877a9d9c7299af49"],["/hymns/cause-me-to-come/index.html","0a7799f5ff2c7fb6de32051401439722"],["/hymns/celebrate-god/index.html","bd2bd3f82b4e43c12df38600e4afe12e"],["/hymns/christ-be-our-light/index.html","17781cfcda0ee47bf598907c249b4875"],["/hymns/colours-of-day/index.html","caf1c33f7787db3416c0e9c51955209e"],["/hymns/come-back-to-me/index.html","68cac757becb48bef27c5a3f2717a01f"],["/hymns/come-come-emmanuel/index.html","9a5412754a14f5c4a0d0d77c9ea45f1f"],["/hymns/come-holy-ghost/index.html","0ddca6d508c2c0ff51d4d4b1a2d08e40"],["/hymns/come-in-pilgrim/index.html","9ee2c52457c771cd54a26954ae69cebf"],["/hymns/come-into-his-presence/index.html","3b2b61a92d11b6c90c03200d4d9002bb"],["/hymns/come-thou-long-expected-jesus/index.html","b27a09d52b33dde9946c0e2bfff1e206"],["/hymns/come-to-us/index.html","d5e4696a5d220d598ef7aa1b6c329b3f"],["/hymns/count-your-blessings/index.html","32e9fb0557cae664826135d1c3c90db5"],["/hymns/daily-daily-sing-to-mary/index.html","5c6c099a29fb3547594e3280ca03b001"],["/hymns/deep-calls-to-deep/index.html","1b62242ca8e988e8756f3ef93b3970e8"],["/hymns/do-this-in-memory-of-me/index.html","654c450625eaade4fc975bd51ebd9a55"],["/hymns/enter-his-gates/index.html","99dfc50ead954ee768bdd68bd6d57bf8"],["/hymns/every-morning/index.html","49322b44c9159d53a5424136e1e58e06"],["/hymns/father-we-adore-you/index.html","796eef250351cb70b516d0708f63fc6e"],["/hymns/find-us-ready/index.html","86986f9df10f40392ab1ec228b0cdb12"],["/hymns/from-the-depths/index.html","6ea3c4412d63836d7627702a73629e52"],["/hymns/give-me-oil-in-my-lamp/index.html","a009647c001f2a72a76e0fe5c9645cfe"],["/hymns/give-thanks/index.html","d1b1b19f5fcd168430286717292dc740"],["/hymns/glory-and-praise-to-our-god/index.html","32547ea0d814b20be68e48ebe2612cae"],["/hymns/go-go-into-the-world/index.html","e9f9346c9df573cd9b14ba641570171c"],["/hymns/go-the-mass-is-ended/index.html","09b94bcbe4499e8f05ff8b016d216506"],["/hymns/god-is-good-to-me/index.html","9a5ada298f2d46df645e314764f3dd4f"],["/hymns/god-is-so-good/index.html","bf4e1765defd9e91edbfb589d2d065ee"],["/hymns/great-indeed-are-your-works/index.html","0b55105b887588f5b3f4499c0e1d3a88"],["/hymns/great-things-happen/index.html","c3fe541d29b5e5047909e569b562c515"],["/hymns/greater-love-and-friendship/index.html","bd822edbd37b8beef8517065a404167d"],["/hymns/hail-holy-joseph-hail/index.html","62bd1d0ca915f5c89934c7b917125e26"],["/hymns/hail-mary-full-of-grace/index.html","c2724d02e51d4a2682608a152fae8e7d"],["/hymns/hail-to-thee-true-body-sprung/index.html","6423e4e75f42117c707bc54fe4d8a4b7"],["/hymns/he-is-lord/index.html","50cda1b0ef229ea047e250fd3858007a"],["/hymns/hide-me-in-the-hollow-of-your-loving-hand/index.html","24e50e5753ee285776447fdd1075783e"],["/hymns/his-name-is-higher/index.html","fa0051c904687fc008dc9e6371730df5"],["/hymns/holy-god-we-praise-thy-name/index.html","a0cfbf2596320010cbb75ef9c7d3081b"],["/hymns/holy-holy-holy-lord-god-almighty/index.html","cea98f21bae90b37cb9cd28789416cfc"],["/hymns/holy-virgin/index.html","c9c50637c805dab29b64801bd06e5e4d"],["/hymns/how-i-rejoiced-when-i-heard-them-say/index.html","a53d8d02a03b2aca67470bc43d57fa68"],["/hymns/how-lovely-is-your-dwelling-place-o-lord/index.html","827c7dec2979ca08ed31f09fcc8ec495"],["/hymns/i-am-the-bread-of-life/index.html","b4c259599d083705b77b0604c3b18036"],["/hymns/i-am-the-light/index.html","65dee26b6d4033b94f85a3686c354505"],["/hymns/i-dare-not-sing/index.html","37412513e6f8a32a814561245c2a9c04"],["/hymns/i-give-my-hands/index.html","9e2d3c4734c85e215928033e71ea6558"],["/hymns/i-have-decided/index.html","663e31e684951a389ccf4ac918993ce7"],["/hymns/i-now-no-longer-live/index.html","82c71a11135f5299464859529162cdaf"],["/hymns/i-rejoiced-when-i-heard/index.html","6d4bdac2373fc04cab0a66ab8bd55498"],["/hymns/i-will-play/index.html","44c1e3ff57d42abd5401e0a398de6e16"],["/hymns/i-will-sing-of-the-mercies/index.html","4e0f7d87833a073141aef0901df673fa"],["/hymns/if-you-wish-to-be-my-disciple/index.html","35f7b6ca12a2adc04033d3821b464df4"],["/hymns/ill-turn-my-steps/index.html","4afd182e4ab5d6a74ef67120ea0befc6"],["/hymns/in-his-time/index.html","e1ff26f499cc9b55b869e49d2c716f67"],["/hymns/in-the-lord-is-my-hope/index.html","9b41ff647abb2c48ed643d8825dd2309"],["/hymns/into-your-hands-we-commend-our-spirit/index.html","bed5c8941cbf59b9f3737597c3ef381b"],["/hymns/it-was-six-days-before-the-passover/index.html","31e2a9c3a50ce909522a67e8a16e769b"],["/hymns/ive-wandered-far-away-from-god/index.html","7dea78ee20a543f62a26f8de19a27434"],["/hymns/jesus-always-loved-his-own/index.html","290a5fea9d8e995c7e647653bce60b7b"],["/hymns/jesus-my-lord-my-god-my-all/index.html","080858d66b9791f1007e0b82b384da1c"],["/hymns/jesus-you-are-my-salvation/index.html","f279198f8b32969d1e1ba382ef21bd00"],["/hymns/jesus-youre-the-sweetest-name-of-all/index.html","e56004612266a6ebc0ad57424d7e0e00"],["/hymns/just-to-fix-our-eyes-on-jesus/index.html","1ee4b3151e86cff37770ce0f4d175998"],["/hymns/lay-your-hands/index.html","3678e15229a134f41b55e6318ddefdc2"],["/hymns/let-it-be-done/index.html","6b6c1acfe5f98ff8b2554cc0b6e915a9"],["/hymns/let-us-bow-in-adoration/index.html","5b8f83ddd490d9186366c5250ec0b28c"],["/hymns/listen-to-your-people/index.html","3ed08eecd4e3c6ee3907dbd916d1f51e"],["/hymns/living-waters-flow-on/index.html","ca84d48b535e7ced9a8d3b77140d1d75"],["/hymns/lord-make-me-like-you/index.html","62b291d9169d29c870c4c8dcdeb3a6cd"],["/hymns/lose-yourself-in-me/index.html","1c081e0d099d7e8ca67ffaf02a8fc749"],["/hymns/love-has-captured-the-night/index.html","8f820862f1635be575d257bb4cf8a8c7"],["/hymns/make-me-a-servant/index.html","2edfc1111db94f9e4d6925c103f1541d"],["/hymns/make-me-an-instrument/index.html","ff952ebe6d2450f19e00def339af40dc"],["/hymns/mary-from-thy-sacred-image/index.html","26a37c7ad8c0bc323952699155acd382"],["/hymns/mother-dear-o-pray-for-me/index.html","1f098506c8ce651d60f0f3c5701ea97c"],["/hymns/mother-dearest-mother-fairest/index.html","6b96d4084cb7377125937474e6897cb7"],["/hymns/mother-of-god-plead-with-your-son/index.html","66235ecfd0467c8591a0d2882aa47768"],["/hymns/my-lord-he-died-for-a-kingdom/index.html","dc88e07524effb80b9c775375286c2f6"],["/hymns/my-soul-rejoices/index.html","87da06c7af19bbbbb2dae6da12e32787"],["/hymns/nearer-my-god-to-thee/index.html","c69deccd6e6ab33c1f5b41892ead13d3"],["/hymns/o-cross-erected/index.html","a8a5cce30df9371fced56a836f3b54f9"],["/hymns/o-sacrament-most-holy/index.html","4f604e21ed70fc6d5a60c3b082326be9"],["/hymns/on-a-hill-far-away/index.html","3b1bcec0aa6f5a77f127c89abd49b50a"],["/hymns/our-hearts-were-made-for-you-lord/index.html","af5736e1569eda07e92614557dcba3e1"],["/hymns/praise-him-praise-him/index.html","01ba477d86cef6981f7245810874e2d2"],["/hymns/ready-the-way/index.html","09fbb227b2d1ea3bd845cbb73a0cde1e"],["/hymns/rejoice-evermore/index.html","9adbe778fd5c87adae31164155a5e644"],["/hymns/shepherd-of-my-soul/index.html","0c35735c8bb43cf18a3975e4dbf7c992"],["/hymns/sing-life-sing-love-sing-jesus/index.html","55a2182e32fc859d3ce26e94ee456602"],["/hymns/sing-my-tongue/index.html","e94cbb34e54116c4824e7a8bc095e92d"],["/hymns/soul-of-my-saviour/index.html","112ab6a4a5e46f2c4e4c76d623a4efed"],["/hymns/sweet-heart-of-jesus/index.html","858d69bee97ecc5a566afdf060cef6a3"],["/hymns/take-our-bread/index.html","57bd089e29c3040874f189a995795d5b"],["/hymns/thank-you-lord-for-all-youve-done/index.html","b0762ac4a8ec0e47117773d612640315"],["/hymns/thank-you-o-lord-your-love-is-boundless/index.html","379fd481d19485f587a150034bc3468b"],["/hymns/thanks-be-to-god/index.html","7be88119e46ef4f22646bfc8b2a90732"],["/hymns/the-cup-of-blessing-that-we-raise/index.html","0bafcd211cc54b63a1a8c41ddede66eb"],["/hymns/the-lord-is-my-shepherd/index.html","3065729dc4fd3bef24dc63da0c6f67b1"],["/hymns/the-more-we-hear/index.html","7b77996fda9e51a49c856386d70d8c2e"],["/hymns/the-saviour-is-waiting/index.html","35d864b5a647c53156a45a60cfb65384"],["/hymns/the-steadfast-love/index.html","c1b2f12862daad8ce8838e8a63655165"],["/hymns/then-sings-my-soul/index.html","fc4230de43c6e52b569865b72335c6ac"],["/hymns/these-forty-days/index.html","31ea12052baeeb6d067c1e1c2ab274f2"],["/hymns/though-the-mountains-may-fall/index.html","6f4ebc9d49808221b36f1cc642d41a38"],["/hymns/walk-with-me-o-my-lord/index.html","df6acb8d81d3b53f90911abd5e906719"],["/hymns/water-water-and-the-spirit/index.html","1cabe65a4a1abd29f021e047ab98e359"],["/hymns/we-offer-you-o-lord-divine/index.html","ae6c6e310aebaf93f9b8c806e4502269"],["/hymns/we-see-the-troubles-in-our-lives/index.html","d2eb1c24586dfd1de805c6ffd209cc20"],["/hymns/we-want-to-give-you-thanks-lord/index.html","796bf8e13d17c5a75c9d98062f4bcfe9"],["/hymns/whatsoever-you-do-to-the-least-of-my-people/index.html","e6a1269be2a6d25d9f07d83a2183b89b"],["/index.html","b823f28cc5f82a3a966bce53480ea192"],["/launcher-icon-2x.png","cca0ab0996bddc2c0cc0e49729f7052c"],["/launcher-icon-3x.png","dcb209d58dc0df6f8092e0923caccc4e"],["/launcher-icon-4x.png","0f4d10f49de1df7e97c5dad8fe75486a"],["/order-of-mass/index.html","40ea38c19f096f773ec5a8630391bbdd"],["/public/css/lanyon.css","695bf0024f2c0135ecd2e28e3f8b648b"],["/public/css/poole.css","873c679adf2c9f354d10fcbfd3453cde"],["/public/css/site.css","444365248c5e3aa0a97b278539584782"],["/public/css/syntax.css","0d3adf5d678394205b2209489843b41e"],["/service-worker-registration.js","a32718ebced9b80580b3fe5fc6495789"],["/service-worker.js","19fa2bfa7a9500d302636df641e8c4d7"]];
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







