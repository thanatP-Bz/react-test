import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/features/Cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
