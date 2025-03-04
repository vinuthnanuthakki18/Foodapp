import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isAuthenticated: user ? true : false,
  user: user || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Persist login
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user"); // Clear session
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
