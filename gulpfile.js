var gulp  = require('gulp'),
	karma = require('karma').server;

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
