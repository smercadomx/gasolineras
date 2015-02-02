(function () {
	angular
		.module('app.login')
		.controller('LoginCtrl', ['$scope', 'auth', 'toaster', '$state', function ($scope, auth, toaster, $state) {
			$scope.login = function () {
				auth.login($scope.user.email, $scope.user.password).then(function (response) {
					if (typeof response.user !== 'undefined') {
						toaster.pop('success', 'Success', 'Successful login');
						$state.go('dashboard');
					} else if (typeof response.error !== 'undefined') {
						toaster.pop('error', 'Error', response.error);
					}
				}, function (error) {
					toaster.pop('error', 'System Error', 'Please try again later.');
				});
			};
		}]);
}());
