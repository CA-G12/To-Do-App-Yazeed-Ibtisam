const { getAllTasks, getTasksById } = require("./tasks/query");
const { insertTask, updateTask, deleteTask } = require("./tasks/crud");

module.exports = {
  getAllTasks,
  getTasksById,
  insertTask,
  updateTask,
  deleteTask,
};
