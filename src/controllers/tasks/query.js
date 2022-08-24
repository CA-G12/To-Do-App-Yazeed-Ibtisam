const {
  getAllTasksQuery,
  getTasksByIdQuery,
  // getTasksByTitleQuery,
  // getTasksByCategoryIdQuery,
  // getFilteredTasksQuery,
  // insertTask,
  // updateTask,
  // deleteTask,
} = require("../../database/queries/tasks/index");

const getAllTasks = (req, res, next) => {
  getAllTasksQuery()
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => next(err));
};

const getTasksById = (req, res, next) => {
  const { id } = req.params.id;
  console.log(id, "333");
  getTasksByIdQuery(id)
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => next(err));
};

// const getTasksByTitle = (req, res, title, next) => {
//   getTasksByTitleQuery(title)
//     .then((result) => res.status(200).json(result))
//     .catch((err) => next(err));
// };

// const getTasksByCategoryId = (req, res, categoryId, next) => {
//   getTasksByCategoryIdQuery(categoryId)
//     .then((result) => res.status(200).json(result))
//     .catch((err) => next(err));
// };

// const getFilteredTasks = (req, res, title, dueDate, status, categoryId, next) => {
//   getFilteredTasksQuery(title, dueDate, status, categoryId)
//     .then((result) => res.status(200).json(result))
//     .catch((err) => next(err));
// };

module.exports = {
  getAllTasks,
  getTasksById,
  // getTasksByTitle,
  // getTasksByCategoryId,
  // getFilteredTasks
};
