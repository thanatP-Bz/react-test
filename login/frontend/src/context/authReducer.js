import { LOGIN, LOGIN_DANGER, LOGOUT } from "./authAction";

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: null };

    default:
      return state;
  }
};
