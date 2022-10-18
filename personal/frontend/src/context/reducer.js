import {
  SHOW_ALERT,
  CLEAR_ALERT,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_BEGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  UPDATE_BEGIN,
  UPDATE_SUCCESS,
  UPDATE_ERROR,
  UPLOAD_SUCCESS,
  UPLOAD_ERROR,
} from "./action";

import { initialState } from "./authContext";

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
        alertText: "Sign up successfully redirecting...",
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
    case UPDATE_BEGIN: {
      return { ...state, isLoading: true };
    }
    case UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "alert-success",
        alertText: "Update successfully!",
        user: action.payload.user,
        token: action.payload.token,
      };
    case UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "alert-danger",
        alertText: action.payload.message,
      };
    case LOGOUT_USER:
      return {
        ...initialState,
        user: null,
        token: null,
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: false,
        alertType: "",
        alertText: "",
      };

    case UPLOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "alert-danger",
        alertText: "Please select an image file(png or jpeg)",
      };

    default:
      throw new Error();
  }
};

export default reducer;
