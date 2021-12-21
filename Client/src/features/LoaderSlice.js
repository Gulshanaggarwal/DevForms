import { createSlice } from "@reduxjs/toolkit";

const initialState={
    IsLoaderActive:false
}

export const LoaderSlice=createSlice({
    name:"Loader",
    initialState,
    reducers:{
        Active:(state)=>{
            state.IsLoaderActive=true
        },
        Disable:(state)=>{
            state.IsLoaderActive=false
        }
    }
})

export const {Active,Disable}=LoaderSlice.actions;