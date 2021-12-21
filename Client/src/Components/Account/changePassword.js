import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { DoNotify } from "../../features/NotificationSlice";

export default function ChangePassword() {
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const history = useHistory();
  
  const dispatch = useDispatch();




  const handleChangePassword = (event) => {
    event.preventDefault();

    if (NewPassword === ConfirmPass) {
      const token = localStorage.getItem("__auth__token");

      if (token) {
        // verify-token first

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
              // change password request

              fetch("https://devformms.herokuapp.com/changePassword", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: data.user.email, NewPassword }),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.status === "ok") {
                    dispatch(
                      DoNotify({
                        NotificationType: "success",
                        content: "Setting Saved!",
                      })
                    );
                  } else {
                    dispatch(
                      DoNotify({
                        NotificationType: "error",
                        content: "Error! try again",
                      })
                    );
                  }
                })
                .catch((err) =>
                  dispatch(
                    DoNotify({
                      NotificationType: "error",
                      content: "Error! try again",
                    })
                  )
                );
            }
          });
      }
    }
  };

  return (
    <div className="flex flex-col my-2">
      <label className="py-2 font-medium">Change Password</label>
      <input
        type="password"
        placeholder="New Password"
        className="bg-gray-200 rounded-md px-4 py-2"
        value={NewPassword}
        onChange={(event) => setNewPassword(event.target.value.trim())}
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        className="bg-gray-200 rounded-md px-4 py-2 my-4"
        value={ConfirmPass}
        onChange={(event) => setConfirmPass(event.target.value.trim())}
      />
      <button
        type="submit"
        onClick={handleChangePassword}
        className="bg-blue-500 text-gray-100 font-medium px-4 py-2 rounded-md w-36"
      >
        Save Changes
      </button>
    </div>
  );
}
