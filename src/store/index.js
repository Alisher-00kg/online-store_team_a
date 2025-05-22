import { configureStore } from "@reduxjs/toolkit";
import CardMainSlicer from "./reducer/cardMainSlice";

export const store = configureStore({
  reducer: {
    cardsSlicer: CardMainSlicer,
  },
});
