import {
  SHOW_ALERT,
  CLEAR_ALERT,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_BEGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
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
        alertText: "Sign up success redirecting...",
        user: action.payload.user,
        token: action.payload.token,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "alert-danger",
        alertText: action.payload.message,
      };
    case LOGIN_BEGIN: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "alert-success",
        alertText: "Log in success redirecting...",
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "alert-danger",
        alertText: action.payload.message,
      };

    default:
      throw new Error();
  }
};

export default reducer;
