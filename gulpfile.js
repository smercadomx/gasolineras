var gulp  = require('gulp'),
	karma = require('karma').server,
	sass  = require('gulp-sass');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
	karma.start({
		configFile: __dirname + '/karma.conf.js'
	}, function () {
		done();
	});
});

gulp.task('sass', function () {
	return gulp.src('./sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public/css'));
});
