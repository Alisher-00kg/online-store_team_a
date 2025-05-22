import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../../utils/card";

export const BasketSlice = createSlice({
  name: "basketSlice",
  initialState: {
    products: cards,
    basket: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const item = action.payload;
      const existingItem = state.basket.find((card) => card.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.basket.push({ ...item, quantity: 1 });
      }
    },
    increase: (state, action) => {
      const item = state.basket.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrease: (state, action) => {
      const itemIndex = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        if (state.basket[itemIndex].quantity > 1) {
          state.basket[itemIndex].quantity -= 1;
        } else {
          state.basket.splice(itemIndex, 1);
        }
      }
    },
  },
});
export const { addToBasket, increase, decrease } = BasketSlice.actions;
export default BasketSlice.reducer;
