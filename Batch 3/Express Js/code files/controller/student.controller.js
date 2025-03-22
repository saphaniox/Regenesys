const studentModel = require("../model/student.model");

const createStudent = async (req, res) => {
  const student = await studentModel.create(req.body);
  res.status(201).json(student);
};

const getStudents = async (req, res) => {
  const students = await studentModel.find();
  res.status(200).json(students);
};

module.exports = { getStudents, createStudent };
