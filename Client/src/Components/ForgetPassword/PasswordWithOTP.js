import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { HideForgetPasswordWindow } from "../../features/ForgetPasswordWindow";
import { useHistory } from "react-router-dom";
import { DoNotify } from "../../features/NotificationSlice";

export default function ChangePasswordWithVerifyOTP() {
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmNewPassword, setConfirmNewPassword] = useState("");
  const [userOTP, setUserOTP] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const handleChangePassword = (event) => {
    event.preventDefault();

    // fetch call to verify and change password

    if (NewPassword === ConfirmNewPassword) {
      fetch("https://devformms.herokuapp.com/forgetPassword/verifyOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ NewPassword, userOTP }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
            dispatch(
              DoNotify({
                NotificationType: "success",
                content: "changes successfully",
              })
            );
            history.replace("/login");
          } else {
            dispatch(
              DoNotify({
                NotificationType: "error",
                content: "Error! try again",
              })
            );
          }
        })
        .catch((err) =>
          dispatch(
            DoNotify({ NotificationType: "error", content: "Error! try again" })
          )
        );
    }
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black-transparent flex justify-center items-center">
      <div className="w-5/6 bg-gray-200 rounded-md shadow-2xl sm:w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 float-right m-2 cursor-pointer"
          viewBox="0 0 20 20"
          fill="black"
          onClick={() => dispatch(HideForgetPasswordWindow())}
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <form className="my-8 px-8 flex flex-col space-y-4 w-full">
          <input
            type="password"
            placeholder="Set New Password"
            value={NewPassword}
            className="px-3 py-2 rounded-md"
            onChange={(event) => setNewPassword(event.target.value.trim())}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={ConfirmNewPassword}
            className="px-3 py-2 rounded-md"
            onChange={(event) =>
              setConfirmNewPassword(event.target.value.trim())
            }
          />
          <input
            type="text"
            placeholder="Enter 6 digit OTP"
            className="px-3 py-2 rounded-md"
            onChange={(event) => {
              const { value } = event.target;
              if (value !== "" || value !== undefined) {
                setUserOTP(parseInt(event.target.value));
              }
            }}
          />
          <button type="submit" className="bg-blue-500 font-medium text-gray-100 rounded-md py-2 my-2" onClick={handleChangePassword}>
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
