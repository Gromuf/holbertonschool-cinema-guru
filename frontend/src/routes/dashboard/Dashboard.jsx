import React, { useEffect, useState }from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./dashboard.css";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";
import HomePage from "./HomePage";
import Favorites from "./Favorites";
import WatchLater from "./WatchLater";

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  const [activities, setActivities] = useState([]);

  const fetchActivities = () => {
    const token = localStorage.getItem("accessToken");
    axios.get("/api/activity", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setActivities(res.data))
    .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchActivities();
  }, []);

	return (
    <BrowserRouter>
      <div className="dashboard-container">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <div className="dashboard-main">
          <SideBar activities={activities} />
          <div className="dashboard-content">
            <Routes>
              <Route path="/home" element={<HomePage refreshActivities={fetchActivities} />} />
              <Route path="/favorites" element={<Favorites refreshActivities={fetchActivities} />} />
              <Route path="/watchlater" element={<WatchLater refreshActivities={fetchActivities} />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
