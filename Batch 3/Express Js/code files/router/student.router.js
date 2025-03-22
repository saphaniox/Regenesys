const express = require("express");
const router = express.Router();
const {
  createStudent,
  getStudents,
} = require("../controller/student.controller");

router.post("/newstudent", createStudent);
router.get("/students", getStudents);

module.exports = router;
