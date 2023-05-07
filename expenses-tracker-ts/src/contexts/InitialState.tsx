import { initialStateType } from "./UseContext";

export const initialState = {
  transactions: [
    { _id: 1, text: "glass", amount: -34 },
    { _id: 2, text: "snack", amount: -20 },
    { _id: 3, text: "wine", amount: -50 },
    { _id: 4, text: "weekly pay", amount: 500 },
  ],
} as initialStateType;
