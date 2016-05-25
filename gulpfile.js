var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    templateCache = require('gulp-angular-templatecache')
;

//default task
gulp.task('default', ['build', 'watch']);
gulp.task('build', ['build-code', 'templates']);

//convert ES6 code
gulp.task('build-code', function() {
  return browserify({
    entries: ['./src/js/index.js']
  })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./www/js'))
  ;
});

gulp.task('templates', function () {

  return gulp.src('src/js/**/*.html')
    .pipe(templateCache('templates.js', {
      standalone: true
    }))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('watch', function () {
  // return gulp.src(['src/js/**/*.js', 'src/js/**/*.html'])
  //   .pipe(watch(''))
  gulp.watch(['src/js/**/*.js', 'src/js/**/*.html'], ['build'])
});