import useAuthContext from "./useAuthContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove user from storage
    localStorage.removeItem("user");

    //dispatch
    dispatch({ type: "LOG_OUT" });
  };

  return { logout };
};

export default useLogout;
