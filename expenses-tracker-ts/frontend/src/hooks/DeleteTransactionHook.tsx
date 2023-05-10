import { UseAppContext } from "./UseAppContext";

export const DeleteTransactionHook = () => {
  const { dispatch } = UseAppContext();

  function deleteTransaction(id: number) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  return { deleteTransaction };
};
