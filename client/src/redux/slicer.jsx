import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';

const authSlice = configureStore({ reducer :{  auth : authReducer}});

export default authSlice;