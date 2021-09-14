import { useContext } from "react";
import { LoginContext } from "./helper/LoginContext";
export default function Profile() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  return (
    <div>
      Profile
      {loggedIn ? <h1>You are logged In</h1> : <h1>You are NOT logged In</h1>}
    </div>
  );
}
