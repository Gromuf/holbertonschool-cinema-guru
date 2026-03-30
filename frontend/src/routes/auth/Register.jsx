import React from "react";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";
import { faUser, faKey, faPlus } from "@fortawesome/free-solid-svg-icons";

const Register = ({ username, password, setUsername, setPassword }) => {
  return (
    <div className="form-content">
      <h2 className="form-title">Create a new account</h2>
      <Input 
        label="Username:"
        type="text"
        value={username}
        setValue={setUsername}
        icon={faUser}
        inputAttributes={{ placeholder: "Choose a username", autoComplete: "one-time-code" }}
      />
      <Input 
        label="Password:"
        type="password"
        value={password}
        setValue={setPassword}
        icon={faKey}
        inputAttributes={{ placeholder: "Choose a password", autoComplete: "one-time-code" }}
      />
      <div className="submit-container">
        <Button 
          label="Sign Up"
          className="main-submit-btn"
          icon={faPlus}
        />
      </div>
    </div>
  );
};

export default Register;
