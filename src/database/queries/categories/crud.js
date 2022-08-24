const { connection } = require("../../config/connection");

const insertCategoryQuery = (name, color) => {
  const sql = {
    text: "INSERT INTO categories (name, color ) VALUES ($1, $2);",
    values: [name, color],
  };
  return connection.query(sql);
};

const updateCategoryQuery = (id, name, color) => {
  const sql = {
    text: "UPDATE categories SET name = $2, color = $3 WHERE id = $1;",
    values: [id, name, color],
  };
  return connection.query(sql);
};

const deleteCategoryQuery = (id) => {
  const sql = {
    text: "DELETE FROM categories WHERE id = $1;",
    values: id,
  };
  return connection.query(sql);
};

module.exports = { insertCategoryQuery, updateCategoryQuery, deleteCategoryQuery };
