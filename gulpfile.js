const gulp = require('gulp');
const workbox = require('workbox-build');
const ghPages = require('@justeat/gulp-gh-pages');

gulp.task('generate-sw', () => {
  return workbox.generateSW({
    cacheId: "hymnsrepo",
    globDirectory: "./public",
    globPatterns: [
        "**/*.{js,json,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2,otf}"
    ],
    swDest: "./public/sw.js",
    modifyURLPrefix: {
        "": "/"
    },
    clientsClaim: true,
    skipWaiting: true,
    ignoreURLParametersMatching: [/./],
    offlineGoogleAnalytics: true,
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MiB
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com/,
        handler: "CacheFirst",
        options: {
            cacheName: "google-fonts",
            expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30
            },
        },
      },
    ],
  }).then(({warnings}) => {
    // In case there are any warnings from workbox-build, log them.
    for (const warning of warnings) {
      console.warn(warning);
    }
    console.info('Service worker generation completed.');
  }).catch((error) => {
    console.warn('Service worker generation failed:', error);
  });
});
 
gulp.task('deploy', () => 
  gulp.src('./public/**/*').pipe(ghPages())
);
