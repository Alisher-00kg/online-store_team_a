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
    toggleFavorite: (state, { payload }) => {
      const inFav = state.favoriteCards.some((c) => c.id === payload.id);
      const cardWithImg = {
        ...payload,
        image: payload.image || payload.colors?.[0]?.image,
        quantity: 1,
      };

      if (inFav) {
        state.favoriteCards = state.favoriteCards.filter(
          (c) => c.id !== payload.id
        );
        state.mainCards = state.mainCards.map((c) =>
          c.id === payload.id ? { ...c, isFavorite: false } : c
        );
      } else {
        state.favoriteCards.push(cardWithImg);
        state.mainCards = state.mainCards.map((c) =>
          c.id === payload.id ? { ...c, isFavorite: true } : c
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
