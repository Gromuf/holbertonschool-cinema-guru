import React from "react";
import "./dashboard.css";
import Header from "../../components/navigation/Header";

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
	return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default Dashboard;
