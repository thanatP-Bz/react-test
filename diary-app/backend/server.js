import cors from "cors";
import express from "express";
import connectDB from "./connectDB/connectDB.js";
import dotenv from "dotenv";
import PostRoute from "./routes/postRoute.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";

//env
dotenv.config();
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.set("strictQuery", true);

//route
app.use("/api/v1/diary", PostRoute);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ msg: "server side connected" });
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`listen to port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
