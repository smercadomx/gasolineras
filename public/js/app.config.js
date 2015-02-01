angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('nearstations', {
			url: '/nearstations',
			templateUrl: 'js/nearstations/near-stations.html',
			controller: 'NearStationsCtrl'
		})
		.state('home', {
			url: '/',
			templateUrl: 'js/home/home.html',
			controller: 'HomeCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'js/login/login.html',
			controller: 'LoginCtrl'
		});

	$urlRouterProvider.otherwise('/');
})
.constant('API_URL', 'http://localhost:3000');
