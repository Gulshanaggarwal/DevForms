import React from "react";
import { Link } from "react-router-dom";
import AppLogo from "../AppLogo/appLogo";

export default function Header() {
  return (
    <header className="flex justify-between px-8 py-4 bg-gray-100 shadow-xl">
      <AppLogo />
      <div className="space-x-2">
        <Link to="/register" className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md">
          Get Started
        </Link>
        <Link to="/login" className="px-4 py-2 bg-blue-200 text-blue-500 font-medium rounded-md">
          Sign in
        </Link>
      </div>
    </header>
  );
}
