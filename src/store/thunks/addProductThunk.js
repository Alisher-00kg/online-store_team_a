import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const postProduct = createAsyncThunk(
  "products/postProduct",
  async (cardData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/products", cardData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/products");
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
export const patchProduct = createAsyncThunk(
  "products/patchProduct",
  async (cardData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.patch(
        `/products/${cardData.id}`,
        cardData
      );
      return data;
    } catch (e) {
      return rejectWithValue(e.message || "Update failed");
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/products/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message || "Ошибка удаления");
    }
  }
);
