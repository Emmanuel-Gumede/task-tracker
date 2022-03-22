const { getTasks, newTask } = require("../controllers/taskController");
const { protect } = require("../middleware/authorize");
const taskRoute = require("express").Router();

taskRoute.post("/all_tasks", getTasks);
taskRoute.post("/new_task", protect, newTask);

module.exports = taskRoute;
