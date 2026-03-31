import React from "react";
import "./dashboard.css";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
	return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-main">
        <SideBar />
      </div>
    </div>
  );
}

export default Dashboard;
