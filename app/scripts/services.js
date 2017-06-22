 'use strict';
var UserService = angular.module('UserService', [])
var base_url = "http://localhost:3000";
var api_url = "http://localhost:3000/api/v1";

UserService.factory('homeService', ["$http", "$window", "$rootScope", function($http, $window, $rootScope) {
  return {
    home: function(){
      return $http.get(base_url + '/', {}).success(function(data){});
    }
  }
}]);

UserService.factory('authenticationService', function() {
  var auth = {
    isAuthenticated: true
  }
  return auth;
});