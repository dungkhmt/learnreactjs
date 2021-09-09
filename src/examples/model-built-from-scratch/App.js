import { useState } from "react";
import MyModel from "./MyModel";
export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={(e) => setOpen(true)}>Open</button>
      {open && <MyModel setOpen={setOpen} />}
    </>
  );
}
