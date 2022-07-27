import express from "express";
const router = express.Router();

import requireAuth from "../middleware/requireAuth.js";
//import controller
import {
  getAllWorkouts,
  getSingleWorkout,
  createWorkouts,
  deleteWorkout,
  updateWorkout,
} from "../controller/workoutsController.js";

router.use(requireAuth);

router.route("/").get(getAllWorkouts).post(createWorkouts);
router
  .route("/:id")
  .get(getSingleWorkout)
  .delete(deleteWorkout)
  .patch(updateWorkout);

export default router;
