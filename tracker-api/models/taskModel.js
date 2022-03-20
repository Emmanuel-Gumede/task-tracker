const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    title: { type: String },
    details: { type: String },
    progress: [{ type: String }],
    subTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "subtasks" }],
    startDate: { type: Date },
    dueDate: { type: Date },
    complete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
