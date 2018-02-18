const bookshelf = require(`./bookshelf`);

class User extends bookshelf.Model {
get tableName() {return `users`}
get hasTimestamps() {return true}

messages() {
return this.hasMany(Message, `author_id`);
 }

 topics() {
   return this.hasMany(Topic, `created_by`)
 }
}

module.exports = bookshelf.model(`User`, User);