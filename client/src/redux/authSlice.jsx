import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
  isAuthenticated: user ? true : false,
  user: user ? {
    _id : user._id,
    email : user.email,
    name : user.name,
    password : user.password,
    createdAt : user.createdAt,
    dateOfBirth : user.dateOfBirth,
    gender : user.gender,
  } : null,
};
console.log("user1",user);
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
      localStorage.removeItem("user"); 
      localStorage.removeItem("token");// Clear session
    },
    update: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
        dateOfBirth : action.payload.dateOfBirth,
        gender : action.payload.gender,
      }
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { login, logout, update } = authSlice.actions;
export default authSlice.reducer;
