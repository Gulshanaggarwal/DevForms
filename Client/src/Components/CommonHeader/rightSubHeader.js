import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";


export default function RightSubHeader(){
    return(
        <div className="font-bold space-x-10 text-blue-500">
            <Link to="/forms" className="border-b-2 border-transparent hover:border-blue-500">Forms</Link>
            <Link to="/account" className="border-b-2 border-transparent hover:border-blue-500">Account</Link>
            <Logout/>
        </div>
    )
}