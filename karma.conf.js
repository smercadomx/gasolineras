module.exports = function(config) {
	'use strict';

	config.set({
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// base path, that will be used to resolve files and exclude
		basePath: '.',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine', 'angular-filesort'],

		// list of files / patterns to load in the browser
		files: [
			'public/bower_components/angular/angular.js',
			'public/bower_components/angular-mocks/angular-mocks.js',
			'public/bower_components/swiftclick/js/libs/swiftclick.js',
			'public/js/**/*.js',
			'tests/**/*.js'
		],

		angularFilesort: {
			whitelist: [
				'public/js/**/*.js'
			]
		},

		// list of files / patterns to exclude
		exclude: [],

		// web server port
		port: 8080,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: [
			'PhantomJS'
		],

		// Which plugins to enable
		plugins: [
			'karma-phantomjs-launcher',
			'karma-jasmine',
			'karma-angular-filesort'
		],

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true,

		colors: true,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,
	});
};
