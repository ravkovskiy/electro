'use strict';
 
 /* App Module */

var elApp = angular.module('elApp', [
  'ngRoute',
  'ElControllers'
]);

elApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/start', {
        templateUrl: 'partials/webSite.html',
        controller: 'WebSiteCtrl'
      }).
      when('/price', {
        templateUrl: 'partials/price.html',
        controller: 'PriceCtrl'
      }).
      otherwise({
        redirectTo: '/start'
      });
  }]);