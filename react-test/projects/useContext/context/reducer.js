import { DISPLAY_ALERT, CLEAR_ALERT, VALUE_ADDED } from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: "please provide value",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
    };
  }

  if (action.type === VALUE_ADDED) {
    return {
      ...state,
      showAlert: true,
      alertText: "item added",
      people: [...state.people, action.payload],
    };
  }

  throw new Error(`There is no ${action}`);
};

export default reducer;
