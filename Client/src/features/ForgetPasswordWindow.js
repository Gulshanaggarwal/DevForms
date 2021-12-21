import { createSlice } from "@reduxjs/toolkit";

const initialState={
    IsForgetPasswordWindow:false
}


export const ForgetPasswordSlice=createSlice({
    name:"ForgetPassword",
    initialState,
    reducers:{
        ShowForgetPasswordWindow:(state)=>{
            state.IsForgetPasswordWindow=true
        },
        HideForgetPasswordWindow:(state)=>{
            state.IsForgetPasswordWindow=false;
        }
    }
})

export const {ShowForgetPasswordWindow,HideForgetPasswordWindow}=ForgetPasswordSlice.actions;