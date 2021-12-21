import React from "react";
import { useDispatch } from "react-redux";
import {ShowForm} from "../../features/CreateFormWindowSlice"


export default function CreateForm(){

    const dispatch=useDispatch();

    

    return(
        <section className="flex flex-col px-8 pt-48">
            <h2 className="text-center font-bold text-3xl">Your Forms</h2>
            <button className="px-4 py-2 mx-24 my-4 bg-blue-500 text-white font-medium rounded-md shadow-2xl self-end" onClick={()=>dispatch(ShowForm())}>+ New Form</button>
        </section>
    )
}