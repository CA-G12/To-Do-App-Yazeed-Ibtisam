const { getAllTasks } = require("../controllers");

const tasksRouter = require("express").Router();

tasksRouter.get("/tasks", getAllTasks);

module.exports = { tasksRouter };
