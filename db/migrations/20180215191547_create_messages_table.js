exports.up = function(knex, Promise) {
  return knex.schema.createTable(`messages`, table => {
  table.increments();
  table.string(`body`).notNullable();
  table.timestamp(`created_at`).defaultTo(knex.fn.now());
  table.timestamp(`updated_at`).defaultTo(knex.fn.now())
  table.integer(`topic_id`).references('id').inTable('topics');
  table.integer(`author_id`).references('id').inTable('users');
  
   })
 };

 
 exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`messages`);
 };