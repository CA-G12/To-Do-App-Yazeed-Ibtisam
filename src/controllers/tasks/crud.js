const { insertTaskQuery, updateTaskQuery, deleteTaskQuery } = require("../../database/queries/tasks");

const insertTask = (req, res, next) => {
  console.log(req.body, "111");
  const { title, status, due_date, description, category_id } = req.body;
  insertTaskQuery(title, due_date, status, description, category_id)
    .then(() => {
      res.status(201).send("Task is added successfully");
    })
    .catch((err) => next(err));
};

const updateTask = (req, res, next) => {
  const { id, title, due_date, status, description, category_id } = req.body;
  console.log(req.body);
  updateTaskQuery(id, title, due_date, status, description, category_id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => next(err));
};

const deleteTask = (req, res, next) => {
  console.log(req.body, "333");
  const { id } = req.body;
  deleteTaskQuery(id)
    .then(() => {
      res.status(200).send("Task is deleted successfully");
    })
    .catch((err) => next(err));
};

module.exports = { insertTask, updateTask, deleteTask };
