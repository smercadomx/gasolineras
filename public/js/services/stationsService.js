angular.module('app').factory('stations', ['$http', '$q', 'API_URL', function ($http, $q, API_URL) {
	return {
		getStations: function (limit, page) {
			var deferred = $q.defer();

			$http.get(API_URL + '/stations?limit=' + limit + '&page=' + page).success(function (response) {
				deferred.resolve(response);
			}).error(function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		},

		getNearStations: function (latitude, longitude) {
			var serviceUrl = API_URL + '/nearstations?longitude=' +
				longitude + '&latitude=' + latitude + '&distance=1000';

			return $http.get(serviceUrl);
		},

		getStationById: function (stationId) {
			var deferred = $q.defer();

			$http.get(API_URL + '/stations/' + stationId).success(function (station) {
				deferred.resolve(station);
			});

			return deferred.promise;
		}
	};
}]);
