angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('nearstations', {
			url: '/nearstations',
			templateUrl: 'js/templates/near-stations.html',
			controller: 'NearStationsCtrl'
		})
		.state('home', {
			url: '/',
			templateUrl: 'js/templates/home.html',
			controller: 'HomeCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'js/templates/login.html',
			controller: 'LoginCtrl'
		});

	$urlRouterProvider.otherwise('/');
})
.constant('API_URL', 'http://localhost:3000');
