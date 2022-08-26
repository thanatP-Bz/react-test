import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../context/action";

export const useLogin = () => {
  const { dispatch, clearAlert } = useAuthContext();

  const loginHook = async (currentUser) => {
    dispatch({ type: LOGIN_BEGIN });

    try {
      const response = await axios.post("/api/auth/login", currentUser);
      let { user, token } = response.data;
      dispatch({ type: LOGIN_SUCCESS, payload: { user, token } });

      //set to localstorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: { message: error.response.data.msg },
      });
    }
    clearAlert();
  };

  return { loginHook };
};
