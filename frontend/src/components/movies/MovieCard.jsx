import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar, faClock as farClock } from "@fortawesome/free-regular-svg-icons";
import "./movie.css";

const MovieCard = ({ movie }) => {
	const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const headers = { Authorization: `Bearer ${token}` };
    axios.get(`/api/titles/favorite/`, { headers })
      .then((response) => {
        const favoriteExists = response.data.some((fav) => fav.id === movie.id);
        setIsFavorite(favoriteExists);
      })
      .catch((error) => console.error("Error fetching favorites:", error));
    axios.get(`/api/titles/watchlater/`, { headers })
      .then((response) => {
        const watchLaterExists = response.data.some((wl) => wl.id === movie.id);
        setIsWatchLater(watchLaterExists);
      })
      .catch((error) => console.error("Error fetching watch later:", error));
  }, [movie.id]);

  const handleClick = (type) => {
    const token = localStorage.getItem("accessToken");
    const headers = { Authorization: `Bearer ${token}` };
    const isStateSet = type === "favorite" ? isFavorite : isWatchLater;
    const setState = type === "favorite" ? setIsFavorite : setIsWatchLater;
    if (isStateSet) {
      axios.delete(`/api/titles/${type}/${movie.imdbId}`, { headers })
        .then(() => setState(false))
        .catch((err) => console.error(`Error removing from ${type}`, err));
    } else {
      axios.post(`/api/titles/${type}/${movie.imdbId}`, {}, { headers })
        .then(() => setState(true))
        .catch((err) => console.error(`Error adding to ${type}`, err));
    }
  };

  return (
    <li className="movie-card">
      <div className="movie-card-header">
        <div className="movie-actions">
          <FontAwesomeIcon 
            icon={isFavorite ? faStar : farStar} 
            className={`icon favorite-icon ${isFavorite ? "active" : ""}`}
            onClick={() => handleClick("favorite")}
          />
          <FontAwesomeIcon 
            icon={isWatchLater ? faClock : farClock} 
            className={`icon watchlater-icon ${isWatchLater ? "active" : ""}`}
            onClick={() => handleClick("watchlater")}
          />
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="synopsis">{movie.synopsis}</p>
        <ul className="movie-genres">
          {movie.genres.map((genre, index) => (
            <li key={index} className="genre-badge">{genre}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default MovieCard;
