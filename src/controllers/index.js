const { getAllTasks } = require("./tasks/query");
const { insertCategory, updateCategory, deleteCategory } = require("./categories/crud");
const { getAllCategories, getCategoriesById } = require("./categories/query");

module.exports = {
  getAllTasks,
  insertCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategoriesById,
};
