'use strict';
var base_url = "http://localhost:3000";
var api_url = "http://localhost:3000/api/v1";

angular.module('moowhereApp')
  .controller('MainCtrl', ['$scope', '$window', 'homeService', 'Auth', 'loginService','toastr','$location', 'authenticationService', '$rootScope', function($scope, $window, $homeService, Auth, $loginService, toastr, $location, $authenticationService, $rootScope) {
    $rootScope.base_url = 'http://0.0.0.0:3000';
    
    
  }]);
    