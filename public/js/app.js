'use strict';
var hockeyScheduler = angular.module('hockeyScheduler', ['ngResource'])
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
	  $routeProvider.otherwise({redirectTo: '/home'});
	}]);