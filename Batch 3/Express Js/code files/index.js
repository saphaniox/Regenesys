const express = require("express");
require("./config/db");
const studentRouter = require("./router/student.router");
const app = express();
const PORT = 2025;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is Up and Running 🚀🚀🚀",
  });
});

app.use("/api", studentRouter);

app.listen(PORT, () => {
  console.log("Server Is UP");
});
