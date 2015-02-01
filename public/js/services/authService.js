angular.module('app').factory('auth', ['$http', '$q', 'API_URL', function ($http, $q, API_URL) {
	return {
		login: function (email, password) {
			var deferred = $q.defer();

			$http.post(API_URL + '/login', {email: email, password: password}).success(function (response) {
				deferred.resolve(response);
			}).error(function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}
	};
}]);
