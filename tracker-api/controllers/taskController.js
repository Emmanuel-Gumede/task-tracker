const Task = require("../models/taskModel");

const getTasks = async (req, res, next) => {
  const tasks = await Task.find({});
  console.log(tasks);
  res.json(tasks);
};

const newTask = async (req, res, next) => {
  Task.create(
    {
      userId: req.body.userId,
      title: req.body.title,
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
