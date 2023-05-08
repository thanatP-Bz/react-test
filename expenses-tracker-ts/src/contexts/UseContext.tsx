import { createContext, useReducer, ReactNode } from "react";
import { initialState } from "./InitialState";
import { reducer } from "./reducer";

const AppContext = createContext(initialState);

type UseContextProviderType = {
  children: ReactNode;
};

const AppContextProvider = ({ children }: UseContextProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function deleteTransaction(id: number) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function AddTransaction(_id: number, text: string, amount: number) {
    dispatch({ type: "ADD_TRANSACTION", payload: { _id, text, amount } });
  }

  return (
    <AppContext.Provider
      value={{ ...state, dispatch, deleteTransaction, AddTransaction }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
