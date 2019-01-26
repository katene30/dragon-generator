
exports.up = function(knex, Promise) {
  return knex.schema.createTable('boy-dragons', (t) =>{
      t.increments('id').primary()
      t.string('image')
      t.string('first_name')
      t.string('last_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('boy-dragons')
};
