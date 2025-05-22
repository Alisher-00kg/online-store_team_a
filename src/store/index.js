import { configureStore } from "@reduxjs/toolkit";
import { CardMainAdminSlicer } from "./reducer/CardMainAdminslicer";

export const store = configureStore({
  reducer: {
    cardsSlicer: CardMainSlicer,
    cardsAdminSlicer: CardMainAdminSlicer.reducer,
  },
});
