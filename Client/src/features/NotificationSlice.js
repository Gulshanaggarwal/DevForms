import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Notify:false,
    NotificationType:"",
    content:""
}


export const NotificationSlice=createSlice({
    name:"Notification",
    initialState,
    reducers:{
        DoNotify:(state,action)=>{
            state.Notify=true
            state.NotificationType=action.payload.NotificationType
            state.content=action.payload.content
        },
        HideNotify:(state)=>{
            state.Notify=false
        }
    }

})

export const {DoNotify,HideNotify}=NotificationSlice.actions;