import React from "react";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

const Login = ({ username, password, setUsername, setPassword }) => {
  return (
    <div className="form-content">
      <h2 className="form-title">Sign in with your account</h2>
      <Input 
        label="Username:"
        type="text"
        value={username}
        setValue={setUsername}
        icon={faUser}
        inputAttributes={{ placeholder: "Enter username", autoComplete: "one-time-code" }}
      />
      <Input 
        label="Password:"
        type="password"
        value={password}
        setValue={setPassword}
        icon={faKey}
        inputAttributes={{ placeholder: "Enter password", autoComplete: "one-time-code" }}
      />
      <div className="submit-container">
        <Button 
          label="Sign In"
          className="main-submit-btn"
          icon={faKey}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Login;
