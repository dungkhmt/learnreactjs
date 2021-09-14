import { useContext } from "react";
import { LoginContext } from "./helper/LoginContext";
export default function Login() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  return (
    <div
      style={{
        color: "red",
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
      }}
    >
      Login
      <button onClick={() => setLoggedIn(true)}>Click to Login</button>
      {loggedIn ? <h1>You are logged In</h1> : <h1>You are NOT logged In</h1>}
    </div>
  );
}
