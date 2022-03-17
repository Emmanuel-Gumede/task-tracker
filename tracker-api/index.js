if (process.env.NODE_ENV !== "production") {
  console.log("Development mode...");
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const user_route = require("./routes/users");

const HTTPserver = () => {
  const server = express();
  server.use(express.json());
  server.use(cors);
  server.use("/user", user_route);

  server.listen(process.env.API_PORT, () => {
    console.log(
      `Task Tracker API running on ${process.env.API_URL}:${process.env.API_PORT}`
    );
  });
};

(function () {
  mongoose.connect(
    process.env.DB_HOST,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error, success) => {
      if (error) {
        console.log("dbase connection error");
      } else if (success) {
        console.log("Dbase connected...");
        HTTPserver();
      }
    }
  );
})();
