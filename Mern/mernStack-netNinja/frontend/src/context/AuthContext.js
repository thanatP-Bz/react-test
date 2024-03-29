import { createContext, useEffect, useReducer } from "react";
import authReducer from "./AuthReducer";

const AuthContext = createContext();

const auth = { user: null };

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, auth);

  //
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    if (user) {
      dispatch({ type: "LOG_IN", payload: user });
    }
  }, []);

  console.log("AuthContext state:", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
