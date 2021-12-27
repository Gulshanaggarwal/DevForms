import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Appear } from "../../features/OTPWindowSlice";
import { Active, Disable } from "../../features/LoaderSlice";
import OTPWindow from "./otpwindow";
import Loader from "../Loader/loading";
import { Link } from "react-router-dom";
import AppLogo from "../AppLogo/appLogo";

function Register() {
  const [name, setName] = useState(""); // setName
  const [email, setEmail] = useState(""); // set User email
  const [password, setPassword] = useState(""); // setuser password

  const isOTPWindow = useSelector(
    (state) => state.OtpWindow.isOTPWindowVisible
  );
  const IsLoader = useSelector((state) => state.Loader.IsLoaderActive);
  const dispatch = useDispatch();

  function handleSignUp(event) {
    event.preventDefault();

    dispatch(Active());

    fetch("https://devformms.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => {
        dispatch(Disable());
        return res.json()
      })
      .then((data) => {
        if (data.status === "ok") {
          if (!data.user) {
            if (data.sent) {
              dispatch(Appear());
            } else {
              alert("OTP error");
            }
          } else {
            alert("User alreaady exists");
          }
        } else {
          alert("error occurred");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <React.Fragment>
      <header className="px-8 py-4 bg-gray-100 shadow-xl">
        <AppLogo/>
      </header>
      <div className="h-screen flex justify-center items-center">
        <div className="w-3/4 sm:w-1/3">
          <h1 className="text-xl py-4 font-bold">Welcome to Sign up Page</h1>
          <form className="flex flex-col">
            <input
              className="p-2 my-2 bg-gray-200 outline-none rounded-md focus:border-blue-500 border-2"
              type="text"
              value={name}
              placeholder="Your Name"
              autoFocus
              required
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="p-2 my-2 bg-gray-200 outline-none rounded-md focus:border-blue-500 border-2"
              type="email"
              value={email}
              placeholder="Your Email"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="p-2 bg-gray-200 focus:border-blue-500 border-2 outline-none rounded-md"
              type="password"
              value={password}
              placeholder="Set Password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              className="p-2 bg-blue-500 my-2 text-white hover:bg-blue-600 rounded-md"
              type="submit"
              onClick={handleSignUp}
            >
              Sign up
            </button>
          </form>
          <p className="py-4"><span className="text-gray-600">Already have an account?</span><Link to="/login" className="px-2 text-blue-600">Sign in!</Link></p>
        </div>
      </div>
      {isOTPWindow && <OTPWindow name={name} email={email} password={password} />}
      {IsLoader && (<Loader />)}
    </React.Fragment>
  );
}

export default Register;
