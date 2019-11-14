
exports.up = function(knex) {
  return knex.schema
  .createTable('owners', tbl => {
      tbl.increments()
      tbl
      .string('username').notNullable()
      tbl
        .string('password').notNullable()
      tbl
        .string('name').notNullable()
      tbl
        .string('email').notNullable().unique()
      tbl
        .string('residence').notNullable()
  })
  .createTable('pets', tbl => {
      tbl.increments()
      tbl
        .string('name').notNullable()
      tbl
        .string('age').notNullable()
      tbl
        .string('breed').notNullable()
      tbl
        .boolean('gender').notNullable()
      tbl
        .string('about me')
      tbl
        .string('size').notNullable()
      tbl
        .boolean('trained').defaultTo(false).notNullable()
  })
  .createTable('pet_owners', tbl => {
      tbl.increments()
      tbl
        .integer('owner_id')
        .unsigned()
        .references('id')
        .inTable('owners')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .integer('pet_id')
        .unsigned()
        .references('id')
        .inTable('pets')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      tbl
        .unique(['owner_id', 'pet_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('pet_owners')
    .dropTableIfExists('pets')
    .dropTableIfExists('owners')
};
