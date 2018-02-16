const express = require(`express`)
const router = express.Router();
const topics = require(`./topics`)
const messages = require(`./messages`)
const users = require(`./users`)

router.get('/', (req, res) => {
  console.log("Hello from root");
  res.json('Hello from root!');
});

router.use('/users', users);
router.use('/messages', messages);
router.use('/topics', topics);

module.exports = router;