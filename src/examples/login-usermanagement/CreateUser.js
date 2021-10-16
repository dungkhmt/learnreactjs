import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
export default function CreateUser() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  const history = useHistory();

  function handleCreateUser() {
    let data = {
      username: username,
      password: password,
      email: email,
    };

    let token = localStorage.getItem("token");
    axios
      .post("http://localhost:8080/create-a-user", data, {
        headers: { "x-auth-token": token },
      })
      .then((res) => {
        console.log("create user successfully");
        history.push("/users");
      })
      .catch((err) => {
        console.log("Create user failed, err = ", err);
        if (err.response.status === 401) {
          history.push("/login");
        }
      });
  }
  return (
    <div>
      <h1>Create a User</h1>
      <TextField
        label="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField label="email" onChange={(e) => setEmail(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleCreateUser}>
        Create
      </Button>
    </div>
  );
}
