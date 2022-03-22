if (process.env.NODE_ENV !== "production") {
  console.log("Development mode...");
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const taskRouter = require("./routes/taskRoute");

const app = express();

const connectDB = async () => {
  mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB connected...");
};

connectDB();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/task", taskRouter);

const server = app.listen(process.env.API_PORT, () => {
  console.log(
    `Task Tracker API running on ${process.env.API_URL}:${process.env.API_PORT}`
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Erro: ${err}`);
  server.close(() => process.exit(1));
});
