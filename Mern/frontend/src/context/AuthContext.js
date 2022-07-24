import { createContext, useReducer } from "react";
import authReducer from "./AuthReducer";

const AuthContext = createContext();

const auth = { user: null };

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, auth);

  console.log("AuthContext state:", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
