import React from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutDetails = ({ workout }) => {
  const { title, reps, load, createdAt } = workout;
  const { dispatch } = useWorkoutContext();

  const deleteHandler = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>
        <strong>Load (kg):</strong>
        {load}
      </p>
      <p>
        <strong>Reps (kg):</strong>
        {reps}
      </p>
      <p>{createdAt}</p>
      <div className="delete" onClick={deleteHandler}>
        delete
      </div>
      <div className="edit">edit</div>
    </div>
  );
};

export default WorkoutDetails;
