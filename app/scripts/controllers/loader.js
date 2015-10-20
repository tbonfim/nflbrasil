'use strict';

/**
 * @ngdoc function
 * @name nflbrasilApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nflbrasilApp
 */
angular.module('nflbrasilApp')
  .controller('LoaderCtrl', function ($scope, $http) {
   


    $http.get('http://api.fantasy.nfl.com/v1/game/stats?format=json').
        success(function(data) {
            $scope.data  = data;
            console.log( $scope.data);
        });

  });
