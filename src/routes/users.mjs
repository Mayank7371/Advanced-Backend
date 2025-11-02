import express from "express";
const router = express.Router();

let users = [
  { id: 1, name: "one", age: 21 },
  { id: 2, name: "two", age: 25 },
];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET single user by ID
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.json(user);
});

// POST create new user
router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
router.put("/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });

  user.name = req.body.name || user.name;
  user.age = req.body.age || user.age;
  res.json(user);
});

// DELETE user
router.delete("/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.json({ msg: "User deleted" });
});

export default router;
