import React, { useState } from "react";
import {Redirect } from "react-router-dom";
import ChangePassword from "./changePassword";

export default function DataField() {
  const [value,] = useState(() => {
    const token = localStorage.getItem("__auth__token");
    if (token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace("-", "+").replace("_", "/");
      return JSON.parse(window.atob(base64));
    }
  });


  

  return value ? (
    <section className="rounded-md w-5/6 px-8">
      <h2 className="font-bold text-2xl py-8">Account</h2>
      <form>
        <div className="flex flex-col">
          <label className="py-2 font-medium">Your Name</label>
          <input
            type="text"
            value={value.name}
            className="bg-gray-200 rounded-md px-4 py-2"
            disabled
          />
        </div>
        <div className="flex flex-col my-2">
          <label className="py-2 font-medium">Registered Email</label>
          <input
            type="text"
            disabled
            className="bg-gray-200 rounded-md px-4 py-2 focus:cursor-not-allowed"
            value={value.email}
          />
        </div>
        <ChangePassword/>
      </form>
    </section>
  ) : (
    <Redirect to="/" />
  );
}
