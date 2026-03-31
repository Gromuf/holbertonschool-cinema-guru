import React, { useState } from "react"; // Retrait de useEffect
import { useNavigate } from "react-router-dom";
import Activity from "../Activity";
import "./navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faClock } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ activities }) => {
  const [selected, setSelected] = useState("Home");
  const [small, setSmall] = useState(true);
  const [showActivities, setShowActivities] = useState(false);

  const navigate = useNavigate();

  const handleHover = () => {
    setSmall(false);
    setShowActivities(true);
  };

  const handleLeave = () => {
    setSmall(true);
    setShowActivities(false);
  };

  const setPage = pageName => {
    setSelected(pageName);
    if (pageName === "Home") navigate("/home");
    if (pageName === "Favorites") navigate("/favorites");
    if (pageName === "Watch Later") navigate("/watchlater");
  }

  return (
    <nav 
      className={`sidebar ${small ? 'small' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <ul className="navigation-ul">
        <li 
          className={selected === "Home" ? "active" : ""} 
          onClick={() => setPage("Home")}
        >
          <FontAwesomeIcon icon={faHome} />
          {!small && (
            <>
              <span>Home</span>
              {selected === "Home" && <span className="arrow">→</span>}
            </>
          )}
        </li>
        <li 
          className={selected === "Favorites" ? "active" : ""} 
          onClick={() => setPage("Favorites")}
        >
          <FontAwesomeIcon icon={faStar} />
          {!small && (
            <>
              <span>Favorites</span>
              {selected === "Favorites" && <span className="arrow">→</span>}
            </>
          )}
        </li>
        <li 
          className={selected === "Watch Later" ? "active" : ""} 
          onClick={() => setPage("Watch Later")}
        >
          <FontAwesomeIcon icon={faClock} />
          {!small && (
            <>
              <span>Watch Later</span>
              {selected === "Watch Later" && <span className="arrow">→</span>}
            </>
          )}
        </li>
      </ul>
      {showActivities && !small && Array.isArray(activities) && (
        <div className="activities-container">
          <h3 className="activities-title">Latest Activities</h3>
          <ul className="activity-list">
            {activities.slice(0, 10).map((act, index) => (
              <Activity key={index} activity={act} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default SideBar;
