import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
export default function EditUser() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [user, setUser] = useState(null);
  const params = useParams();
  const history = useHistory();
  const userLoginId = params.userLoginId;
  console.log("EditUser, userLoginId = ", userLoginId);

  function handleEdit() {
    let data = {
      userLoginId: userLoginId,
      email: email,
      password: password,
    };

    let token = localStorage.getItem("token");
    axios
      .post("http://localhost:8080/edit-user", data, {
        headers: { "x-auth-token": token, "content-type": "application/json" },
      })
      .then((res) => res.data)
      .then((res) => {
        console.log("edit user successfully, u = ", res);
        history.push("/users");
      })
      .catch((err) => {
        console.log("Exception err = ", err);
        if (err.response.status === 401) {
          history.push("/login");
        }
      });
  }

  function getUser() {
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/get-user/" + userLoginId, {
        headers: { "x-auth-token": token },
      })
      .then((res) => res.data)
      .then((res) => {
        setUser(res);
        setEmail(res.email);
      })
      .catch((err) => {
        console.log("getUser err = ", err);
        if (err.response.status === 401) {
          history.push("/login");
        }
      });
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-around",
        padding: 20,
      }}
    >
      <div style={{ padding: "10px", minWidth: 500, border: "solid grey" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <TextField
            label="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <TextField
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </div>
        <div
          style={{
            padding: 30,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleEdit}>
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => history.push("/users")}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
