import { useContext } from "react";
import { LoginContext } from "./helper/LoginContext";
export default function Home() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div>
      HOME
      {loggedIn ? <h1>You are logged In</h1> : <h1>You are NOT logged In</h1>}
      <button onClick={() => setLoggedIn(false)}>Logout</button>
    </div>
  );
}
