var gulp = require('gulp');
var browserSync = require('browser-sync');

var envProd = true;

gulp.task('browser-sync', function () {

  if (envProd == false) {
    browserSync.init({
      server: {
        baseDir: ""
      }
    });
  } else {
    browserSync.init({
      server: {
        baseDir: "./public"
      }
    });
  }

  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("js/*.js").on('change', browserSync.reload);
  gulp.watch("./img/*").on('change', browserSync.reload);
});



var gulpBundleFiles = require('gulp-bundle-files'),
  bundles = require('./bundle-files.json');

gulp.task('bundle', function () {
  gulpBundleFiles(bundles);
});


gulp.task('serve', ['browser-sync']);
