angular.module(`myApp`, [`ngRoute`]);

angular.module(`myApp`)
.config(function($routeProvider, $locationProvider) {
  

  $routeProvider.when(`/`, {
    controller: `HomeController`,
    templateUrl: `/views/home.html`
  })
  .when(`/topics/:id`, {
    controller: `TopicController`,
    templateUrl: `/views/topics.html`
  })
  .when(`/users`, {
    controller: `UserController`,
    templateUrl: `/views/users.html`
  })
  .when(`/users/:id`, {
    controller: `UserController`,
    templateUrl: `/views/user.html`
  })
  .otherwise(
    {
      template : '<h1>SUCK IT TREBEK</h1>'
    });
  $locationProvider.html5Mode(true);
})

