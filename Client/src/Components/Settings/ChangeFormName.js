import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {ModifyFormName} from "../../features/FormSlice";
import { DoNotify } from "../../features/NotificationSlice";

export default function ChangeFormName({ formName, FormId }) {
  const [NewFormName, setNewFormName] = useState(formName);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const history = useHistory(); // use History Hook
  const dispatch = useDispatch();

  const handleChangeFormName = (event) => {
    event.preventDefault();

    // verify token first

    const token = localStorage.getItem("__auth__token");

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
          // fetch call to send change Form Name

          fetch("https://devformms.herokuapp.com/update-formName", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName: data.user.email,
              NewFormName,
              FormId,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "ok") {
                dispatch(ModifyFormName({ NewFormName, FormId }));
                dispatch(DoNotify({NotificationType:"success",content:"Setting Saved!"}))
              }
            })
            .catch((err) => dispatch(DoNotify({NotificationType:"error",content:"Error! try again"})));
        }
      });
  };

  return (
    <form className="py-2">
      <label className="text-xl font-medium">Form Name</label>
      <div className="flex my-2">
        <input
          className="bg-gray-300 rounded-md pl-3 py-2 w-1/2"
          type="text"
          value={NewFormName}
          onChange={(event) => {
            const { value } = event.target;
            setNewFormName(value.trim());

            if (value !== formName) {
              setButtonEnabled(true);
            } else {
              setButtonEnabled(false);
            }
          }}
        />
        {buttonEnabled ? (
          <button
            className="px-4 py-2 bg-blue-500 text-gray-100 rounded-md mx-4"
            type="submit"
            onClick={handleChangeFormName}
          >
            Save
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-gray-300 rounded-md mx-4"
            type="submit"
          >
            Save
          </button>
        )}
      </div>
    </form>
  );
}
