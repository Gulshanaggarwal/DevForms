import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useHistory } from "react-router";
import { useDispatch,useSelector } from "react-redux";
import { DoNotify } from "../../features/NotificationSlice";
import { DelDialogClose } from "../../features/DelDialogSlice";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DelProjectDialog({ FormId }) {
  const open = useSelector(
    (state) => state.DelDialog.IsDelDialogOpen
  );
  const history = useHistory();
  const dispatch = useDispatch();

  

  const handleClose = () => {

    dispatch(DelDialogClose());
    
  };

  const handleAgree = () => {
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
          // Token verfied now make a call to delete project

          fetch("https://devformms.herokuapp.com/DeleteForm", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({userName:data.user.email, FormId }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "ok") {
                dispatch(DelDialogClose());
                history.replace("/forms");
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
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are You Sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Once you delete this form you won't be able to use it anymore.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
