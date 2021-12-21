import React from "react";
import AppLogo from "../AppLogo/appLogo";
import RightSubHeader from "./rightSubHeader";


export default function CommonHeader(){
    return(
        <header className="w-full  flex justify-between px-8 py-8 shadow-xl">
            <AppLogo/>
            <RightSubHeader/>
        </header>
    )
}