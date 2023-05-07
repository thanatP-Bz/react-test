import { initialStateType } from "./UseContext";

export const initialState = {
  transactions: [
    { _id: 1, text: "glass", amount: -34 },
    { _id: 2, text: "snack", amount: 20 },
  ],
} as initialStateType;
