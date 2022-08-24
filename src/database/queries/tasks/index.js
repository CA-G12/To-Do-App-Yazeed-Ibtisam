const {
  getAllTasksQuery,
  getTasksByIdQuery,
  getTasksByTitleQuery,
  getTasksByCategoryIdQuery,
  getFilteredTasksQuery,
} = require("./query");

const { 
    insertTask,
    updateTask,
    deleteTask } = require("./crud");

module.exports = {
  getAllTasksQuery,
  getTasksByIdQuery,
  getTasksByTitleQuery,
  getTasksByCategoryIdQuery,
  getFilteredTasksQuery,
  insertTask,
  updateTask,
  deleteTask,
};
