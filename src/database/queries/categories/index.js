const { insertCategoryQuery, updateCategoryQuery, deleteCategoryQuery } = require("./crud");
const { getAllCategoriesQuery, getAllCategoriesByIdQuery } = require("./query");

module.exports = {
  insertCategoryQuery,
  updateCategoryQuery,
  deleteCategoryQuery,
  getAllCategoriesQuery,
  getAllCategoriesByIdQuery,
};
