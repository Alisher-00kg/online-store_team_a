import { configureStore } from "@reduxjs/toolkit";
import CardMainSlicer from "./slices/cardMainSlice";
import authSlice from "./slices/authSlice";
import CardMainAdminSlicer from "./reducer/CardMainAdminslicer";
import addProductSlice from "./slices/addProductSlice";

export const store = configureStore({
  reducer: {
    cardsSlicer: CardMainSlicer,
    auth: authSlice,
    products: addProductSlice,
    cardsAdminSlicer: CardMainAdminSlicer,
  },
});
