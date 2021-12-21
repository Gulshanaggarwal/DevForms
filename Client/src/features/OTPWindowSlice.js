import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isOTPWindowVisible:false
}

export const OTPWindowSlice=createSlice({
    name:'OtpWindow',
    initialState,
    reducers:{
        Appear:(state)=>{
            state.isOTPWindowVisible=true
        },
        Hide:(state)=>{
            state.isOTPWindowVisible=false
        }
    }
})

export const {Appear,Hide}=OTPWindowSlice.actions;