window.appServices.factory('map', ['$http', '$q', function ($http, $q) {
	var google = window.google;

	function Map(mapDivElement, centerLocation) {
		this.map = new google.maps.Map(mapDivElement, {
			zoom: 14,
			center: centerLocation,
			mapTypeControl: false,
			navigationControlOptions: {
				style: google.maps.NavigationControlStyle.SMALL
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});

		this.directionsRenderer = new google.maps.DirectionsRenderer({
			'draggable':false
		});

		this.directionsRenderer.setMap(this.map);

		this.directionsService = new google.maps.DirectionsService();
	}

	Map.prototype.traceRoute = function (startLocation, endLocation) {
		var self     = this,
			deferred = $q.defer();

		this.directionsService.route({
			'origin': startLocation,
			'destination': endLocation,
			'travelMode': google.maps.DirectionsTravelMode.DRIVING
		}, function(res,sts) {
			if (sts === 'OK') {
				self.directionsRenderer.setDirections(res);

				deferred.resolve();
			} else {
				deferred.reject('Couldn\'t provide a direction');
			}
		});

		return deferred.promise;
	};

	return Map;
}]);
