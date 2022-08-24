const { connection } = require("../../config/connection");

const insertTaskQuery = (title, dueDate, status, categoryId) => {
  const sql = {
    text: "INSERT INTO tasks (title, due_date, status, category_id) VALUES ($1, $2, $3, $4);",
    values: [title, dueDate, status, categoryId],
  };
  return connection.query(sql);
};

const updateTaskQuery = (id, title, dueDate, status, categoryId) => {
  const sql = {
    text: `UPDATE tasks SET title = $2, due_date =$3, status = $4, category_id = $5 WHERE id = $1;`,
    values: [id, title, dueDate, status, categoryId],
  };
  return connection.query(sql);
};

const deleteTaskQuery = (id) => {
  const sql = {
    text: "DELETE FROM tasks WHERE id = $1;",
    values: [id],
  };
  return connection.query(sql);
};

module.exports = {
  insertTaskQuery,
  updateTaskQuery,
  deleteTaskQuery,
};
