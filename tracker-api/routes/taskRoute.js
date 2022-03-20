const { getTasks, newTask } = require("../controllers/taskController");

const taskRoute = require("express").Router();

taskRoute.get("/all_tasks", getTasks);
taskRoute.post("/new_task", newTask);

module.exports = taskRoute;
