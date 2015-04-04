var media_app = angular.module('MediaApp', ['ngTagsInput']);

media_app.controller('MediaController', ['$scope', '$http', function($scope, $http) {
  $scope.clips = [];
  $scope.loading = false;

  $scope.init = function(clips) {
    $scope.clips = clips;
  };
}]);
