const { getAllTasks, getTasksById, getTasksByTitle, getTasksByCategoryId, getFilteredTasks } = require("./tasks/query");
const { insertCategory, updateCategory, deleteCategory } = require("./categories/crud");
const { getAllCategories, getCategoriesById } = require("./categories/query");

module.exports = {
  getAllTasks, getTasksById, getTasksByTitle, getTasksByCategoryId, getFilteredTasks, insertCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategoriesById,
};


