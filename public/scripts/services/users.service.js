angular.module(`myApp`)
.service(`UsersService`, [`$http`, function ($http) {
  let users = [];
  let url = `http://localhost:8080/api/users`
  

  this.getUsers = function () {
    $http.get(url)
    .then(response => {
      console.log(`CCCC`, response.data)
      response.data.forEach((element) => {
        users.push(element)
      })
      console.log(`BBBB`, users)
    })
    return users;
  }
  this.createUser = function (newUser) {
    $http.post(url, newUser)
    .then(newUser => {
      let createdUser = newUser.data;
      console.log(`VVVVV`, createdUser)
      users.push(createdUser)
    })
  }
  this.getUser = function(user) {
    return $http.get(`http://localhost:8080/api${user}`)
    .then(user => {
      console.log(`DDUUUDDEEE`, user)
      return user.data;
    })
  }
}])