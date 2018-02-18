angular.module(`myApp`)
.controller(`HomeController`, [`$scope`, `TopicsService`,function($scope, TopicsService) {
  $scope.topics = TopicsService.getTopics();
  $scope.newTopic = {
    name: ''
  }

  $scope.createTopic = function() {
    let topic = Object.assign({}, $scope.newTopic)
    TopicsService.createTopic(topic);
    
    $scope.newTopic.name = '';
  }
}]);