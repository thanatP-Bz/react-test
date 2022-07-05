import express from "express";
const router = express.Router();

//import controller
import {
  getAllWorkouts,
  getSingleWorkout,
  createWorkouts,
} from "../controller/workoutsController.js";

router.route("/").get(getAllWorkouts).post(createWorkouts);
router.route("/:id").get(getSingleWorkout);
export default router;
