const express = require('express');
const Message = require('../db/models/Message');
const Topic = require(`../db/models/Topic`);
const User = require(`../db/models/User`);
const router = express.Router();


router.get(`/latest`, (req, res) => {
  return Message
  .orderBy(`created_at`, `DESC`)
  .fetchAll({ withRelated: [`user`, `topic`]
  })
  .then((messages) => {
    return res.json(messages);
  })
  .catch((err) => {
    return res.json({ message: err });
  });
})
.get(`/by-topic/:topic_id`, (req, res) => {
  return Message
  .where({ topic_id: req.params.topic_id })
  .orderBy(`created_at`, `ASC`)
  .fetchAll({ withRelated: [`user`, `topic`]
  })
  .then((messages) => {
    return res.json(messages);
  })
  .catch((err) => {
    return res.json({ message: err.message });
  });
})
.post(`/`, (req, res) => {
  let { body, user_id, topic_id } = req.body;

  return new Message({ body, user_id, topic_id })
  .save()
  .then((message) => {
    return res.json(message);
  })
  .catch((err) => {
    return res.json({ message: err.message });
  });
});

module.exports = router;
