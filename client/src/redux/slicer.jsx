import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import restReducer from './restSlice';

const authSlice = configureStore({ reducer :{  auth : authReducer, rest : restReducer}});

export default authSlice;