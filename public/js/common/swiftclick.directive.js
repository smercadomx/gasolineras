(function () {
	'use strict';

	angular
		.module('app.common')
		.directive('swiftClick', ['$window', function ($window) {
			return {
				restrict: 'A',
				link: function (scope, element) {
					$window.SwiftClick.attach(element[0]);
				}
			};
		}]);
}());
