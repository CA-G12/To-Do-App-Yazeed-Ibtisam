const { insertTaskQuery, updateTaskQuery, deleteTaskQuery } = require("../../database/queries/tasks");

const insertTask = (req, res, next) => {
  console.log(req.body, "111");
  const { title, status, dueDate, categoryId } = req.body;
  insertTaskQuery(title, dueDate, status, categoryId)
    .then(() => res.status(201).send("Task is added successfully"))
    .catch((err) => next(err));
};

const updateTask = (req, res, next) => {
  const { id, title, dueDate, status, categoryId } = req.body;
  updateTaskQuery(id, title, dueDate, status, categoryId)
    .then(() => res.status(201).send("Task is updated successfully"))
    .catch((err) => next(err));
};

const deleteTask = (req, res, next) => {
  console.log(req.body, "333");
  const { id } = req.body;
  deleteTaskQuery(id)
    .then(() => res.status(200).send("Task is deleted successfully"))
    .catch((err) => next(err));
};

module.exports = { insertTask, updateTask, deleteTask };
