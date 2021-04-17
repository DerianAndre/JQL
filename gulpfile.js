var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');

gulp.task('default', function (done) {
	// Package info
	var today = new Date().toLocaleDateString();
	var pkg = require('./package.json');
	var banner = [
		'/*!',
		' * JQL',
		' * <%= pkg.description %>',
		' * @version    : <%= pkg.version %>',
		' * @author     : <%= pkg.author %>',
		' * @repository : <%= pkg.repository.url %>',
		' * @built      : <%= today %>',
		' * @license    : <%= pkg.license %>',
		' */',
		''
	].join('\n');
	
	// Gulp it!
	gulp.src('./src/*.js')
		.pipe(header(banner, { pkg : pkg, today: today } ))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify())
		.pipe(rename("JQL.min.js"))
		.pipe(gulp.dest('./dist'))
		.on('end', function(){ 
			console.log("Gulp task completed!"); 
			done();
		});
});