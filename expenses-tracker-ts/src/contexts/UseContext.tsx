import { createContext, useReducer, ReactNode, Dispatch } from "react";
import { initialState } from "./InitialState";
import { stateType } from "../Expense";
import { reducer } from "./reducer";
import { Actions } from "./action";

export type initialStateType = {
  transactions: stateType[];
  dispatch: Dispatch<Actions>;
  deleteTransaction: (id: number) => void;
};

type UseContextProviderType = {
  children: ReactNode;
};

const AppContext = createContext(initialState);

const AppContextProvider = ({ children }: UseContextProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function deleteTransaction(id: number) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  return (
    <AppContext.Provider value={{ ...state, dispatch, deleteTransaction }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
