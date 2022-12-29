import { useEffect } from "react";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkouts();
  }, [dispatch, user]);

  return (
    <div>
      <div className="home">
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => {
              return <WorkoutDetails key={workout._id} workout={workout} />;
            })}
        </div>
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
