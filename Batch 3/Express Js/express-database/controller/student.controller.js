const studentModel = require("../model/student.model");

const createStudent = async (req, res) => {
  const student = await studentModel.create(req.body);
  res.status(201).json(student);
};

const getStudents = async (req, res) => {
  const students = await studentModel.find();
  res.status(200).json(students);
};

const getOneStudent = async (req, res) => {
  const student = await studentModel.findById(req.params.id);
  res.status(200).json(student);
};

const updateStudent = async (req, res) => {
  const students = await studentModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(students);
};

const deleteStudent = async (req, res) => {
  const student = await studentModel.findByIdAndDelete(req.params.id);
  res.status(200).json(student);
};

module.exports = {
  getOneStudent,
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
