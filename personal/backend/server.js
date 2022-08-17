import express from "express";
import "express-async-errors";
//connect to DB
import connectDB from "./database/connectDB.js";

//dotenv
import dotenv from "dotenv";
dotenv.config();

//user route
import userRoutes from "./routes/userRoutes.js";

//express app
const app = express();

//middleware
app.use(express.json());

app.use("/api/auth", userRoutes);

//error handler middleware
import notFoundMiddleware from "./middleware/not-found-.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("listening to port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
