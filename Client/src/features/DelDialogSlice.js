import { createSlice } from "@reduxjs/toolkit";

const initialState={
    IsDelDialogOpen:false
}


export const DelDialogSlice=createSlice({
    name:"DelDialog",
    initialState,
    reducers:{
        DelDialogOpen:(state)=>{
            console.log('called');
            state.IsDelDialogOpen=true
        },
        DelDialogClose:(state)=>{
            state.IsDelDialogOpen=false
        }

    }
})

export const {DelDialogOpen,DelDialogClose}=DelDialogSlice.actions;