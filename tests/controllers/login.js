'use strict';

describe('Controller: LoginCtrl', function () {

	// load the controller's module
	beforeEach(module('app.login'));

	var LoginCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope     = $rootScope.$new();

		// TODO: mock auth, toaster and $state
		LoginCtrl = $controller('LoginCtrl', {auth: {}, toaster: {}, $state: {}});
	}));

	it('should define a login function', function () {
		expect(LoginCtrl.login).toBeDefined();
	});

	// TODO: test the login function
});
