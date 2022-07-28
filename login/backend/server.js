//express
import express from "express";
const app = express();

//env
import dotenv from "dotenv";
dotenv.config();

//connect to DB
import { connectDB } from "./database/connectDB.js";

//user routes
import userRoutes from "./routes/userRoutes.js";

//middleware
app.use(express.json());

//connect user route
app.use("/api/user", userRoutes);

//port
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("listening to port 5000...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
