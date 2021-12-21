import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { HideForm } from "../../features/CreateFormWindowSlice";
import { getForms } from "../../features/FormSlice";
import { DoNotify } from "../../features/NotificationSlice";

export default function CreateFormWindow({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formName, setFormName] = useState("");
  const [email, setEmail] = useState(user.email);

  function handleCreateForm(event) {
    event.preventDefault();

    if (formName === "" || email === "") {
      alert("can't empty");
    } else {
      // fetch call

      const token = localStorage.getItem("__auth__token"); //grab token

      fetch("https://devformms.herokuapp.com/verify-token", {
        headers: {
          "x-access-token": token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.user) {
            history.replace("/");
          } else {
            // one more call to store data

            const data = {
              userName: user.email,
              formName,
              targetEmail: email,
            };

            dispatch(getForms(data)).then((result)=>{
              if(result.type==="Forms/getForms/fulfilled"){
                dispatch(DoNotify({NotificationType:"success",content:"Hurrah! created successfully"}))
                dispatch(HideForm());
              }
              else{
                dispatch(DoNotify({NotificationType:"error",content:"Error! occurred"}))
              }
            });
          }
        });
    }
  }

  return (
    <section className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black z-auto">
      <div className="bg-gray-50 rounded-md w-5/6 sm:2/3">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 float-right m-2 cursor-pointer"
            viewBox="0 0 20 20"
            fill="black"
            onClick={() => dispatch(HideForm())}
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-xl p-4 font-medium">Create Form</h3>
        <form className="flex flex-col p-4">
          <label className="py-2">Form Name</label>
          <input
            type="text"
            value={formName}
            placeholder="My website"
            required
            className="p-2 bg-gray-200 rounded-md"
            onChange={(event) => setFormName(event.target.value)}
          />
          <label className="py-2">Send Emails To</label>
          <input
            type="email"
            value={email}
            placeholder="Enter email"
            required
            className="p-2 mb-2 bg-gray-200 rounded-md"
            onChange={(event) => setEmail(event.target.value.trim())}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md my-2"
            onClick={handleCreateForm}
          >
            Create Form
          </button>
        </form>
      </div>
    </section>
  );
}
