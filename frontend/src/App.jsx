import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Authentication from './routes/auth/Authentication';

// Placeholder pour le Dashboard (tu le créeras plus tard)
const Dashboard = ({ userUsername }) => <div className="Dashboard">Welcome, {userUsername}!</div>;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          const response = await axios.post(
            'http://localhost:8000/api/auth/', 
            {},
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          if (response.status === 200) {
            setIsLoggedIn(true);
            setUserUsername(response.data.username);
          }
        } catch (error) {
          localStorage.removeItem('accessToken');
          console.error("Auth check failed:", error);
        }
      }
    };
    checkAuth();
  }, []);
  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard userUsername={userUsername} />
      ) : (
        <Authentication 
          setIsLoggedIn={setIsLoggedIn} 
          setUserUsername={setUserUsername} 
        />
      )}
    </div>
  );
}

export default App;
