import React, { useState } from "react";
import axios from "axios";
import "./auth.css";
import Login from "./Login";
import Register from "./Register";

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, set_Switch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
  event.preventDefault();
  
  // LOG DE SÉCURITÉ : Vérifie ce qui part REELLEMENT au serveur dans ta console
  console.log("Données envoyées :", { username, password });

  const route = _switch ? "/api/auth/login" : "/api/auth/register";

  try {
    const response = await axios.post(`http://localhost:8000${route}`, {
      username: username.trim(), // On enlève les espaces inutiles
      password: password,
    });

    if (response.data.accessToken) {
      localStorage.setItem("accessToken", response.data.accessToken);
      setUserUsername(username);
      setIsLoggedIn(true);
    }
  } catch (error) {
    console.error("Détails du serveur :", error.response?.data);
    alert(`Authentication failed: ${error.response?.data?.message}`);
  }
};

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <header className="auth-header">
          <button
            type="button"
            onClick={() => set_Switch(true)}
            className={_switch ? "active" : ""}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => set_Switch(false)}
            className={!_switch ? "active" : ""}
          >
            Sign Up
          </button>
        </header>

        {_switch ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
      </form>
    </div>
  );
};

export default Authentication;
