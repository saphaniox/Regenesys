const express = require("express");
const app = express();
const PORT = 2343;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server Up and Running 🚀🚀🚀",
  });
});

let students = [
  {
    id: 1,
    studentName: "Eno",
    email: "enodev@gmail.com",
    bio: "I love to code and cook",
  },
  {
    id: 2,
    studentName: "John",
    email: "jonny@gmail.com",
    bio: "I love to soccer and sleep",
  },
];

app.get("/students", (req, res) => {
  res.status(200).json(students);
});

app.post("/students/new", (req, res) => {
  const { studentName, email, bio } = req.body;
  const newStudent = { id: students.length + 1, studentName, email, bio };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
