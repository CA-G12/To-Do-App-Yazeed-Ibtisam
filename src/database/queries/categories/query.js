const { connection } = require("../../config/connection");

const getAllCategoriesQuery = () => {
  const sql = "SELECT * FROM categories";
  return connection.query(sql);
};

const getAllCategoriesByIdQuery = (id) => {
  const sql = {
    text: "SELECT * FROM categories WHERE id = $1",
    values: id,
  };
  return connection.query(sql);
};

module.exports = { getAllCategoriesQuery, getAllCategoriesByIdQuery };
