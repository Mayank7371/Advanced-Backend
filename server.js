import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.mjs";
import userRoutes from "./routes/users.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Server is online 🚀</h1>");
});

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed. Server not started.");
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
