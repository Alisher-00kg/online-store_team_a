import { configureStore } from "@reduxjs/toolkit";
import CardMainAdminSlicer from "./reducer/CardMainAdminslicer";
import CardMainSlicer from "./reducer/cardMainSlice";

export const store = configureStore({
  reducer: {
    cardsSlicer: CardMainSlicer,
    cardsAdminSlicer: CardMainAdminSlicer,
  },
});
