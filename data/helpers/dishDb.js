const db = require("../../dbConfig.js");

module.exports = {
  get: function(id) {
    let query = db("dish");
    if (id) {
      query.where("id", Number(id)).first();
    }

    return query;
  },
  getDishes: function(dishId) {
    return db("dishes as d")
      .join("recipe as r", "r.id", "d.dishId")
      .select("d.id", "d.text", "r.name as recipe")
      .where("d.dishId", dishId);
  }
};
