var gulp = require('gulp'),
  useref = require('gulp-useref'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-clean-css'),
  flatten = require('gulp-flatten'),
  replace = require('gulp-replace'),
  runSequence = require('run-sequence')
  del = require('del');


gulp.task('replace', function(){
  return gulp.src(['dist/static/css/combined.css'])
    .pipe(replace('url(../fonts', 'url(/static/fonts'))
    .pipe(replace('url(fonts', 'url(/static/fonts'))
    .pipe(gulp.dest('dist/static/css'));
});

gulp.task('bundle', function () {
  return gulp.src('dist/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'));
});


gulp.task('fonts', () => {
  return gulp.src('dist/static/**/*.{otf,ttf,woff,woff2}')
    .pipe(flatten())
    .pipe(gulp.dest('./dist/static/fonts'))
});


gulp.task('clean', function() {
  return del([
    'dist/static/plugins',
    'dist/static/css/**/*',
    'dist/static/js/**/*',
    '!dist/static/css/combined.css',
    '!dist/static/js/combined.js',
    '!dist/static/css/app.*.{css,map}',
    '!dist/static/js/app.*.{js,map}',
    '!dist/static/js/manifest.*.{js,map}',
    '!dist/static/js/vendor.*.{js,map}',
  ]);
});


gulp.task("default",(cb)=>{
  runSequence(
    'bundle',
    ['fonts', 'replace'],
    'clean',
    cb);
})
