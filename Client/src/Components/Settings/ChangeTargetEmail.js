import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { ModifyTargetEmail } from "../../features/FormSlice";
import { DoNotify } from "../../features/NotificationSlice";

export default function ChangeTargetEmail({ targetEmail,FormId }) {
  const [NewTargetEmail, setNewTargetEmail] = useState(targetEmail);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const dispatch=useDispatch();
  const history=useHistory();



  const handleChangeTargetEmail=(event)=>{

    event.preventDefault();

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

          fetch("https://devformms.herokuapp.com/update-targetEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName: data.user.email,
              NewTargetEmail,
              FormId,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "ok") {
                dispatch(ModifyTargetEmail({ NewTargetEmail, FormId }));
                dispatch(DoNotify({NotificationType:"success",content:"Setting Saved!"}))
              }
            })
            .catch((err) => dispatch(DoNotify({NotificationType:"error",content:"Error! try again"})));
        }
      });

  }





  return (
    <form>
      <label className="text-xl font-medium">Target Email</label>
      <div className="flex my-2">
        <input
          className="bg-gray-300 rounded-md pl-3 py-2 w-1/2"
          type="text"
          value={NewTargetEmail}
          onChange={(event) => {
            const { value } = event.target;
            setNewTargetEmail(value.trim());

            if(value!==targetEmail){
                setButtonEnabled(true);
            }
            else{
                setButtonEnabled(false);
            }

          }}
        />
        {buttonEnabled ? (
          <button
            className="px-4 py-2 bg-blue-500 text-gray-100  rounded-md mx-4"
            type="submit"
            onClick={handleChangeTargetEmail}
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
