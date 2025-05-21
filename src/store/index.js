import { configureStore } from "@reduxjs/toolkit";
import { CardMainSlicer } from "./reducer/slicer";

export const store = configureStore({
  reducer: {
    cardsSlicer: CardMainSlicer.reducer,
  },
});
