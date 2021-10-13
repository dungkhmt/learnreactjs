import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
export default function Form({ onProcessLogin, setOpen }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div>
        <TextField
          label="username"
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>

        <TextField
          label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onProcessLogin(username, password)}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
      </div>
    </>
  );
}
