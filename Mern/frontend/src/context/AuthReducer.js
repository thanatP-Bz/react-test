const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { user: action.payload };
    case "LOG_IN":
      return { user: action.payload };
    case "LOG_OUT":
      return { user: null };
    default:
      return state;
  }
};

export default authReducer;
