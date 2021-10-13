import React, { useEffect, useState } from "react";

export default function App() {
  const [points, setPoints] = useState([]);
  const [links, setLinks] = useState([]);
  function loadData() {
    let files = document.getElementById("inputfile").files;
    if (files.length == 0) return null;
    const file = files[0];
    let reader = new FileReader();

    reader.onload = (e) => {
      let lines = e.target.result;
      let listPoints = [];
      let listLinks = [];
      // console.log("lines = ", lines);
      lines = lines.split(/" "|\r\n/);
      let i = 0;
      let n = 0;
      let m = 0;
      let line0 = lines[0].split(" ");
      //console.log("line0 = ", line0, " length = ", line0.length);
      let j = 0;
      while (j < line0.length && line0[j] == "") j = j + 1;
      n = parseInt(line0[j]);
      j = j + 1;
      while (j < line0.length && line0[j] == "") j = j + 1;
      m = parseInt(line0[j]);

      //console.log("n = ", n, " m = ", m);

      for (let i = 1; i <= n; i++) {
        let linei = lines[i].split(" ");
        let j = 0;
        while (j < linei.length && linei[j] == "") j = j + 1;
        let id = parseInt(linei[j]);
        j = j + 1;
        while (j < linei.length && linei[j] == "") j = j + 1;
        let x = parseInt(linei[j]);
        j = j + 1;
        while (j < linei.length && linei[j] == "") j = j + 1;
        let y = parseInt(linei[j]);
        listPoints.push({ id: id, x: x, y: y });
        //console.log("id = ", id, " x = ", x, " y = ", y);
      }
      setPoints(listPoints);
      //console.log("onload points = ", points);

      for (let k = 1; k <= m; k++) {
        let linek = lines[k + n].split(" ");
        let j = 0;
        while (j < linek.length && linek[j] == "") j = j + 1;
        let b = parseInt(linek[j]);
        j = j + 1;
        while (j < linek.length && linek[j] == "") j = j + 1;
        let e = parseInt(linek[j]);
        listLinks.push({ b: b, e: e });
      }
      setLinks(listLinks);
    };

    //console.log(points);
    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
    //console.log("points = ", points);
  }
  function handleClick() {
    loadData();
    console.log("handleClick, points = ", points, " links = ", links);
    var canvas = document.getElementById("canvas");
    if (canvas == null) {
      console.log("cannot recognize canvas");
    } else {
      console.log("canvas OK");
    }
    const mId2Point = new Map();
    for (let i = 0; i < points.length; i++) {
      mId2Point.set(points[i].id, points[i]);
    }

    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 0.5;
    ctx.lineColor = "red";

    for (let i = 0; i < points.length; i++) {
      ctx.beginPath();
      let p = mId2Point.get(points[i].id);
      ctx.arc(p.y, p.x, 5, 0, 2 * Math.PI);
      ctx.stroke();
      console.log("p.x = ", p.x, " p.y = ", p.y);
    }
    for (let i = 0; i < links.length; i++) {
      let b = links[i].b;
      let e = links[i].e;

      let pb = mId2Point.get(b);
      let pe = mId2Point.get(e);
      ctx.moveTo(pb.y, pb.x);
      ctx.lineTo(pe.y, pe.x);
      console.log("moveTo ", pb.x, pb.y, " lineTo ", pe.x, pe.y);
      ctx.stroke();
    }
  }
  function handleClickClear() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  useEffect(() => {
    //handleClick();
  }, []);
  return (
    <div>
      <input type="file" id="inputfile"></input>
      <button onClick={handleClick}>Load</button>
      <button onClick={handleClickClear}>Clear</button>
      <canvas
        id="canvas"
        style={{
          height: "500px",
          width: "500px",
        }}
      ></canvas>
    </div>
  );
}
