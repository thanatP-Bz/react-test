import { createContext, useReducer } from "react";
import { SHOW_ALERT, CLEAR_ALERT } from "./action";
import reducer from "../context/reducer";
const AuthContext = createContext();

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setToLocalStorage = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeFromLocalStorage = (user, token) => {
    localStorage.removeItem("user", JSON.stringify(user));
    localStorage.removeItem("token", token);
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const displayAlert = () => {
    dispatch({ type: SHOW_ALERT });
    clearAlert();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        state,
        dispatch,
        displayAlert,
        clearAlert,
        setToLocalStorage,
        removeFromLocalStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, initialState, AuthContextProvider };
