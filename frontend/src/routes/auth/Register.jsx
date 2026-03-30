import React from "react";
import "./auth.css";

const Register = ({ username, password, setUsername, setPassword }) => {
  return (
    <div className="form-content">
      <h2 className="form-title">Create a new account</h2>
      <div className="input-group">
        <label htmlFor="register-username">👤 Username:</label>
        <input 
          type="text" 
          id="register-username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Choose a username"
          autoComplete="one-time-code"
        />
      </div>
      <div className="input-group">
        <label htmlFor="register-password">🔑 Password:</label>
        <input 
          type="password" 
          id="register-password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Choose a password"
          autoComplete="one-time-code"
        />
      </div>
      <div className="submit-container">
        <button type="submit" className="main-submit-btn">
          + Sign Up
        </button>
      </div>
    </div>
  );
};

export default Register;
