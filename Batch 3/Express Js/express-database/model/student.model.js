const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: Number, required: true },
  bio: { type: String },
});

const studentModel = mongoose.model("Student", studentSchema);
module.exports = studentModel;
