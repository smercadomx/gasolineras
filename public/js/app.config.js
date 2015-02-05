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
			controller: 'HomeCtrl',
			controllerAs: 'vm'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'js/login/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'vm'
		})
		.state('dashboard', {
			url: '/admin',
			templateUrl: 'js/dashboard/dashboard.html',
			controller: 'DashboardCtrl',
			controllerAs: 'vm'
		});

	$urlRouterProvider.otherwise('/');
})
.constant('API_URL', 'http://localhost:3000');
