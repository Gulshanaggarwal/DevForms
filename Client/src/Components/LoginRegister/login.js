import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AppLogo from "../AppLogo/appLogo";

function Login() {
  const [email, setEmail] = useState(""); //  user email
  const [password, setPassword] = useState(""); // user password

  const history = useHistory();



  const handleLogin = (event) => {
    event.preventDefault();

    // fetch call

    fetch("https://devformms.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          window.localStorage.setItem('__auth__token', data.token);
          history.push('/forms')

        }
        else {
          alert("Wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <header className="px-8 py-4 bg-gray-100 shadow-xl">
        <AppLogo />
      </header>
      <section className="h-screen flex justify-center items-center">
        <div className="w-3/4 sm:w-1/3">
          <h1 className="text-xl my-2">Welcome to Login Page</h1>
          <p className="pb-8"><span className="text-gray-600">Or</span> <Link to="/register" className="text-blue-600 underline">Register quickly</Link></p>
          <form className="flex flex-col">
            <input
              className="p-2 my-2 bg-gray-200  outline-none focus:border-blue-500 border-2 rounded-md"
              type="email"
              value={email}
              placeholder="Your Registered Email"
              autoFocus
              required
              onChange={(event) => setEmail(event.target.value.trim())}
            />
            <input
              className="p-2 bg-gray-200 focus:border-blue-500 border-2 outline-none rounded-md"
              type="password"
              value={password}
              placeholder="Password"
              required
              onChange={(event) => setPassword(event.target.value.trim())}
            />
            <button
              className="p-2 bg-blue-500 my-2 text-white hover:bg-blue-600 rounded-md"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
          <Link to="/forget-password" className="py-4 text-blue-600 underline">Forget password?</Link>
        </div>
      </section>
    </div>
  );
}

export default Login;
