const express = require("express");
const router = express.Router();
const {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  getOneStudent,
} = require("../controller/student.controller");

router.post("/newstudent", createStudent);
router.get("/students", getStudents);
router.get("/students/:id", getOneStudent);
router.put("/updatestudent/:id", updateStudent);
router.delete("/removestudent/:id", deleteStudent);

module.exports = router;
