exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredient", function(ingr) {
    // Primary key
    ingr.increments();

    // Ingredient name
    ingr.string("name", 50).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredient");
};
