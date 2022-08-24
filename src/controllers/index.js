const { getAllTasks, getTasksById } = require("./tasks/query");
const { insertTask, updateTask, deleteTask } = require("./tasks/crud");
// const { insertCategory, updateCategory, deleteCategory } = require("./categories/crud");
// const { getAllCategories, getCategoriesById } = require("./categories/query");

module.exports = {
  getAllTasks,
  getTasksById,
  insertTask,
  updateTask,
  deleteTask,
  // updateCategory,
  // deleteCategory,
  // getAllCategories,
  // getCategoriesById,
};
