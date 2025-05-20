import { createSlice } from "@reduxjs/toolkit";
import { dresses } from "../../utils/constants/mainCardArray";

export const CardMainSlicer = createSlice({
  name: "CardMainSlicer",
  initialState: {
    error: null,
    role: "GUEST",
    isloading: false,
    mainCards: dresses,
    shopCards: [],
    favoriteCards: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const isExist = state.shopCards.find(
        (item) => item.id === action.payload.id
      );
      if (!isExist) {
        state.mainCards = state.mainCards.map((item) =>
          item.id === action.payload.id ? { ...item, isFavorite: true } : item
        );
        state.shopCards = [...state.shopCards, action.payload];
      } else {
        state.shopCards = state.shopCards.filter(
          (item) => item.id !== action.payload.id
        );
        state.mainCards = state.mainCards.map((item) =>
          item.id === action.payload.id ? { ...item, isFavorite: false } : item
        );
      }
    },

    addToShop: (state, action) => {
      const isExist = state.shopCards.find(
        (item) => item.id === action.payload.id
      );

      if (!isExist) {
        state.shopCards = [
          ...state.shopCards,
          { ...action.payload, quantity: 1 },
        ];
      } else {
        state.shopCards = state.shopCards.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                cost: item.cost + action.payload.cost,
                quantity: item.quantity + 1,
              }
            : item
        );
      }
    },

    increase: (state, action) => {
      state.shopCards = state.shopCards.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              cost: item.cost + action.payload.cost,
              quantity: item.quantity + 1,
            }
          : item
      );
    },

    decrease: (state, action) => {
      const targetItem = state.shopCards.find(
        (item) => item.id === action.payload.id
      );

      if (targetItem?.quantity === 1) {
        state.shopCards = state.shopCards.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.shopCards = state.shopCards.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                cost: item.cost - action.payload.cost,
                quantity: item.quantity - 1,
              }
            : item
        );
      }
    },
  },
});

export const { toggleFavorite, addToShop, increase, decrease } =
  CardMainSlicer.actions;
export default CardMainSlicer.reducer;
