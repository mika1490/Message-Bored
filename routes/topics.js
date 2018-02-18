const express = require('express');
const Message = require('../db/models/Message');
const Topic = require(`../db/models/Topic`);
const User = require(`../db/models/User`);
const router = express.Router();


//home route '/'
router.route(`/`)
.post((req, res) => {
  let {name, user_id} = req.body;
  return new Topic({name, user_id})
  .save()
  .then(topics => {
    return res.json(topics)
  })
  .catch(err => {
    return res.json({message: err.message})
  })
  
})
.get((req, res) => {
  return Topic
  .fetchAll({ withRelated: [`user`, `messages.user`]
})
  .then(topics => {
    topics = topics.toJSON();
    return res.json(topics)
  })
  .catch(err => {
    return res.json({ message: err.message });
  })
})
  router.route(`/:id`)
  // .get((req, res) => {
  //   let id = req.params.id;
  //   return new Topic()
  //   .where({id: id})
  //   .fetch()
  //   .then(topic => {
  //       topic = topic.toJSON()
  //       return res.json(topic)
      
  //   })
  //   .catch(err => {
  //     return res.json({message: err.message})
  //   })
  // })
  .put((req, res) => {
    let data = req.body;
    let id = req.params.id;
    return new Topic({id: id})
    .save(data, { require: true })
    .then(topic => {
      return res.redirect(`/topics/${id}`)
    })
    .catch(err => {
      return res.redirect({message: err.message})
    })
  })
 




module.exports = router;