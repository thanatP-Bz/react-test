import { UseAppContext } from "./UseAppContext";

export const AddTransactionHook = () => {
  const { dispatch } = UseAppContext();

  const addTransaction = (_id: number, text: string, amount: number) => {
    dispatch({ type: "ADD_TRANSACTION", payload: { _id, text, amount } });
  };
  return { addTransaction };
};
