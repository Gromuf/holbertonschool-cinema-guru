import React from "react";
import "./components.css";

const Activity = ({ activity }) => {
  const { user, title, updatedAt, createdAt } = activity;
  const isRemoved = activity.activityType?.toLowerCase().includes("remove") || activity.action?.toLowerCase().includes("remove");
  const status = isRemoved ? "removed" : "added";
  const activityType = activity.activityType || activity.action || "";
  const listType = activityType.toLowerCase().includes("favorite") ? "favorite" : "watch later";
  const rawDate = updatedAt || createdAt || activity.date;
  const formattedDate = rawDate 
    ? new Date(rawDate).toLocaleDateString("fr-FR", { day: 'numeric', month: 'short' }) 
    : "";

  return (
    <li className="activity-item">
      <p>
        <span className="red-text">{user?.username}</span>
        {` ${status} `}
        <span className="red-text">{title?.title}</span>
        {` ${listType} to `}
        <i>{formattedDate}</i>
      </p>
    </li>
  );
};

export default Activity;
