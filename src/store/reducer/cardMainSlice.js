import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../../utils/card";

export const CardMainSlicer = createSlice({
  name: "CardMainSlicer",
  initialState: {
    error: null,
    role: "GUEST",
    isloading: false,
    mainCards: cards,
    shopCards: [],
    favoriteCards: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const isExist = state.favoriteCards.find(
        (item) => item.id === action.payload.id
      );
      if (!isExist) {
        state.favoriteCards = [
          ...state.favoriteCards,
          { ...action.payload, quantity: 1 },
        ];
        state.mainCards = state.mainCards.map((item) =>
          item.id === action.payload.id ? { ...item, isFavorite: true } : item
        );
      } else {
        state.favoriteCards = state.favoriteCards.filter(
          (item) => item.id !== action.payload.id
        );
        state.mainCards = state.mainCards.map((item) =>
          item.id === action.payload.id ? { ...item, isFavorite: false } : item
        );
      }
    },
    addToBasket: (state, action) => {
      const item = action.payload;
      const existingItem = state.shopCards.find((card) => card.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.shopCards.push({ ...item, quantity: 1 });
      }
    },
    increase: (state, action) => {
      const item = state.shopCards.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrease: (state, action) => {
      const itemIndex = state.shopCards.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        if (state.shopCards[itemIndex].quantity > 1) {
          state.shopCards[itemIndex].quantity -= 1;
        } else {
          state.shopCards.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { toggleFavorite, addToBasket, increase, decrease } =
  CardMainSlicer.actions;
export default CardMainSlicer.reducer;
