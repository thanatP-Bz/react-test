import express from "express";
const router = express.Router();

//import controller
import {
  getAllWorkouts,
  getSingleWorkout,
  createWorkouts,
  deleteWorkout,
  updateWorkout,
} from "../controller/workoutsController.js";

router.route("/").get(getAllWorkouts).post(createWorkouts);
router
  .route("/:id")
  .get(getSingleWorkout)
  .delete(deleteWorkout)
  .patch(updateWorkout);

export default router;
