const express = require('express');
const Message = require('../db/models/Message');
const Topic = require(`../db/models/Topic`);
const User = require(`../db/models/User`);
const router = express.Router();

router.route('/')
.post((req, res) => {
  let username = req.body;
  return new User(username)
  .save()
  .then(user => {
    console.log(`NNNNNNN`, user)
    return res.json(user)
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})
  .get((req, res) => {
    return User
    .fetchAll()
    .then(users => {
      users = users.toJSON();
      return res.json(users)
    })
    .catch(err => {
      return res.json({ message: err.message })
    })
  })

router.route(`/:id`)
.get((req, res) => {
  let id = req.params.id;
  return new User()
  .where({id: id})
  .fetch({ withRelated: 
    [
      { 'messages': qb => qb.orderBy(`created_at`, `DESC`) }, 
      `messages.topic` 
    ]
  })
  .then(user => {
    user = user.toJSON()
    console.log(`RRRRR`, user)
    return res.json(user)
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})
    .put((req, res) => {
      let data = req.body;
      let id = req.params.id;
      return new User({id: id})
      .save(data)
      .then(singleUser => {
        return res.redirect(`/users/${id}`)
      })
      .catch(err => {
        return res.redirect({message: err.message})
  })
})



module.exports = router;