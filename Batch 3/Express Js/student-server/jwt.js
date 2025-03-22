const express = require("express");
const app = express();
const PORT = 2445;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

app.post("/register", async (req, res) => {
  const { username, password, role } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const newuser = {
    id: users.length + 1,
    username,
    role,
    password: hashPassword,
  };
  users.push(newuser);

  const token = jwt.sign(
    { id: newuser.id, role: newuser.role, username: newuser.username },
    "SecretKey",
    {
      expiresIn: "10m",
    }
  );
  res.status(201).json({
    message: "New User Created Successfully",
    data: token,
  });
});

const verifyToken = (req, res, next) => {
  const token = req.header("Autorization")?.split(" ")[1]; //Extract Token from the Header
  if (!token) return res.status(401).send("Access Denied");

  try {
    req.user = jwt.verify(token, "SecretKey");
    next();
  } catch (error) {
    req.status(400).send("Invalid Token");
  }
};

const verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).send("Access Denied");
  next();
};

app.get("/admin", verifyToken, verifyAdmin, (req, res) => {
  res.send("Welcome Admin");
});

app.listen(PORT, () => {
  console.log(`Server on PORT:${PORT}`);
});
