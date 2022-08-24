const {
  getAllTasksQuery,
  // getTasksByIdQuery,
  // getTasksByTitleQuery,
  // getTasksByCategoryIdQuery,
  // getFilteredTasksQuery,
  // insertTask,
  // updateTask,
  // deleteTask,
} = require("../../database/queries/tasks/index");

const getAllTasks = (req, res, next) => {
  getAllTasksQuery()
    .then((result) => res.status(200).json(result))
    .catch((err) => next(err));
};

module.exports = { getAllTasks };
