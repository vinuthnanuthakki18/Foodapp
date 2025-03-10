import { createSlice } from "@reduxjs/toolkit";

const initialState={
    restData : [],
    isSearch : false,
    isLoading : true,
    // currentPage : 1,
    // totalPages : 1,
    // itemsPerPage : 12,
    // isLoading : true,
};

const restSlice = createSlice({
    name : "restaurants",
    initialState,
    reducers:{
        updateData: (state, action)=>{
            state.restData = action.payload,
            localStorage.setItem("data", JSON.stringify(action.payload)); // Persist login
        },
        updateisSearch :(state, action)=>{
            state.isSearch = action.payload;
        },
        updateisLoading : (state, action)=>{
            state.isLoading= action.payload;
        }
    }
});

export const {updateData, updateisSearch, updateisLoading} = restSlice.actions;

export default restSlice.reducer;