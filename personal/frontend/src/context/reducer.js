import {
  SHOW_ALERT,
  CLEAR_ALERT,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
} from "./action";

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
    case SIGNUP_BEGIN: {
      return { ...state, isLoading: true };
    }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "alert-success",
        alertText: "Log in success redirecting...",
        user: action.payload,
      };

    default:
      throw new Error();
  }
};

export default reducer;
