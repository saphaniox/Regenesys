const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.status(200).send("Server is up and running 🚀🚀🚀");
});

app.listen(port, () => {
  console.log(`Server is on PORT:${port}`);
});
