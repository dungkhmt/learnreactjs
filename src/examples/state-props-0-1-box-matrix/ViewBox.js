import Box from "@material-ui/core/Box";
import map from "lodash/map";
import range from "lodash/range";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
function row(r, sz, matrix, setMatrix) {
  function handleClickBox(e) {
    //alert("click box " + e.id);
    var rc = e.target.id.split(",");
    console.log("click box ", e.target.id, " row = ", rc[0], "col = ", rc[1]);
    const m = [...matrix];
    m[rc[0]][rc[1]] = 1 - m[rc[0]][rc[1]];
    setMatrix(m);
    console.log(m);
    localStorage.setItem("matrix", JSON.stringify(matrix));
  }
  return (
    <Box display="flex" justifyContent="center" key={r}>
      {map(range(sz), (i) => {
        return (
          <Box
            key={r + "," + i}
            border={1}
            height={"1rem"}
            width={"1rem"}
            bgcolor={matrix[r][i] === 1 ? "black" : "white"}
            id={r + "," + i}
            onClick={handleClickBox}
          ></Box>
        );
      })}
    </Box>
  );
}
export default function ViewBox(props) {
  const { matrix, setMatrix } = useContext(AppContext);
  useEffect(() => {}, []);
  return (
    <>
      {props.rows.map((r, index) =>
        row(index, props.cols.length, matrix, setMatrix)
      )}
    </>
  );
}
