import React, { useState } from "react";
import "./auth.css";
import Login from "./Login";
import Register from "./Register";

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switch, set_Switch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
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
}

export default Authentication;
