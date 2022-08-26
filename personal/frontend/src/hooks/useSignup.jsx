import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNUP_BEGIN } from "../context/action";

export const useSignup = () => {
  const { dispatch, clearAlert } = useAuthContext();

  const signupHook = async (currentUser) => {
    dispatch({ type: SIGNUP_BEGIN });

    try {
      const response = await axios.post("/api/auth/signup", currentUser);
      let { user } = response.data;
      dispatch({ type: SIGNUP_SUCCESS, payload: user });
      console.log(user);
      //set to local storage
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: SIGNUP_ERROR,
        payload: { message: error.response.data.msg },
      });
    }
    clearAlert();
  };
  return { signupHook };
};
