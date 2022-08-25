const { connection } = require("../../config/connection");

const insertTaskQuery = (title, due_date, status, description, category_id) => {
  const sql = {
    text: "INSERT INTO tasks (title, due_date, status, category_id, description) VALUES ($1, $2, $3, $4, $5);",
    values: [title, due_date, status, category_id, description],
  };
  console.log(sql);
  return connection.query(sql);
};

const updateTaskQuery = (id, title, due_date, status, description, category_id) => {
  const sql = {
    text: `UPDATE tasks SET title = $2, due_date = $3, status = $4, category_id = $5, description = $6 WHERE id = $1;`,
    values: [id, title, due_date, status, category_id, description],
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
