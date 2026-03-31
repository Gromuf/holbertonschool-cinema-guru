import React from "react";
import "./components.css";

const Activity = ( { activity }) => {
  const { user, action, title, date } = activity;
  return (
    <li className="activity-item">
      <p>
        <span className="red-text">{user}</span>
        {` ${action} `}
        <span className="red-text">{title}</span>
        {`-`}
        <i>{date}</i>
      </p>
    </li>
  );
}

export default Activity;
