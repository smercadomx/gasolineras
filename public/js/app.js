(function (win) {
	'use strict';

	var app            = angular.module('app', ['ui.router', 'appControllers', 'appServices']),
		appControllers = angular.module('appControllers', []),
		appServices    = angular.module('appServices', []);

	app.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('nearstations', {
				url: '/nearstations',
				templateUrl: 'js/templates/near-stations.html',
				controller: 'NearStationsCtrl'
			})
			.state('home', {
				url: '/home',
				templateUrl: 'js/templates/home.html',
				controller: 'HomeCtrl'
			});

		$urlRouterProvider.otherwise('/home');
	});

	win.app            = app;
	win.appControllers = appControllers;
	win.appServices    = appServices;
}(window));
