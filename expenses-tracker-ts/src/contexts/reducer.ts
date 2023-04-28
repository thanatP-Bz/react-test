import { Actions } from "./action";
import { initialState } from "./UseContext";

const reducer = (
  state: typeof initialState,
  action: Actions
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
        transactions: [],
      };

    default:
      return state;
  }
};

export default reducer;
