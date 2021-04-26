const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const header = require('gulp-header');

const today = new Date().toLocaleDateString();
const pkg = require('./package.json');
const banner = [
	'/*!',
	' * JQL (JSON Query Language)',
	' * <%= pkg.description %>',
	' * @version    : <%= pkg.version %>',
	' * @author     : <%= pkg.author %>',
	' * @repository : <%= pkg.repository.url %>',
	' * @built      : <%= today %>',
	' * @license    : <%= pkg.license %>',
	' */',
	''
].join('\n');

gulp.task('build', function (done) {
	// Package info

	
	// Gulp it!
	gulp.src('./src/*.js')
		// Full
		.pipe(header(banner, { pkg : pkg, today: today } ))
		.pipe(gulp.dest('./dist'))
		.on('end', function(){ 
			console.log(`[${today}] [Gulp] JQL Build - Full \t✅`); 
			done();
		})
		// Minified
		.pipe(uglify({
			mangle: {
				toplevel: true
			},
			compress: {
				sequences:    true,
				dead_code:    true,
				conditionals: true,
				booleans:     true,
				unused:       true,
				if_return:    true,
				join_vars:    true,
				drop_console: false
			}
		}))
		.pipe(header(banner, { pkg : pkg, today: today } ))
		.pipe(rename("JQL.min.js"))
		.pipe(gulp.dest('./dist'))
		.on('end', function(){ 
			console.log(`[${today}] [Gulp] JQL Build - Minify \t✅`); 
			done();
		});
});

gulp.watch('./src/*.js', gulp.series('build'))

gulp.task('default', gulp.series('build'));