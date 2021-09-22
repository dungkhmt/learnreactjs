import React from "react";

const data = [
  {
    id: "dung.phamquang",
    timetable: [
      { classId: "123143", startIdx: 1, endIdx: 4 },
      { classId: "133180", startIdx: 5, endIdx: 6 },
      { classId: "139188", startIdx: 8, endIdx: 10 },
      { classId: "123780", startIdx: 15, endIdx: 18 },
    ],
  },
  {
    id: "hai.phamdang",
    timetable: [
      { classId: "123143", startIdx: 10, endIdx: 12 },
      { classId: "133180", startIdx: 15, endIdx: 17 },
      { classId: "139188", startIdx: 25, endIdx: 30 },
      { classId: "123780", startIdx: 15, endIdx: 18 },
    ],
  },
];
const Box = ({ width, text, id }) => {
  const theme = {
    width: width + "px",
    height: "20px",
    borderWidth: "thin",
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const themeText = {};
  const handleClick = () => {
    alert("click cell " + id);
  };
  return (
    <div style={theme} onClick={handleClick}>
      <label className={themeText}>{text}</label>
    </div>
  );
};
const BoxRow = ({ widths, uw }) => {
  const theme = {
    display: "flex",
  };
  return (
    <div style={theme}>
      {widths.map((w, i) => (
        <div className="timetable-container">
          <Box width={w * uw} text={w} id={i} />
        </div>
      ))}
    </div>
  );
};
export default function App() {
  const width1 = [1, 3, 2, 4, 6];
  const width2 = [5, 4, 2, 3, 1];
  return (
    <>
      <div>
        <BoxRow widths={width1} uw={500} />
        <BoxRow widths={width2} uw={50} />
      </div>
    </>
  );
}
