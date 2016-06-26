var gulp = require('gulp');
var print = require('gulp-print');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

gulp.task('js', function () {
	return gulp.src('app/**/*.js')
			   .pipe(sourcemaps.init({loadMaps:true})) 
               .pipe(babel())
			   .pipe(uglify())
			   .pipe(sourcemaps.write('.'))
			   .pipe(gulp.dest('build'));
});

gulp.task('libs', function() {
	return gulp.src([
				'node_modules/systemjs/dist/system.js',
				'node_modules/babel-polyfill/dist/polyfill.js'])
			   .pipe(gulp.dest('build/libs'));
});

gulp.task('build',['js','libs'], function() {
	return gulp.src(['app/**/*.html', 'app/**/*.css'])
			   .pipe(gulp.dest('build'));
});

gulp.task('serve',['build'],function(){
	gulp.src('build')
		.pipe(webserver({open:true}));
});
