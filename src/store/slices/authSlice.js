import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "GUEST",
  token: null,
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.role = "GUEST";
      state.token = null;
      state.user = null;
    },
  },
});
export const { setRole, setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
