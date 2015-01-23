window.appControllers.controller('NearStationsCtrl',
	['$scope', 'stations', 'location', 'map', function ($scope, stations, location, Map) {

	$scope.loading = true;

	location.getUserLocation().then(function (location) {
		var userLocation = new window.google.maps.LatLng(location.latitude, location.longitude),
			map          = new Map(document.getElementById('map'), userLocation);

		stations.getNearStations(location.latitude, location.longitude).then(function (stations) {
			var nearestStationCoords   = stations.data[0].location.coordinates,
				nearestStationLocation =
					new window.google.maps.LatLng(nearestStationCoords[1], nearestStationCoords[0]);

			map.traceRoute(userLocation, nearestStationLocation).then(function () {
				console.log('route has been traced.');
			}, function (error) {
				console.log(error);
			});

			$scope.loading = false;
		}, function () {
			$scope.loading = false;
		});
	}, function () {
		$scope.loading = false;
	});
}]);
