import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./dashboard.css";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";

const HomePage = () => <div className="content">HomePage Content</div>;
const Favorites = () => <div className="content">Favorites Content</div>;
const WatchLater = () => <div className="content">Watch Later Content</div>;

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
	return (
    <BrowserRouter>
      <div className="dashboard-container">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <div className="dashboard-main">
          <SideBar />
          <div className="dashboard-content">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
