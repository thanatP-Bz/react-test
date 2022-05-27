import React, { useState, useContext, useReducer } from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT, CLEAR_ALERT, VALUE_ADDED } from "./actions";

const initialState = {
  firstName: "",
  showAlert: false,
  alertText: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const valueAdded = () => {
    dispatch({ type: VALUE_ADDED });
    clearAlert();
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert, valueAdded }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useAppContext, initialState };
