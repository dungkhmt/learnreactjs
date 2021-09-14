import Box from "@material-ui/core/Box";
import map from "lodash/map";
import range from "lodash/range";
export default function View(props) {
  return (
    <>
      <Box border={1} height={"1rem"} width={props.num + "rem"}></Box>

      {map(range(props.num), (_) => (
        <Box border={1} height={"1rem"} width={"2rem"}></Box>
      ))}
    </>
  );
}
