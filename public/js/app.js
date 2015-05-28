'use strict';
var hockeyScheduler = angular.module('hockeyScheduler', ['ngResource'])
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/Home', {templateUrl: 'partials/Home.html', controller: 'HomeController'});
	  $routeProvider.otherwise({redirectTo: '/Home'});
	}]);