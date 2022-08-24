const { getAllTasks, getTasksById, insertTask, updateTask, deleteTask } = require("../controllers");

const tasksRouter = require("express").Router();

tasksRouter.get("/tasks", getAllTasks);
tasksRouter.get("/tasks/:id", getTasksById);
tasksRouter.post("/tasks", insertTask);
tasksRouter.put("/tasks", updateTask);
tasksRouter.delete("/tasks", deleteTask);

module.exports = { tasksRouter };
