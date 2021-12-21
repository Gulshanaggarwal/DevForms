import { configureStore } from '@reduxjs/toolkit'
import { OTPWindowSlice } from '../features/OTPWindowSlice'
import { LoaderSlice } from '../features/LoaderSlice'
import { CreateFormWindowSlice } from '../features/CreateFormWindowSlice'
import { FormSlice } from '../features/FormSlice'
import { NotificationSlice } from '../features/NotificationSlice'
import { DelDialogSlice } from '../features/DelDialogSlice'
import { ForgetPasswordSlice } from '../features/ForgetPasswordWindow'



export const store=configureStore({
    reducer:{
        OtpWindow:OTPWindowSlice.reducer,
        Loader:LoaderSlice.reducer,
        CreateFormWindow:CreateFormWindowSlice.reducer,
        Forms:FormSlice.reducer,
        Notification:NotificationSlice.reducer,
        DelDialog:DelDialogSlice.reducer,
        ForgetPassword:ForgetPasswordSlice.reducer,
    }
})