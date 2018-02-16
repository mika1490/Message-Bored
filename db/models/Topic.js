const bookshelf = require(`./bookshelf`);

const Message = require(`./Message`)
const User = require(`./User`)


class Topic extends bookshelf.Model {
get tableName() {return `topics`}
get hasTimestamps() {return true}

messages() {
return this.hasMany(Message, `topic_id`);
 }

 users() {
  return this.belongsTo(User, `created_by`);
   }
}

module.exports = bookshelf.model(`Topic`, Topic);