import React from "react";
import { useSelector } from "react-redux";
import MainComponentForgetPassword from "./mainComponent";
import ChangePasswordWithVerifyOTP from "./PasswordWithOTP";
import Notification from "../Notification/Notification"

export default function ForgetPassword() {

    const IsWindow=useSelector((state)=>state.ForgetPassword.IsForgetPasswordWindow)
  return (
    <div>
      <MainComponentForgetPassword />
      {IsWindow && (<ChangePasswordWithVerifyOTP />)}
      <Notification/>
    </div>
  );
}
