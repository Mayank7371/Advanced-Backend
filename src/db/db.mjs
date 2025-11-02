import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDb = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected..");
  } catch (error) {
    console.log("Error in connectiong to the database...", error.message);
    process.exit(1);
  }
};
export default connectDb;
