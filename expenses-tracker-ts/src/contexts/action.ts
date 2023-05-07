import { stateType } from "../Expense";

export type Actions =
  | { type: "DELETE_TRANSACTION"; payload: number }
  | {
      type: "ADD_TRANSACTION";
      payload: stateType;
    };
