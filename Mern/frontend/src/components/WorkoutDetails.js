import React from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { title, reps, load, createdAt } = workout;
  const { dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  const deleteHandler = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.json}` },
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
      <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
      <div className="delete" onClick={deleteHandler}>
        delete
      </div>
      <div className="edit">edit</div>
    </div>
  );
};

export default WorkoutDetails;
