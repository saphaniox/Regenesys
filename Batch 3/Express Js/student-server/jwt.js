const express = require("express");
const app = express();
const PORT = 2445;
const jwt = require("jsonwebtoken");

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API ready 🚀",
  });
});

const users = [
  {
    id: 1,
    username: "john",
    password: "pass123",
    role: "admin",
  },
  {
    id: 2,
    username: "ben",
    password: "pass456",
    role: "user",
  },
];

//Generate JWT token
const generateToken = () => {
  return jwt.sign(
    { id: users.id, username: users.username, role: users.role },
    "Secret_Key",
    { expiresIn: "1h" }
  );
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  //Authtenticate or find the user

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  //Trew a message if the user do not exist
  if (!user)
    return res.status(401).json({
      message: "Invalid User, Please login with the right credentials",
    });

  // generate a token containing the user info
  const token = generateToken(user);
  res.status(200).json({ token });
});

app.listen(PORT, () => {
  console.log(`Server on PORT:${PORT}`);
});
