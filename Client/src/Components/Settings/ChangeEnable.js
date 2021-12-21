import React from "react";
import Switch from "@mui/material/Switch";
import { useDispatch } from "react-redux";
import { DoNotify } from "../../features/NotificationSlice";
import { ModifyEnableSetting } from "../../features/FormSlice";
import { useHistory } from "react-router-dom";

export default function ChangeEnable({ isEnabled, FormId }) {
  const [checked, setChecked] = React.useState(isEnabled);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    // verify token first
    
    setChecked(event.target.checked);
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
          // fetch call to change into db

          fetch("https://devformms.herokuapp.com/update-EnableSetting", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName: data.user.email,
              NewEnableSetting: event.target.checked,
              FormId,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "ok") {
               
                dispatch(
                  ModifyEnableSetting({
                    NewEnableSetting: event.target.checked,
                    FormId,
                  })
                );
                dispatch(
                  DoNotify({
                    NotificationType: "success",
                    content: "Setting Saved!",
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
  };

  return (
    <div className="flex items-center py-4">
      <div className="w-1/2">
        <h2 className="font-medium text-xl">Form Enabled</h2>
        <p className="text-gray-600">Do check to allow new submissions</p>
      </div>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
}
