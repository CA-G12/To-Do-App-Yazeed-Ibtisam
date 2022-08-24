const {
  getAllTasksQuery,
  getTasksByIdQuery,
  getTasksByTitleQuery,
  getTasksByCategoryIdQuery,
  getFilteredTasksQuery,
} = require("./query");

const { insertTaskQuery, updateTaskQuery, deleteTaskQuery } = require("./crud");

module.exports = {
  getAllTasksQuery,
  getTasksByIdQuery,
  getTasksByTitleQuery,
  getTasksByCategoryIdQuery,
  getFilteredTasksQuery,
  insertTaskQuery,
  updateTaskQuery,
  deleteTaskQuery,
};
