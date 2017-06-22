'use strict';

angular.module('moowhereApp')
  .controller('DashboardCtrl', ['$scope', '$window', 'homeService', 'Auth','toastr','$location', 'authenticationService', '$sce', '$http',function($scope, $window, $homeService, Auth, toastr, $location, $authenticationService, $sce, $http) {
    $scope.infos = {
      title: "Welcome to MooWhere",
      img_url: "http://localhost:3000/assets/13.png"
    };

    $scope.init = function () {
      $homeService.home().then(function(data) {
        console.log(data.data.title);
        if (data.data.success){
          $scope.infos = data.data;
          toastr.success($scope.infos.title);
        }
        else{
          toastr.error(data);
        }
      })
    }

  }]);

    