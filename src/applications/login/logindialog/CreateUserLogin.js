import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
export default function CreateUserLogin() {
  const [userLoginId, setUserLoginId] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleClick() {
    var data = {
      userLoginId: userLoginId,
      password: password,
    };
    let token = localStorage.getItem("token");
    console.log("token = ", token);

    axios
      .post("http://localhost:8080/create-userlogin", data, {
        headers: { "x-auth-token": token, "content-type": "application/json" },
      })
      .then((res) => res.data)
      .then((res) => {
        console.log("create user successully");
        history.push("/users");
      })
      .catch((err) => {
        console.log("error, err = ", err);
        if (err.response.status === 401) {
          console.log("Catch exception 401!! -> redirect to Login");
          history.pushState("/login");
        }
      });
  }
  return (
    <div>
      <TextField
        label="username"
        onChange={(e) => setUserLoginId(e.target.value)}
      />
      <TextField
        label="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleClick}>Create</Button>
    </div>
  );
}
