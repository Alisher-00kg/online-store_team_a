import { configureStore } from "@reduxjs/toolkit";
import { CardMainAdminSlicer } from "./reducer/CardMainAdminslicer";

export const store = configureStore({
  reducer: {
    cardsAdmin: CardMainAdminSlicer.reducer,
  },
});
