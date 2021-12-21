import React from "react";
import { useHistory } from "react-router-dom";



export default function Logout(){
    const history=useHistory();

    const handleLogout=()=>{

        localStorage.removeItem("__auth__token");
        history.replace("/");

    }

    return(
        <button type="button" className="px-3 py-2 font-light text-white bg-blue-400 rounded-md" onClick={handleLogout}>Logout</button>
    )
}