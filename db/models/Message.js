const bookshelf = require(`./bookshelf`);

const User = require(`./User`)

const Topic = require(`./Topic`)

class Message extends bookshelf.Model {
get tableName() {return `messages`}
get hasTimestamps() {return true}

users() {
return this.belongsTo(User, `author_id`);
 }
 
 topics() {
   return this.belongsTo(Topic, `topic_id`);
  }
}
module.exports = bookshelf.model(`Message`, Message);