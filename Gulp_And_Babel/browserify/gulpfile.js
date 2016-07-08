var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var serve = require('gulp-serve');

gulp.task('clean', function(){
    return gulp.src('build/')
               .pipe(clean());
});

gulp.task('build', ['clean'], function(){
    return gulp.src(['app/*.html'])
           .pipe(gulp.dest('build'));
});

gulp.task('serve',['default'], serve(['build']));

gulp.task('default', ['build'], function () {
    var bundler = browserify({
        entries: 'app/js/entry.js',
        debug: true
    });
    bundler.transform(babelify);

    bundler.bundle()
        .on('error', function (err) { console.error(err); })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify()) // Use any gulp plugins you want now
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('build/'));
});
