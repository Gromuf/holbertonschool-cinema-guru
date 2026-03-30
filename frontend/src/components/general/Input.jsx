import React from "react"
import "./general.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
	const handleInput = (event) => {
		setValue(event.target.value)
	};
	return (
		<div className={`input-container ${className}`}>
      {label && <label>{label}</label>}
        <div className="input-wrapper">
          {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
          <input
            type={type}
            value={value}
            onChange={handleInput}
            {...inputAttributes}
          />
        </div>
    </div>
	);
}

export default Input;
