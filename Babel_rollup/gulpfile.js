var gulp = require('gulp'),
    rollup = require('rollup-stream'),
    babel = require('gulp-babel'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');


   gulp.task('default', function() {
        return rollup({ entry: 'app/js/entry.js'})
               .pipe(source('app.js'))
               .pipe(buffer())
               .pipe(babel())
               .pipe(gulp.dest('build')); 
   });