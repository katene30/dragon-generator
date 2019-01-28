
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dragons', (table) => {
      table.increments('id').primary()
      table.string('gender')
      table.string('image')
      table.string('firstName')
      table.string('lastName')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dragons')
};
