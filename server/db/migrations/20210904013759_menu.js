
exports.up = function(knex) {
  return knex.schema.createTable('Menu',table=>{
    table.increments('id').primary()
    table.string('topic')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('menu')
};
