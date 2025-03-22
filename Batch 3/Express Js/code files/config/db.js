const mongoose = require("mongoose");

const LOCAL_URI = "mongodb://localhost:27017/studentBase";

mongoose
  .connect(LOCAL_URI)
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log("Error Connecting to Database", error));

module.exports = mongoose;
