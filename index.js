if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const userLogin = require("./controller/user");

const tracker = express();
const port = process.env.PORT || process.env.DEV_SERVER;

tracker.use(express.static(path.join(__dirname, "public")));
tracker.engine("hbs", exphbs({ extname: "hbs" }));
tracker.set("view engine", "hbs");
tracker.use("/home", userLogin);

tracker.listen(port, () => {
  console.log(`Task Tracker dev server running on http://127.0.0.1:${port}`);
});
