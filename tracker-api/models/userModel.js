const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String },
    email: { type: String },
    password: { type: String },
    maintasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "task" }],
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "team" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
