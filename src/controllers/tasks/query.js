const {
  getAllTasksQuery,
  getTasksByIdQuery,
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

module.exports = {
  getAllTasks,
  getTasksById,
};
