import { createContext } from "react";

export interface Expense {
  _id: number;
  text?: string;
  amount: number;
}

type initialStateType = {
  transactions: Expense[];
};

export const initialState: initialStateType = {
  transactions: [],
};

const AppContext = createContext(initialState);
