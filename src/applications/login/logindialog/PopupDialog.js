import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";
import Form from "./Form";
export default function RegisterPopupDialog(props) {
  const { open, onProcessLogin, setOpen } = props;
  return (
    <Dialog open={open}>
      <DialogTitle>Login information</DialogTitle>
      <DialogContent>
        <Form onProcessLogin={onProcessLogin} setOpen={setOpen}></Form>
      </DialogContent>
    </Dialog>
  );
}
