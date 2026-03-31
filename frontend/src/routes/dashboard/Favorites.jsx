import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css"
import MovieCard from "../../components/movies/MovieCard";

const Favorites = ({ refreshActivities }) => {
	const [movies, setMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios.get("/api/titles/favorite/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setMovies(response.data);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des favoris :", error);
    });
  }, []);

  return (
    <div className="favorites-container">
      <h1 className="favorites-title">Movies you like</h1>
      
      {movies.length > 0 ? (
        <ul className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbId} movie={movie} refreshActivities={refreshActivities} />
          ))}
        </ul>
      ) : (
        <p className="no-favorites">You haven't added any favorites yet.</p>
      )}
    </div>
  );
}

export default Favorites;
