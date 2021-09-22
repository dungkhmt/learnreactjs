import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";
import Form from "./Form";
export default function RegisterPopupDialog(props) {
  const { open, onRegister, setOpen } = props;
  return (
    <Dialog open={open}>
      <DialogTitle>Register information</DialogTitle>
      <DialogContent>
        <Form onRegister={onRegister} setOpen={setOpen}></Form>
      </DialogContent>
    </Dialog>
  );
}
