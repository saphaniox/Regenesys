const express = require("express");
const app = express();
const PORT = 2025;

app.get("/", (req, res) => {
  res.send("Server is up and Running");
});

app.listen(PORT, () => {
  console.log("Listening to PORT");
});
