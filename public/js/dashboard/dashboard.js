(function () {
	angular
		.module('app.dashboard')
		.controller('DashboardCtrl', ['$scope', 'stations', function ($scope, stationsService) {
			stationsService.getStations(10, 1).then(function (response) {
				$scope.stations = response.data;
			});
		}]);
}());
