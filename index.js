if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const exphbs = require("express-handlebars");

const tracker = express();

tracker.engine("hbs", exphbs({ extname: "hbs" }));
tracker.set("view engine", "hbs");

tracker.get("/", (req, res) => {
  res.render("home");
});

tracker.listen(5000, () => {
  console.log("Task Tracker dev server running on http://127.0.0.1:5000");
});
