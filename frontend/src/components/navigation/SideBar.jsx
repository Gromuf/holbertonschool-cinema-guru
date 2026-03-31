import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Activity from "../Activity";
import "./navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faClock } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
	const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
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
    if (pageName === "Home") {
      navigate("/home");
    }
    if (pageName === "Favorites") {
      navigate("/favorites");
    }
    if (pageName === "Watch Later") {
      navigate("/watchlater");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios.get("/api/activity", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(response => {
        console.log("Données reçues du serveur :", response.data);
        setActivities(response.data);
      })
      .catch(error => {
        console.error("API Error:", error);
      });
  }, []);

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
