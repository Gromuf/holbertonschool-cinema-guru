import React from "react";
import "./auth.css";

const Login = ({ username, password, setUsername, setPassword }) => {
  return (
    <div className="form-content">
      <h2 className="form-title">Sign in with your account</h2>
      <div className="input-group">
        <label htmlFor="username">👤 Username:</label>
        <input 
          type="text" 
          id="username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter username"
          autoComplete="one-time-code"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">🔑 Password:</label>
        <input 
          type="password" 
          id="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter password"
          autoComplete="one-time-code"
        />
      </div>
      <div className="submit-container">
        <button type="submit" className="main-submit-btn">
          🔑 Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
