import { createContext, useReducer } from "react";

type stateType = {
  _id: number;
  text: string;
  amount: number;
};

const initialState = {
  transactions: [{ _id: 1, text: "glass", amount: 34 }],
};

type Action =
  | { type: "DELETE_TRANSACTION"; payload: number }
  | {
      type: "ADD_TRANSACTION";
      payload: { _id: number; text: string; amount: number };
    };

const reducer = (
  state: typeof initialState,
  action: Action
): typeof initialState => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

type UseContextProviderType = {
  children: React.ReactNode;
};

export const UseAppContext = createContext(initialState);

export const AppContextProvider = ({ children }: UseContextProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UseAppContext.Provider value={{ ...state }}>
      {children}
    </UseAppContext.Provider>
  );
};
