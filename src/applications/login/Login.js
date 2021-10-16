import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  function handleLogin() {
    //alert("login ", username, password);
    axios
      .post(
        "http://localhost:8080",
        {},
        {
          auth: {
            username: username,
            password: password,
          },
        }
      )
      .then((res) => {
        console.log("login res = ", res);
        let token = res.headers["x-auth-token"];
        console.log("token = ", token);
        localStorage.setItem("token", token);
        history.push("/");
        //getListUsers();
      })
      .catch((err) => {
        alert("Login failed");
        console.log("exception err = ", err.response);
        if (err.response.status == 401) {
          history.push("/login");
          console.log("catch err 401");
        } else {
          console.log("exception not 401 ", err.response);
        }
      });
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
