import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const history = useHistory();
  function handleLogin() {
    alert("login ", username, password);
  }
  function handleCancel() {
    //history.push("/users");
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <div>
          <TextField
            label="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}
