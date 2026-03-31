import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css"
import MovieCard from "../../components/movies/MovieCard";

const WatchLater = ({ refreshActivities }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios.get("/api/titles/watchlater/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setMovies(response.data);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des films à regarder plus tard :", error);
    });
  }, []);

  return (
    <div className="watch-later-container">
      <h1 className="watch-later-title">Movies you like</h1>
      {movies.length > 0 ? (
        <ul className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbId} movie={movie} refreshActivities={refreshActivities} />
          ))}
        </ul>
      ) : (
        <p className="no-movies">Your watch later list is currently empty.</p>
      )}
    </div>
  );

}

export default WatchLater;
