import { LOGOUT } from "../context/authAction";
import { useAuthContext } from "../context/authContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove local storage
    localStorage.removeItem("user");

    //dispatch
    dispatch({ type: LOGOUT });
  };

  return { logout };
};
