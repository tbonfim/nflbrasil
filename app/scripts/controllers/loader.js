'use strict';

/**
 * @ngdoc function
 * @name nflbrasilApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nflbrasilApp
 */
angular.module('nflbrasilApp')
  .controller('LoaderCtrl', function ($scope, currentWeekService) {
   
	$scope.weekData = currentWeekService.getGames();

});
