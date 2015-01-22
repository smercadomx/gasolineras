window.appControllers.controller('NearStationsCtrl',
	['$scope', 'stations', 'location', function ($scope, stations, location) {
	var google = window.google;

	$scope.loading = true;

	$scope.renderMap = function (mapDivElement, centerLocation) {
		var map = new google.maps.Map(mapDivElement, {
			zoom: 14,
			center: centerLocation,
			mapTypeControl: false,
			navigationControlOptions: {
				style: google.maps.NavigationControlStyle.SMALL
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});

		return map;
	};

	$scope.traceRoute = function (startLocation, endLocation) {
		var directionsRenderer = new google.maps.DirectionsRenderer({
			'draggable':false
		});

		directionsRenderer.setMap($scope.map);

		var directionsService = new google.maps.DirectionsService();
		directionsService.route({
			'origin': startLocation,
			'destination': endLocation,
			'travelMode': google.maps.DirectionsTravelMode.DRIVING
		}, function(res,sts) {
			if (sts === 'OK') {
				directionsRenderer.setDirections(res);
			}
		});
	};

	location.getUserLocation().then(function (location) {
		var userLocation = new google.maps.LatLng(location.latitude, location.longitude);

		$scope.map = $scope.renderMap(document.getElementById('map'), userLocation);

		stations.getNearStations(location.latitude, location.longitude).then(function (stations) {
			var nearestStationCoords   = stations.data[0].location.coordinates,
				nearestStationLocation =
					new google.maps.LatLng(nearestStationCoords[1], nearestStationCoords[0]);

			$scope.traceRoute(userLocation, nearestStationLocation);

			$scope.loading = false;
		}, function () {
			$scope.loading = false;
		});
	}, function () {
		$scope.loading = false;
	});
}]);
