import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ShowForgetPasswordWindow } from "../../features/ForgetPasswordWindow";
import {DoNotify} from "../../features/NotificationSlice"

export default function MainComponentForgetPassword() {
  const [email, setEmail] = useState("");
  const dispatch=useDispatch();

  const handleSendOTP = (event) => {
    event.preventDefault();

    // fetch call to send otp

    fetch("https://devformms.herokuapp.com/forgetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.status==="ok"){
          dispatch(ShowForgetPasswordWindow());
        }
        else{
          dispatch(DoNotify({NotificationType:"error",content:"Error! try again"}))
        }
      })
      .catch((err) =>dispatch(DoNotify({NotificationType:"error",content:"Error! try again"}))) ;
  };

  return (
    <div>
      <div className="flex flex-col px-32 py-24 w-2/3">
        <div>
          <h3 className="font-bold text-2xl py-2">
            Enter Your Registered Email
          </h3>
          <h3 className="font-bold text-2xl">
            We'll send you OTP to reset your password
          </h3>
        </div>
        <form className="flex flex-col w-5/6 py-4 space-y-4">
          <input
            type="email"
            placeholder="xyz@gmail.com"
            className="px-3 py-2 rounded-md bg-gray-200"
            onChange={(event) => setEmail(event.target.value.trim())}
            required
          />
          <button
            className="bg-blue-500 text-gray-100 font-medium py-2 px-3 rounded-md w-32"
            onClick={handleSendOTP}
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}
