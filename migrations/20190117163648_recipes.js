exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe", function(recipe) {
    //Primary Key
    recipe.increments();

    //Recipe Name
    recipe.string("rec_name", 128).notNullable();

    // Recipe instructions
    recipe.text("rec_instruction");

    // Foreign key
    recipe
      .integer("dish_id")
      .unsigned()
      .references("id")
      .inTable("dish")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe");
};
