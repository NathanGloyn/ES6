var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('webpack-stream');
var serve = require('gulp-serve');

gulp.task('build', function() {
	return gulp.src(['app/**/*.html', 'app/**/*.css'])
			   .pipe(gulp.dest('build'));
});

gulp.task('serve',['default'], serve(['build']));

gulp.task('default',['build'], function() {
	return gulp.src('app/js/entry.js')
			   .pipe(webpack(require('./webpack.config.js')))
			   .pipe(gulp.dest('build/js/'));
});