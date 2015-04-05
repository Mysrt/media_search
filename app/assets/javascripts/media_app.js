var media_app = angular.module('MediaApp', ['ngTagsInput']);

media_app.controller('MediaController', ['$scope', '$http', function($scope, $http) {
  $scope.clips = [];
  $scope.tags = [];
  $scope.loading = false;

  $scope.init = function(clips) {
    $scope.clips = clips;
  };

  $scope.refresh_list = function() {
    $scope.loading = true;

    $http({
      url: '/clips.json',
      method: "GET",
      params: {tags: $scope.tag_list()},
    }).then(function(response){
      $scope.clips = response.data;
      $scope.loading = false;
    }, function(response){
      //error here
    });
  };

  $scope.tag_list = function(){
    tag_text = _.map($scope.tags, function(tag){
      return tag.text;
    })

    return tag_text.join();
  };

}]);
