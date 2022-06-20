import "./App.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(Cookies.get("token"));
  }, []);

  function logout() {
    Cookies.remove("token", { domain: ".equihua-dy.dev" });
    setToken();
  }

  return (
    <div className="App">
      <h1>App 2</h1>
      <h2>Token: {token}</h2>
      <button onClick={logout}>Logout</button>
      <a href={window.location.origin}>Go back</a>
    </div>
  );
}

export default App;
