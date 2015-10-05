'use strict';

/**
 * @ngdoc function
 * @name fruitStandKataRobApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the fruitStandKataRobApp
 */
angular.module('fruitStandKataRobApp')
	.controller('MenuCtrl', function ($scope, $location) {

		$scope.isActive = function (viewLocation) {
			var active = (viewLocation === $location.path());
			return active;
		};
		
});
