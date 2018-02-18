angular.module(`myApp`)
.controller(`UserController`, [`$scope`, `UsersService`,`$location`,
function($scope, UsersService, $location) {
  // $scope.users = UsersService.getUser();
  $scope.users = UsersService.getUsers();
  $scope.newUser = {
    name: ''
  }

  $scope.createUser = function() {
    let user = Object.assign({}, $scope.newUser)
    UsersService.createUser(user);
    
    $scope.newUser.name = '';
  }
  let url = $location.url()
  UsersService.getUser(url).then(user => {
    $scope.users = user;
  })

}])