window.appServices.factory('stations', ['$http', '$q', function ($http, $q) {
	var o = {
		stations: []
	};

	var convertToKm = function (meters) {
		return Math.round((meters / 1000) * 10) / 10;
	};

	o.getNearStations = function (latitude, longitude) {
		var serviceUrl = '/nearstations?longitude=' +
			longitude + '&latitude=' + latitude + '&distance=1000';

		return $http.get(serviceUrl).success(function (data) {
			var i = 0;

			for (; i < data.length; i++) {
				data[i].dist.distance = convertToKm(data[i].dist.distance);
			}

			angular.copy(data, o.stations);
		});
	};

	o.getStationById = function (stationId) {
		var deferred = $q.defer();

		$http.get('/stations/' + stationId).success(function (station) {
			deferred.resolve(station);
		});

		return deferred.promise;
	};

	return o;
}]);
