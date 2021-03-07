if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");

const tracker = express();

tracker.get("/", (req, res) => {
  res.send("Task Tracker application server");
});

tracker.listen(5000, () => {
  console.log("Task Tracker dev server running on http://127.0.0.1:5000");
});
