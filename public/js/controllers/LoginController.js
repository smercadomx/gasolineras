angular.module('app').controller('LoginCtrl', ['$scope', 'auth', function ($scope, auth) {
	$scope.login = function () {
		auth.login($scope.user.email, $scope.user.password).then(function (response) {
			if (typeof response.user !== 'undefined') {
				$scope.message = 'Bienvenido';
			} else if (typeof response.error !== 'undefined') {
				$scope.message = response.error;
			}
		}, function (error) {
			console.log(error);
		});
	};
}]);
