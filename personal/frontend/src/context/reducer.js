import { SHOW_ALERT, CLEAR_ALERT } from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: "alert-danger",
        alertText: "Please provide values",
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertText: "",
        alertType: "",
      };
    default:
      throw new Error();
  }
};

export default reducer;
