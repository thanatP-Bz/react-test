import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNUP_BEGIN } from "../context/action";

export const useSignup = () => {
  const { dispatch, clearAlert } = useAuthContext();

  const signupHook = async (currentUser) => {
    dispatch({ type: SIGNUP_BEGIN });

    try {
      const response = await axios.post("/api/auth/signup", currentUser);
      console.log(response.data);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });

      //set to local storage
    } catch (error) {
      console.log(error.response);
      /*   dispatch({
        type: SIGNUP_ERROR,
        payloa: { msg: error.response.data.msg },
      }); */
    }
    clearAlert();
  };
  return { signupHook };
};
