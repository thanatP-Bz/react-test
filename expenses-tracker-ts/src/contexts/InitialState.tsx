import { Dispatch } from "react";
import { stateType } from "../stateType";
import { Actions } from "./action";

type initialStateType = {
  transactions: stateType[];
  dispatch: Dispatch<Actions>;
  deleteTransaction: (id: number) => void;
  AddTransaction: (_id: number, text: string, amount: number) => void;
};

export const initialState = {
  transactions: [
    { _id: 1, text: "glass", amount: -34 },
    { _id: 2, text: "snack", amount: -20 },
    { _id: 3, text: "wine", amount: -50 },
    { _id: 4, text: "weekly pay", amount: 500 },
  ],
} as initialStateType;
