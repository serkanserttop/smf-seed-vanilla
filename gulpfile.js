var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var order = require('gulp-order');

var paths = {
  scripts: [
    'smf/libs/third-party/*.js',
    'smf/libs/*.js',
    'smf/pages/*.js'
  ]
};

gulp.task('build', function(){
  return gulp.src(paths.scripts, { base: '.' })
    .pipe(uglify())
    .pipe(order(paths.scripts))
    .pipe(concat('dist/main.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['build']);
});

gulp.task('default', ['watch']);