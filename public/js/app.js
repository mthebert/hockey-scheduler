'use strict';
var hockeyScheduler = angular.module('hockeyScheduler', ['ngResource', 'ngRoute'])

hockeyScheduler.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
	$routeProvider.when('/calendar', {templateUrl: 'partials/calendar.html', controller: 'calendarController'});
	$routeProvider.when('/admin', {templateUrl: 'partials/admin.html', controller: 'adminController'});
	$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginController'});
	$routeProvider.when('/roster', {templateUrl: 'partials/roster.html', controller: 'rosterController'});
	$routeProvider.otherwise({redirectTo: '/home'});
}]);