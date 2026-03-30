import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// Import du vrai composant Authentication
import Authentication from './routes/auth/Authentication';

// Placeholder pour le Dashboard (à remplacer plus tard par ton vrai composant)
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
          // Si le token est invalide ou expiré, on nettoie le localStorage
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
        // On passe les fonctions de modification d'état à Authentication
        <Authentication 
          setIsLoggedIn={setIsLoggedIn} 
          setUserUsername={setUserUsername} 
        />
      )}
    </div>
  );
}

export default App;