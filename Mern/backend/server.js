import express from "express";
import dotenv from "dotenv";
dotenv.config();

//route
import workoutRoutes from "./Routes/workouts.js";
import userRoutes from "./Routes/user.js";
//connect DB
import connectDB from "./database/connectDB.js";

//express app
const app = express();

//middleware
app.use(express.json());

//user routes
app.use("/api/user", userRoutes);
//workouts route
app.use("/api/workouts", workoutRoutes);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`listening to port 5000...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
