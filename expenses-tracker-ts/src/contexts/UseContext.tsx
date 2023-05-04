import { createContext, useReducer } from "react";
import { Action } from "redux";

type stateType = {
  _id: number;
  text: string;
  amount: number;
};

type initialStateType = {
  transactions: stateType[];
};

const initialState: initialStateType = {
  transactions: [
    { _id: 1, text: "glass", amount: 34 },
    { _id: 2, text: "snack", amount: 20 },
  ],
};

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

type UseContextProviderType = {
  children: React.ReactNode;
};

const AppContext = createContext(initialState);

const AppContextProvider = ({ children }: UseContextProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
