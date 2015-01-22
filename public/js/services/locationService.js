window.appServices.factory('location', ['$http', '$q', function ($http, $q) {
	var navigator = window.navigator;

	var o = {
		location: []
	};

	o.getUserLocation = function () {
		var deferred = $q.defer();

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				deferred.resolve(position.coords);
			}, function (error) {
				deferred.reject(error);
			});
		} else {
			deferred.reject('Geolocation is not supported.');
		}
		return deferred.promise;
	};

	return o;
}]);
