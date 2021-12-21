import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Hide } from "../../features/OTPWindowSlice";
import { Active, Disable } from "../../features/LoaderSlice";
import { useHistory } from "react-router-dom";

export default function OTPWindow({ name, email, password }) {
  const [userOTP, setUserOTP] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  function verifyOTP(event) {
    event.preventDefault();

    dispatch(Active());

    fetch("https://devformms.herokuapp.com/register/verifyOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        userOTP,
      })
    })
      .then((res) => {
        dispatch(Disable());
        return res.json();
      })
      .then((data) => {
        if (data.status === "ok") {
          if (data.verified) {
            alert("Registered successfully");

            history.push("/login");
          } else {
            alert("incorrect OTP");
          }
        } else {
          alert("error occurred");
        }
      });
  }

  return (
    <section className="w-full h-full fixed top-0 left-0 bg-black-transparent flex justify-center items-center">
      <div className="w-5/6 bg-gray-200 rounded-md shadow-2xl sm:w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 float-right m-2 cursor-pointer"
          viewBox="0 0 20 20"
          fill="black"
          onClick={() => dispatch(Hide())}
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <div className="text-center my-4">
          <p className="py-2 font-medium text-xl">Enter 6 digit OTP</p>
          <p className="text-green-700 text-center">OTP Sent Successfully</p>
        </div>
        <form className="flex flex-col px-4 my-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={userOTP}
            className="px-3 py-2 rounded-md"
            required
            onChange={(event) =>{
              const {value}=event.target;
              if(value!=="" || value!==undefined){
                setUserOTP(parseInt(event.target.value));
              }
            }
            }
          />
          <button type="submit" onClick={verifyOTP} className="bg-blue-500 font-medium text-gray-100 rounded-md py-2 my-2">
            Verify
          </button>
        </form>
      </div>
    </section>
  );
}
