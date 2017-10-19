'use strict';

/**
 * @ngdoc overview
 * @name indiabizzApp
 * @description
 * # indiabizzApp
 *
 * Main module of the application.
 */
angular
  .module('indiabizzApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'SaleCtrl',
        controllerAs: 'vm'
      })
      .when('/buyer', {
        templateUrl: 'views/buyer.html',
        controller: 'BuyerCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
