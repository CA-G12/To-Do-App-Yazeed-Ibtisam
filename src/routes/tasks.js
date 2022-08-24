const { getAllTasks,
        getTasksById,
        getTasksByTitle,
        getTasksByCategoryId,
        getFilteredTasks } = require("../controllers");

const tasksRouter = require("express").Router();

tasksRouter.get("/tasks", getAllTasks);
tasksRouter.get("/tasksid", getTasksById);
tasksRouter.get("/taskstitle", getTasksByTitle);
tasksRouter.get("/category", getTasksByCategoryId);
tasksRouter.get("/filter", getFilteredTasks);

module.exports = { tasksRouter };
