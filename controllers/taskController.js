const Task = require("../models/taskModel");

const getTasks = async (req, res, next) => {
  const tasks = await Task.find({ userId: req.body.userId });
  const showTasks = tasks.filter(
    (task) => task.progress !== "100" || task.dueDate >= Date.now()
  );

  showTasks.reverse();
  res.json(showTasks);
};

const newTask = async (req, res, next) => {
  Task.create(
    {
      userId: req.body.userId,
      task: req.body.task,
      details: req.body.details,
      startDate: req.body.startDate,
      dueDate: req.body.dueDate,
    },
    function (err, success) {
      if (err) {
        console.log(err);
        return;
      } else {
        res.json(success);
      }
    }
  );
};

module.exports = { getTasks, newTask };
