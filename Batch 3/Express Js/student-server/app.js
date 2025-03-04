const express = require("express");
const app = express();
const PORT = 2343;
const { getStudent, newStudent } = require("./controller/userController");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server Up",
  });
});

//My Routes
app.get("/students", getStudent);
app.post("/students/new", newStudent);

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
