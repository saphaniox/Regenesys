const { students } = require("../model/studentMode");

const getStudent = (req, res) => {
  res.status(200).json(students);
};

const newStudent = (req, res) => {
  const { studentName, email, bio } = req.body;
  const newStudent = { id: students.length + 1, studentName, email, bio };
  students.push(newStudent);
  res.status(201).json(newStudent);
};

module.exports = { getStudent, newStudent };
