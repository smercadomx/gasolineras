window.appServices.factory('location', ['$http', '$q', '$window', function ($http, $q, $window) {
	return {
		getUserLocation: function () {
			var deferred = $q.defer();

			if ($window.navigator.geolocation) {
				$window.navigator.geolocation.getCurrentPosition(function (position) {
					deferred.resolve(position.coords);
				}, function (error) {
					deferred.reject(error);
				});
			} else {
				deferred.reject('Geolocation is not supported.');
			}

			return deferred.promise;
		}
	};
}]);
