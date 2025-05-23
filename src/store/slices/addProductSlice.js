import { createSlice } from "@reduxjs/toolkit";
import {
    deleteProduct,
  getProduct,
  patchProduct,
  postProduct,
} from "../thunks/addProductThunk";

export const addProductSlice = createSlice({
  name: "products",
  initialState: {
    value: "",
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postProduct.pending, (st) => {
        st.isLoading = true;
      })
      .addCase(postProduct.fulfilled, (st, { payload }) => {
        st.isLoading = false;
        st.items.push(payload);
      })
      .addCase(postProduct.rejected, (st, { payload }) => {
        st.isLoading = false;
        st.error = payload;
      })
      .addCase(getProduct.pending, (st) => {
        st.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (st, { payload }) => {
        st.isLoading = false;
        st.items = payload;
      })
      .addCase(getProduct.rejected, (st, { payload }) => {
        st.isLoading = false;
        st.error = payload;
      })
      .addCase(patchProduct.fulfilled, (state, { payload }) => {
        const idx = state.items.findIndex((p) => p.id === payload.id);
        if (idx !== -1) state.items[idx] = payload; 
      })
      .addCase(patchProduct.rejected, (st, { payload }) => {
        st.isLoading = false;
        st.error = payload;
      })
      .addCase(deleteProduct.fulfilled, (state, { payload: deletedId }) => {
        state.items = state.items.filter((item) => item.id !== deletedId);
      });
  },
});
export default addProductSlice.reducer;
