import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { HideNotify } from "../../features/NotificationSlice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification() {
  const {Notify,NotificationType,content} = useSelector((state) => state.Notification);
  

  const dispatch = useDispatch();

  const vertical = "bottom";
  const horizontal = "right";

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    dispatch(HideNotify());
  }

  return (
    <Snackbar
      open={Notify}
      autoHideDuration={1000}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert onClose={handleClose} severity={NotificationType}>
        {content}
      </Alert>
    </Snackbar>
  );
}
