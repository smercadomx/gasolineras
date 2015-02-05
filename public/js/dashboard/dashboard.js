(function () {
	var Dashboard = function (stationsService) {
		var vm = this;

		stationsService.getStations(10, 1).then(function (response) {
			vm.stations = response.data;
		});
	};

	angular
		.module('app.dashboard')
		.controller('DashboardCtrl', ['stations', Dashboard]);
}());
