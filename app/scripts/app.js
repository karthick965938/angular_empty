  'use strict';

/**
 * @ngdoc overview
 * @name moowhereApp
 * @description
 * # moowhereApp
 *
 * Main module of the application.   pregnant
 */
var moowhere = angular.module('moowhereApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'UserService',
    'ui.router',
    'Devise',
    'toastr', 
    '720kb.datepicker',
    'ngStorage',
    'colorpicker.module', 
    'wysiwyg.module',
    'xeditable',
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.poster",
    "com.2fdevs.videogular.plugins.buffering",
    "ngFileUpload",
    "ngMaterial",
    "credit-cards",
    "stripe",
    "angularPayments"
  ])

  moowhere.config([
    "$httpProvider", function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = angular.element('meta[name=csrf-token]').attr('content');
      // $httpProvider.defaults.headers.common['Api-Token'] = '7de754dbe42864fb07d0f7177ea01b56613c52b721fe3c7e69722136c63ce970';
      $httpProvider.defaults.withCredentials = true;
    }
  ]);
  moowhere.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$routeProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider, $httpProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard-ctrl'
      })

      .otherwise({
        redirectTo: '/'
      })
  }])
  moowhere.run(function($rootScope, $route, $routeParams, $window, $location){
    $rootScope.$on('$routeChangeStart',
      function(angularEvent,next,current) {
        $location.path('/');
      }
    );
  });