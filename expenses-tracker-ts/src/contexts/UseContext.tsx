import { createContext } from "react";

export interface Expense {
  _id: number;
  text: string;
  amount: number;
}

type initialStateType = {
  transactions: Expense[];
};

type Action =
  | { type: "DELETE_TRANSACTION"; payload: number }
  | { type: "ADD_TRANSACTION"; payload: string };

export const initialState: initialStateType = {
  transactions: [{ _id: 1, text: "glass", amount: 34 }],
};

const reducer = (state: typeof initialState, action: Action) => {
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
        transactions: [...state.transactions, { text: action.payload }],
      };
    default:
      return state;
  }
};

export default reducer;

const AppContext = createContext(initialState);
