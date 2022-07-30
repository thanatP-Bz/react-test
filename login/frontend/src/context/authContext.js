import { useReducer, createContext, useContext, useEffect } from "react";
import { LOGIN } from "./authAction";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

const auth = {
  user: null,
  alertText: "",
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, auth);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: LOGIN, payload: user });
    }
  }, []);

  console.log(state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
