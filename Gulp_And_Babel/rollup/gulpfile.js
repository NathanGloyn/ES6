var gulp = require('gulp'),
    clean = require('gulp-clean'),
    rollup = require('rollup-stream'),
    babel = require('gulp-babel'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps')
    uglify = require('gulp-uglify'),
    serve = require('gulp-serve');

gulp.task('clean', function(){
    return gulp.src('build/')
               .pipe(clean());
});

gulp.task('build', function(){
    return gulp.src(['app/*.html'])
           .pipe(gulp.dest('build'));
});

gulp.task('serve',['default'], serve(['build']));

gulp.task('default', ['clean', 'build'] ,function() {
    return rollup({ 
                entry: 'app/js/entry.js',
                sourceMap: true
            })
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(babel())
            .pipe(uglify())   
            .pipe(sourcemaps.write('.')) 
            .pipe(gulp.dest('build/')); 
});