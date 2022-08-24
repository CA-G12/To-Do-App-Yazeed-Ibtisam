const { getAllTasks, getTasksById, insertTask, updateTask, deleteTask } = require("../controllers");

const tasksRouter = require("express").Router();

tasksRouter.get("/tasks", getAllTasks);
tasksRouter.get("/tasks/:id", getTasksById);
tasksRouter.post("/tasks", insertTask);
tasksRouter.put("/tasks", updateTask);
tasksRouter.delete("/tasks", deleteTask);
// tasksRouter.get("/taskstitle", getTasksByTitle);
// tasksRouter.get("/category", getTasksByCategoryId);
// tasksRouter.get("/filter", getFilteredTasks);

module.exports = { tasksRouter };
