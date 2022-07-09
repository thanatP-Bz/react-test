import mongoose from "mongoose";
import Workout from "../model/workoutModel.js";

//POST a new workout
const createWorkouts = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//GET all workouts
const getAllWorkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({ createAt: -1 });

  res.status(200).json(workout);
};

//GET single workouts
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ msg: `no such workout` });
  }
  res.status(201).json(workout);
};

//DELETE workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: `no such workout` });
  }

  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ msg: `no such workout` });
  }

  res.status(200).json(workout);
};

//UPDATE workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: `no such workout` });
  }

  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });
  if (!workout) {
    return res.status(404).json({ msg: `no such workout` });
  }

  res.status(200).json(workout);
};

export {
  getAllWorkouts,
  getSingleWorkout,
  createWorkouts,
  deleteWorkout,
  updateWorkout,
};
