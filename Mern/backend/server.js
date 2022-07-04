import express from "express";
import workoutRoutes from "./Routes/workouts.js";

//express app
const app = express();

//middleware
app.use(express.json());

//workouts route
app.use("/api/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.json({ msg: "welcome" });
});

app.listen(5000, () => {
  console.log(`listening to port 5000...`);
});
