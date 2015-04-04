var media_app = angular.module('MediaApp', []);

media_app.controller('MediaController', ['$scope', '$http', function($scope, $http) {
  $scope.disclaimers = [];
  $scope.loading = false;

  $scope.init = function(clips) {
    $scope.disclaimers = data;
  };
}]);
