const { getAllTasksQuery, getTasksByIdQuery } = require("../../database/queries/tasks/index");

const getAllTasks = (req, res, next) => {
  getAllTasksQuery()
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => next(err));
};

const getTasksById = (req, res, next) => {
  // const { id } = req.params["id"];
  console.log(req.params.id, "333");
  getTasksByIdQuery(req.params.id)
    .then((result) => res.status(200).json(result.rows[0]))
    .catch((err) => next(err));
};

module.exports = {
  getAllTasks,
  getTasksById,
};
