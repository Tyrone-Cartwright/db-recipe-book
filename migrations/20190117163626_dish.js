exports.up = function(knex, Promise) {
  return knex.schema.createTable("dish", function(dish) {
    // Primary key
    dish.increments();

    // Dish Name
    dish.string("name", 50).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dish");
};
