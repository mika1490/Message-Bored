angular.module(`myApp`)
.controller(`TopicController`, [`$scope`, `TopicsService`,`$location`, function($scope, TopicsService, $location) {
  $scope.newTopic = {
    name: ''
  }
  let url = $location.url()
  TopicsService.getTopic(url).then(topic => {
    $scope.topics = topic;
  })
  // TopicsService.updateTopic = function(){
  //   let editedTopic = Object.assign({}, $scope.newTopic)
  //   TopicsService.updateTopic(editedTopic);
    
  //   $scope.newTopic.name = '';
  // }
}]);