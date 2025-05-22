import { createSlice } from "@reduxjs/toolkit";

export const CardMainSlicer = createSlice({
  name: "CardMainSlicer",
  initialState: {
    error: null,
    role: "GUEST",
    isloading: false,
    womanCardAdmin: [],
    childrenCardAdmin: [],
    manCardAdmin: [],
  },
  reducers: {
    addCardWoman: (state, action) => {
      state.womanCardAdmin = [...state.womanCardAdmin, action.payload];
    },
    addCardMan: (state, action) => {
      state.manCardAdmin = [...state.manCardAdmin, action.payload];
    },
    addCardChildren: (state, action) => {
      state.childrenCardAdmin = [...state.childrenCardAdmin, action.payload];
    },
    deleteCardWoman: (state, action) => {
      state.womanCardAdmin = state.womanCardAdmin.filter(
        (item) => item.id !== action.payload
      );
    },
    deleteCardChildren: (state, action) => {
      state.childrenCardAdmin = state.childrenCardAdmin.filter(
        (item) => item.id !== action.payload
      );
    },
    deleteCardMan: (state, action) => {
      state.manCardAdmin = state.manCardAdmin.filter(
        (item) => item.id !== action.payload
      );
    },
    editCardWoman: (state, action) => {
      state.womanCardAdmin = state.womanCardAdmin.map((item) =>
        item.id === action.payload.id ? { ...action.payload } : item
      );
    },
    editCardMan: (state, action) => {
      state.manCardAdmin = state.manCardAdmin.map((item) =>
        item.id === action.payload.id ? { ...action.payload } : item
      );
    },
    editCardChildren: (state, action) => {
      state.childrenCardAdmin = state.childrenCardAdmin.map((item) =>
        item.id === action.payload.id ? { ...action.payload } : item
      );
    },
  },
});

export const {
  toggleFavorite,
  addToShop,
  increase,
  decrease,
  addCardWoman,
  addCardMan,
  addCardChildren,
  deleteCardWoman,
  deleteCardMan,
  deleteCardChildren,
  editCardWoman,
  editCardMan,
  editCardChildren,
} = CardMainSlicer.actions;
