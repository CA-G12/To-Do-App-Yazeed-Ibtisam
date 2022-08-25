const { connection } = require("../../config/connection");

const getAllTasksQuery = () => {
  return connection.query(
    "SELECT tasks.id, tasks.title, tasks.description, tasks.due_date, tasks.status, tasks.category_id, categories.name, categories.color FROM tasks INNER JOIN categories ON tasks.category_id = categories.id;"
  );
};

const getTasksByIdQuery = (id) => {
  const sql = {
    text: "SELECT id, title, due_date, status, category_id FROM tasks WHERE id = $1;",
    values: [id],
  };
  return connection.query(sql);
};

const getTasksByTitleQuery = (title) => {
  const sql = {
    text: "SELECT tasks.*, categories.* FROM tasks INNER JOIN categories ON tasks.category_id = categories.id WHERE title ilike %$1%;",
    values: title,
  };
  return connection.query(sql);
};

const getTasksByCategoryIdQuery = (categoryId) => {
  const sql = {
    text: "SELECT tasks.*, categories.* FROM tasks INNER JOIN categories ON tasks.category_id = categories.id WHERE category_id = $1;",
    values: categoryId,
  };
  return connection.query(sql);
};

const getFilteredTasksQuery = (title, dueDate, status, categoryId) => {
  const sql = {
    text: "SELECT tasks.*, categories.* FROM tasks INNER JOIN categories ON tasks.category_id = categories.id WHERE title like %$1% AND dueDate >= $2 AND status like %$3% AND category_id like %$4%",
    values: [title, dueDate, status, categoryId],
  };
  return connection.query(sql);
};

module.exports = {
  getAllTasksQuery,
  getTasksByIdQuery,
  getTasksByTitleQuery,
  getTasksByCategoryIdQuery,
  getFilteredTasksQuery,
};
