import { useState } from "react";
import { LoginContext } from "./helper/LoginContext";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Home />
      <Login />
      <Profile />
    </LoginContext.Provider>
  );
}
