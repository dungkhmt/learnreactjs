import axios from "axios";
import React, { useState } from "react";

export default function App() {
  function handleUpload() {
    let fd = new FormData();
    fd.append("myfile", selectedFile, selectedFile.name);
    let token = localStorage.getItem("token");
    axios
      .post("http://localhost:8080/public/upload-file", fd)
      .then((res) => {
        console.log("upload succesfully, res = ", res);
      })
      .catch((err) => {
        console.log("upload exception, err = ", err);
      });
  }
  const [selectedFile, setSelectedFile] = useState(null);
  function handleChangeFile(e) {
    console.log("chang selected file ", e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  }
  return (
    <div>
      <input type="file" onChange={handleChangeFile}></input>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
