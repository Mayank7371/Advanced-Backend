// server.js
const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

// Middleware - to parse JSON body
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("<h1>server is online</h1>");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
