 
'use strict';

/**
 * @ngdoc function
 * @description
 * # 
 * Service of the nflbrasilApp
 */
angular.module('nflbrasilApp')
  .factory('currentWeekService', function () {
  
  	this.getGames = function($http){
			var weekGameStats;
			$http.get('http://www.nfl.com/liveupdate/scorestrip/ss.xml?random='+ (Math.random() * 10000) ).
				success(function(data) {

					weekGameStats = getWeekGameStats(data);
				
			});
			return weekGameStats;
		};
});






 