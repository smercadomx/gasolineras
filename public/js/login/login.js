(function () {
	var Login = function (auth, toaster, $state) {
		var vm = this;

		vm.login = function () {
			auth.login(vm.user.email, vm.user.password).then(function (response) {
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
	};

	angular
		.module('app.login')
		.controller('LoginCtrl', ['auth', 'toaster', '$state', Login]);
}());
