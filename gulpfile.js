//TODO: get this actually working...or don't. The app IS tiny, after all. Low priority

var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var del = require('del')

/* minify */
gulp.task('minify', function() {
    gulp.src(['./server/**.js'])
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./build/'))
})

/* clean build folder */
gulp.task('clean', function () {
    del('./build/');
})

/* clean and minify */
gulp.task('build', ['clean', 'minify'])


