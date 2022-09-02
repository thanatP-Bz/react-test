import { useAuthContext } from "./useAuthContext";
import { LOGOUT_USER } from "../context/action";

export const useLogout = () => {
  const { dispatch, user, token, removeFromLocalStorage } = useAuthContext();

  const logoutHook = () => {
    dispatch({ type: LOGOUT_USER });

    //remove from localstorage
    removeFromLocalStorage(user, token);
  };

  return { logoutHook };
};
