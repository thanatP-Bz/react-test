import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./connectDB/connectDB.js";
import mongoose from "mongoose";
import diaryRoute from "./route/diaryRoute.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/v2", diaryRoute);

app.get("/", (req, res) => {
  res.json({ msg: `connect to server` });
});

const PORT = 4000;

mongoose.set("strictQuery", true);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`listen to port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
