import { createContext, useReducer } from "react";
import { SHOW_ALERT, CLEAR_ALERT } from "./action";
import reducer from "../context/reducer";
import axios from "axios";

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
  name: "ice",
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //axios
  const authFetch = axios.create({
    baseURL: "/api",
  });

  //requrest
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        console.log(`AUTH ERROR`);
      }
      return Promise.reject(error);
    }
  );

  const updateUser = async (currentUser) => {
    try {
      const { data } = await authFetch.patch("/auth/updateuser", currentUser);
      console.log(data);
    } catch (error) {}
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
        dispatch,
        displayAlert,
        clearAlert,
        updateUser,
        authFetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
