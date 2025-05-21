import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./slices/BasketSlice";

export const store = configureStore({
  reducer: {
    basket: BasketReducer,
  },
});
