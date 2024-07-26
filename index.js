// require("dotenv").config({ path: "./env" });
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";
import express from "express";
dotenv.config({
  path: "./env",
});
connectDB() // because connectSb is an async method so it will return a promise .then me successful rkhenge and .catch me errors
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
app.on("error", (error) => {
  console.log("ERROR: ", error);
  throw error;
});

// basic approach is mentioned below
/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();
*/

// Professional approach
// second approach is we take another file in another folder and write the code there
// we go to db and inside it we make a file called index.js
