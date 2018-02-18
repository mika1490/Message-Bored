angular.module(`myApp`)
  .service(`TopicsService`, [`$http`, function ($http) {
    let topics = [];
    let url = `http://localhost:8080/api/topics`
   
    
    this.getTopics = function () {
    $http.get(url)
      .then(response => {
        console.log(`HII`, response.data)
        response.data.forEach((element) => {
          topics.push(element)
        })
        console.log(`BYE`, topics)

      })
      return topics;
    }
    this.createTopic = function (newTopic) {
      $http.post(url, newTopic)
        .then(newTopic => {
          let createdTopic = newTopic.data;
          topics.push(createdTopic)
        })

    }
    this.getTopic = function(topic) {
     return $http.get(`http://localhost:8080/api${topic}`)
        .then(topic => {  
          return topic.data;
        })
    }

    // this.updateTopic = function(topic) {
    //   return $http.get(`http://localhost:8080/api${topic}`)
    //   .then(topic => {
    //     return topic.data;
    //   })
    // }
    // this.deleteTopic = function(id) {
    //   return $http.delete(`http://localhost:8080/api${topic}`)
    //   .then (response => {
    //     return response.data;
    //   });
    // };
  }])