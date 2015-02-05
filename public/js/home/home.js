(function () {
	var Home = function () {
		this.awesomeThings = [1, 2, 3];
	};

	angular
		.module('app.home')
		.controller('HomeCtrl', [Home]);
}());
