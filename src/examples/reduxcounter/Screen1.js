import { useSelector } from "react-redux";

function Screen1() {
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <h1>Screen 1 => counter = {counter}</h1>
    </>
  );
}

export default Screen1;
