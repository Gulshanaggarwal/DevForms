import { createSlice } from "@reduxjs/toolkit";

const initialState={
    IsCreateFormWindowAppear:false
}

export const CreateFormWindowSlice=createSlice({
    name:"CreateFormWindow",
    initialState,
    reducers:{
        ShowForm:(state)=>{
            state.IsCreateFormWindowAppear=true
        },
        HideForm:(state)=>{
            state.IsCreateFormWindowAppear=false
        }
    }

})

export const {ShowForm,HideForm}=CreateFormWindowSlice.actions;