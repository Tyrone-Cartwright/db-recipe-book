exports.up = function(knex, Promise) {
  return knex.schema.createTable("rec_ingr", function(rec_ing) {
    rec_ing.primary(["recipe_id", "ingredient_id"]);
    rec_ing
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipe");
    rec_ing
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredient");
    // Ingredient Qty
    rec_ing.float("quantity").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("rec_ing");
};
