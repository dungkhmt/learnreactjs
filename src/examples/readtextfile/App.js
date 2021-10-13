import React from "react";

export default function App() {
  function handleLoad() {
    let input = document.getElementById("inputfile");
    let textarea = document.getElementById("content");
    let files = input.files;
    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      const file = e.target.result;
      const lines = file.split(/\r\n|\n/);
      textarea.value = lines.join("\n");
      lines.map((line) => {
        console.log("read a line", line);
      });
    };
    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
  }
  return (
    <div>
      <input type="file" id="inputfile"></input>
      <textarea rows="20" cols="100" id="content"></textarea>
      <button onClick={handleLoad}>Load Data</button>
    </div>
  );
}
