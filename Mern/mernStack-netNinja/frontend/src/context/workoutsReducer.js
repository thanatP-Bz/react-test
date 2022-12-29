const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case "UPDATE_WORKOUT":
      return {
        workouts: [...state.workouts, action.payload],
      };
    default:
      return state;
  }
};

export default workoutsReducer;
