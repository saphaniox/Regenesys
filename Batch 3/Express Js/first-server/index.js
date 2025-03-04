const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server up and running");
});

//Sample User Data
let user = [
  { id: 1, name: "Sammy" },
  { id: 2, name: "Eno" },
  { id: 3, name: "John" },
];

//Get a User
app.get("/users", (req, res) => {
  res.json(user);
});

//Post a new User
app.post("/users/create", (req, res) => {
  const { name } = req.body;
  const newUser = { id: user.length + 1, name };
  user.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
