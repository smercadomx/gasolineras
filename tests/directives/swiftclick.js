describe('Directive: swiftclick', function () {
	var $scope,
		element;

	beforeEach(module('app.common'));

	beforeEach(inject(function ($compile, $rootScope) {
		$scope  = $rootScope;
		element = angular.element('<div swift-click class="test">{{size}}</di>');
		$scope.size = 10;
		$compile(element)($rootScope);

		$scope.$digest();
	}));

	it('should do what...', function () {
		expect(element.hasClass('test')).toBe(true);

		expect(element.text()).toBe('10');
	});
});
