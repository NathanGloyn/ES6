var gulp = require('gulp');
var clean = require('gulp-clean');
var babel = require('gulp-babel');
var Builder = require('systemjs-builder');
var webserver = require('gulp-webserver');

gulp.task('clean', function(){
    return gulp.src('build/')
               .pipe(clean());
});

gulp.task('build',['clean'], function() {
	return gulp.src(['app/**/*.html', 'app/**/*.css'])
			   .pipe(gulp.dest('build'));
});

gulp.task('serve',['default'],function(){
	gulp.src('build')
		.pipe(webserver({open:true}));
});

gulp.task('default',['build'], function(){
	var builder = new Builder('app/js','builder.config.js');
	builder.buildStatic('more-codes.js', 'build/js/bundle.js', { runTime: false, sourceMaps: true, minify: true }); 
});