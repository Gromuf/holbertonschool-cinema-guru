import React from "react"
import "./navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ userUsername, setIsLoggedIn }) => {
  function logout() {
    localStorage.removeItem("accessToken")
    setIsLoggedIn(false)
  }
  return (
    <nav className="header-nav">
      <h1 className="header-title">Cinema Guru</h1>
      <div className="header-user-info">
        <img src="https://picsum.photos/100/100" alt="Avatar" />
        <p>Welcome, {userUsername}!</p>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span onClick={logout} className="logout-button">Logout</span>
      </div>
    </nav>
  );
};

export default Header;
