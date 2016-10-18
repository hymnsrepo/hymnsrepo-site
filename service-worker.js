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

var precacheConfig = [["/404.html","2d847c5599bdef7ea0286aa132215091"],["/about/index.html","2040078bbcb2247c6eb9ae941810a5f8"],["/gulpfile.js","93d7d2362dd62fcf3504089b008b37db"],["/hymns/a-new-commandment/index.html","d64fb94f3b8b1b8076ab0c3752d98ef2"],["/hymns/abide-with-me/index.html","e71c65205363042b7db42a12bd284392"],["/hymns/above-all/index.html","be46234b9398eebdf18293ed7318bcb3"],["/hymns/accept-almighty-father/index.html","9b5d6e03c70d6e96ff1e17ba575b15a9"],["/hymns/all-over-the-world/index.html","43a95f77ac73fe93229f8538cd8a4375"],["/hymns/all-peoples-of-the-universe/index.html","2c2fbf931cb8afdc0fae5c609bb5973b"],["/hymns/all-that-i-am/index.html","dda5c7be491357bec6ebda6ab9b61395"],["/hymns/all-the-ends-of-the-earth/index.html","572a438331d3e05fc63e2c9d2f7e5916"],["/hymns/all-the-way-my-saviour-leads-me/index.html","489f221bbd43bebcd44f12a208dce689"],["/hymns/all-to-jesus-i-surrender/index.html","972d3bdfce65c829f2299ec377db0bff"],["/hymns/all-you-children-of-peace/index.html","b26e2da3337204d779479ac29fcd5a30"],["/hymns/amazing-grace/index.html","062aa281ee3842c7292c254a943ead6b"],["/hymns/angels-we-have-heard-on-high/index.html","65ebfe4e1c33f0bd81077312907e8023"],["/hymns/as-i-kneel-before-you/index.html","8ef5914091d2a26525409785ff1d8913"],["/hymns/as-the-deer/index.html","56f1d7555493055db682cc7e4929c341"],["/hymns/as-we-gather-may-your-spirit-work-within-us/index.html","e956838c19d68818bed126205d1ffd8c"],["/hymns/at-the-cross-her-station-keeping/index.html","50630e0ff21c1e00a3c2c8bf8d7bbb6f"],["/hymns/at-the-name-of-jesus/index.html","44b192a550750e37ce059c95983f3151"],["/hymns/at-this-time-of-giving/index.html","790b6437829ea658223957438ef38a43"],["/hymns/away-in-a-manger/index.html","a9c1944cfcb91653257c8453e432e9bf"],["/hymns/be-exalted/index.html","95d8801a2d3189ea8a1ae8e48d88a497"],["/hymns/be-not-afraid-i-go-before-you-always/index.html","355ceca7821e56268dcf2c5f6e4eab0c"],["/hymns/be-still-and-know/index.html","7bca6e5ac8b0d3bc215d3bfba28fc263"],["/hymns/be-still-for-the-presence-of-the-lord/index.html","e27f46b8ea898a0371a95f62cfcdd5c7"],["/hymns/be-thou-my-vision/index.html","2195a0146107f4637f1fec6f9b21b987"],["/hymns/beginning-today/index.html","5e41dbdae283afa7da2ac453d8fb1b17"],["/hymns/bestir-thy-power/index.html","109034a8f27970f3e00e9aa5d6c929ce"],["/hymns/bind-us-together/index.html","d0e55bbaa97f689d62d37ce39655d097"],["/hymns/blessed-are-they-who-are-poor-in-spirit/index.html","ef2b26749d0eef106f115870706dc7b9"],["/hymns/blessed-assurance/index.html","a5857ac65ec4365e00d30fccd2990c1b"],["/hymns/blest-are-they/index.html","71041c51d1e9251123e58f6b26d00a5f"],["/hymns/blest-are-you-lord/index.html","a51b4c542306122ba5107baf3be7543e"],["/hymns/bread-that-was-sown/index.html","9901ba2d7fd1b3803159c849be2fc501"],["/hymns/cause-me-to-come/index.html","83105a4ecf41b93db85675bb8e4fc18f"],["/hymns/celebrate-god/index.html","3febad11847e2ce165d02d99ae344404"],["/hymns/christ-be-our-light/index.html","1266330df71ec937157e602c3f34ddaf"],["/hymns/colours-of-day/index.html","330548cba93661887dc106885a2e0bcb"],["/hymns/come-back-to-me/index.html","ef0983bfeb0d25a7c5aa7932fbb24e11"],["/hymns/come-come-emmanuel/index.html","93980cc33ad3ceee02bd15f0274ba49c"],["/hymns/come-holy-ghost/index.html","9ea2f172f69b399cfb2837c3bbeb56c1"],["/hymns/come-in-pilgrim/index.html","97a9aab9b8d74677f72db96075d13ef7"],["/hymns/come-into-his-presence/index.html","f3cb1318232a7d8addd6f06a037893b2"],["/hymns/come-thou-long-expected-jesus/index.html","d999acc54339e2e577348a801fb7fb4d"],["/hymns/come-to-us/index.html","b40dab4ab73cf6deeb8b57e88dcb7e5b"],["/hymns/count-your-blessings/index.html","3c67af46cb187dc9a0da3edadc7a1bf6"],["/hymns/daily-daily-sing-to-mary/index.html","4cee2330db9fa0c4e0b60c3f4ccaebdf"],["/hymns/deep-calls-to-deep/index.html","9e1c2d0ec98c2b3717cda31a333f0d1b"],["/hymns/do-this-in-memory-of-me/index.html","95c589ffd60d0143b4a25ffe034ca565"],["/hymns/enter-his-gates/index.html","496d22b56d72bbe2195312512189396c"],["/hymns/every-morning/index.html","c7ef64d17846cd7a0357b5e58b8dd91f"],["/hymns/father-we-adore-you/index.html","ae8bdde8f1ea94356ddd77efce410bc3"],["/hymns/find-us-ready/index.html","a856a06add054b84dd80533d44f6aa9f"],["/hymns/from-the-depths/index.html","0d2ae35a568c02c1ef02f9b08edbf0d6"],["/hymns/give-me-oil-in-my-lamp/index.html","e25823536a1dad87b34dc9a50ce10b4d"],["/hymns/give-thanks/index.html","868e87f3a11944bf6235a36ffb983f36"],["/hymns/glory-and-praise-to-our-god/index.html","88c89ddb54a801b536e5a05cc17bf2be"],["/hymns/go-go-into-the-world/index.html","b0cc5b1e19e60efbe4bab39809d7c9a1"],["/hymns/go-the-mass-is-ended/index.html","2465b6fad710a6cc1dcb634ea0e63db8"],["/hymns/god-is-good-to-me/index.html","f7e2f42ccbb8823732e522db34825750"],["/hymns/god-is-so-good/index.html","27d324e6a36944527e50d2b07db81a9d"],["/hymns/great-indeed-are-your-works/index.html","5b208ce793d56b01e10b3e7067fda600"],["/hymns/great-things-happen/index.html","122b73b49156a1a3d248361039e514bd"],["/hymns/greater-love-and-friendship/index.html","02e1d966208980b7bc8a9a45a312481c"],["/hymns/hail-holy-joseph-hail/index.html","76d39cc7cd1978558687cf106e979b92"],["/hymns/hail-mary-full-of-grace/index.html","ca798b3c7524199d979a9eaa78911395"],["/hymns/hail-to-thee-true-body-sprung/index.html","8c609a291631f3ea813fb22590cd5712"],["/hymns/he-is-lord/index.html","a481c5e4d67f9c8337cd06d93ba42a01"],["/hymns/hide-me-in-the-hollow-of-your-loving-hand/index.html","db2234e3a854de5d865b7055fb179506"],["/hymns/his-name-is-higher/index.html","09808c60b76558deab72562e69e8513e"],["/hymns/holy-god-we-praise-thy-name/index.html","74c2a8db73231dde19c626848427ae9a"],["/hymns/holy-holy-holy-lord-god-almighty/index.html","de1431d383a84e5246f74d9e34bdb64a"],["/hymns/holy-virgin/index.html","891dadd0da5d1514b501597861b4c9ba"],["/hymns/how-i-rejoiced-when-i-heard-them-say/index.html","1b811106dca2c337e2592453f63fcf1b"],["/hymns/how-lovely-is-your-dwelling-place-o-lord/index.html","4f167abcd7c6800fff5fb5d382bbf777"],["/hymns/i-am-the-bread-of-life/index.html","e77010dc2a0197d30f257cfea5967083"],["/hymns/i-am-the-light/index.html","b64dae9624613ca4d94a01762f839ab7"],["/hymns/i-dare-not-sing/index.html","699c6542549e0773fbb9bc9793c49e10"],["/hymns/i-give-my-hands/index.html","7554555091b036c6b54d88a5f131422c"],["/hymns/i-have-decided/index.html","eaf57e940b905fcc1c11532b76f552c1"],["/hymns/i-now-no-longer-live/index.html","e1f13c6afe55b4e72e0ff18ec2919388"],["/hymns/i-rejoiced-when-i-heard/index.html","07c0be41349119be856803c9a3bf106c"],["/hymns/i-will-play/index.html","1475ef647f882cf0150cbc71d4c3df4d"],["/hymns/i-will-sing-of-the-mercies/index.html","921cdfd04ac4ecce93a01392fbed4323"],["/hymns/if-you-wish-to-be-my-disciple/index.html","5924be2337bf74a9384c251408397aa9"],["/hymns/ill-turn-my-steps/index.html","110b2a8db0aebaee251f832cb7c1b80c"],["/hymns/in-his-time/index.html","c5ef4f0d211530b93b634309cc398fdd"],["/hymns/in-the-lord-is-my-hope/index.html","601c14199fb1166e8a4ddb46cd2ef90b"],["/hymns/into-your-hands-we-commend-our-spirit/index.html","5351b2cd4de7d840a35fe9016e5b96d1"],["/hymns/it-was-six-days-before-the-passover/index.html","357f5eda30ebbb3f70ba1a3c93ab0166"],["/hymns/ive-wandered-far-away-from-god/index.html","0dbcb1fd81a439291e9ad40d53ad402f"],["/hymns/jesus-always-loved-his-own/index.html","a4d142ef11c75cc8b87c72ce2073f27a"],["/hymns/jesus-my-lord-my-god-my-all/index.html","450e9bf1224742382abee458283c8643"],["/hymns/jesus-you-are-my-salvation/index.html","fd5cd705a491855c2c52be336ec60c63"],["/hymns/jesus-youre-the-sweetest-name-of-all/index.html","9ade8c55079e8cae2e7651dcee4e3b7d"],["/hymns/just-to-fix-our-eyes-on-jesus/index.html","bf51b06f0e50c0d1c3b41551b71a9a8b"],["/hymns/lay-your-hands/index.html","b570215d03c192996724c60e634120d0"],["/hymns/let-it-be-done/index.html","27a3a79d57035eead2b8c761822dbc68"],["/hymns/let-us-bow-in-adoration/index.html","51614e40f4a8db6cc85e02c45d1a5fb5"],["/hymns/listen-to-your-people/index.html","d0c4f99cc4841253df73d50c605fcfbf"],["/hymns/living-waters-flow-on/index.html","d1d705ae9ba30156722ce10b56d0c1cf"],["/hymns/lord-make-me-like-you/index.html","93ffa6af9fc605f60c29189730c58e7e"],["/hymns/lose-yourself-in-me/index.html","29ccf83df541f9eb718801df4866765e"],["/hymns/love-has-captured-the-night/index.html","ec32de4856dec538e2623240dc5280fd"],["/hymns/make-me-a-servant/index.html","46694df00464c29fd553144e6a45f6e2"],["/hymns/make-me-an-instrument/index.html","2a6563fc8c64647330938dc8c41c08f8"],["/hymns/mary-from-thy-sacred-image/index.html","e24fce127f1ad9a6829579a72724b6eb"],["/hymns/mother-dear-o-pray-for-me/index.html","d5a700c03234bbef6fa8759c8945b3c5"],["/hymns/mother-dearest-mother-fairest/index.html","fbece8cc2da61871f2d9ff940b4e7108"],["/hymns/mother-of-god-plead-with-your-son/index.html","6b4be91504d6ebaaa0c4ac1d55ebaa9a"],["/hymns/my-lord-he-died-for-a-kingdom/index.html","5b4476592ed916392fb66450595c6097"],["/hymns/my-soul-rejoices/index.html","fc4d07a24a08a66f3b803787eb1121ea"],["/hymns/nearer-my-god-to-thee/index.html","5ccf2837780687440c7838dd00caf00e"],["/hymns/o-cross-erected/index.html","6562f0b805ec292058711036de99dfe1"],["/hymns/o-maiden-will-you-be/index.html","c099e6e0a95f9cf2009cd36a24779fa8"],["/hymns/o-sacrament-most-holy/index.html","5276091eff974d7efec208523403b139"],["/hymns/on-a-hill-far-away/index.html","79a7168e0f444f001e88c365db9f6a8f"],["/hymns/our-hearts-were-made-for-you-lord/index.html","785b4443ea7f12a11e5bcae9517a3eda"],["/hymns/praise-him-praise-him/index.html","0fc3ef84292c53755c07bd55544eb92e"],["/hymns/ready-the-way/index.html","710f252259b834a9f6a80f951054beb5"],["/hymns/rejoice-evermore/index.html","ba94856897ce26777741b44e0ef4bda7"],["/hymns/shepherd-of-my-soul/index.html","f5009c5bd7212e6e375ea50d8a4f1d4a"],["/hymns/sing-life-sing-love-sing-jesus/index.html","fc50a583aea14d55686b7cc5e38cab8e"],["/hymns/sing-my-tongue/index.html","6892444b88149191a03e5ed2a66d5435"],["/hymns/soul-of-my-saviour/index.html","08414ae5d6dc8d9c4c4ca94b5d7aa4b4"],["/hymns/sweet-heart-of-jesus/index.html","bc2b3c6156ce07f784cba280086f0865"],["/hymns/take-our-bread/index.html","91daddb12508c6307f23bd5d5bb30f74"],["/hymns/thank-you-lord-for-all-youve-done/index.html","6a19e201c0d61e84d4ba6041cdde9cc0"],["/hymns/thank-you-o-lord-your-love-is-boundless/index.html","862339c6738da7142c38f839048e2ceb"],["/hymns/thanks-be-to-god/index.html","f8dddf230fc2b5a9dc08c86c7120d670"],["/hymns/the-cup-of-blessing-that-we-raise/index.html","edbf490a78244a1a2e22f56716a01174"],["/hymns/the-lord-is-my-shepherd/index.html","cbe3b848504f75718140331ad1e02658"],["/hymns/the-more-we-hear/index.html","f03a7c5fb61375c1cfcab8cee5f7c335"],["/hymns/the-saviour-is-waiting/index.html","8c486c68c13e161fb0256cbfca7b216b"],["/hymns/the-steadfast-love/index.html","e466fb0493faf3a76b9ddb74934dfb7e"],["/hymns/then-sings-my-soul/index.html","8ae0ba6a6ce7e7a5783dc46e32afcc06"],["/hymns/these-forty-days/index.html","3403d8e740b0ce51e7658014d30a645d"],["/hymns/though-the-mountains-may-fall/index.html","167ebff51686a78283aedff7f7b41afb"],["/hymns/walk-with-me-o-my-lord/index.html","bc7bc55be1fab2b6d85faf298de92184"],["/hymns/water-water-and-the-spirit/index.html","3e651f1b57a17381a2b101f362d89306"],["/hymns/we-offer-you-o-lord-divine/index.html","178ac8c8e64a5edaae7c1c6d4e2c0fa9"],["/hymns/we-see-the-troubles-in-our-lives/index.html","bffa3e6cc7d501532db191f75ab0f4b6"],["/hymns/we-want-to-give-you-thanks-lord/index.html","c2a6f3fd751309ee0cf29ef92bd09577"],["/hymns/whatsoever-you-do-to-the-least-of-my-people/index.html","366ae8a10b6cafa68cb21613b60a798b"],["/index.html","41df0d28d7eff1bd4d8fa06a97244509"],["/launcher-icon-2x.png","cca0ab0996bddc2c0cc0e49729f7052c"],["/launcher-icon-3x.png","dcb209d58dc0df6f8092e0923caccc4e"],["/launcher-icon-4x.png","0f4d10f49de1df7e97c5dad8fe75486a"],["/order-of-mass/index.html","41861e80f427fb49e612d17f4c3bd718"],["/public/css/lanyon.css","695bf0024f2c0135ecd2e28e3f8b648b"],["/public/css/poole.css","873c679adf2c9f354d10fcbfd3453cde"],["/public/css/site.css","444365248c5e3aa0a97b278539584782"],["/public/css/syntax.css","0d3adf5d678394205b2209489843b41e"],["/service-worker-registration.js","a32718ebced9b80580b3fe5fc6495789"],["/service-worker.js","871c1a89480eaca79b81ca452f928483"]];
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







