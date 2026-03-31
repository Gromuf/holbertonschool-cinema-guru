import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css"
import MovieCard from "../../components/movies/MovieCard";
import Filter from "../../components/movies/Filter";
import Button from "../../components/general/Button";

const HomePage = ({ refreshActivities }) => {
	const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  const loadMovies = (pageNumber) => {
    const token = localStorage.getItem("accessToken");
    axios.get("/api/titles/advancedsearch", {
      headers: {Authorization : `Bearer ${token}`},
      params: {
        minYear,
        maxYear,
        genres: genres.join(","),
        title,
        sort,
        page: pageNumber,
      }
    })
    .then((response) => {
      const data = (response.data && Array.isArray(response.data.titles)) ? response.data.titles : [];
      if (pageNumber === 1) {
        setMovies(data);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...data]);
      }
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
      setMovies([]);
    });
  };

  useEffect(() => {
    setPage(1);
    loadMovies(1);
  }, [minYear, maxYear, genres, sort, title]);
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadMovies(nextPage);
  };

  return (
    <div className="homepage-container">
      <Filter 
        minYear={minYear} setMinYear={setMinYear}
        maxYear={maxYear} setMaxYear={setMaxYear}
        sort={sort} setSort={setSort}
        genres={genres} setGenres={setGenres}
        title={title} setTitle={setTitle}
      />
      <ul className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} refreshActivities={refreshActivities} />
        ))}
      </ul>
      {movies.length > 0 && (
        <div className="load-more-container">
          <Button 
            label="Load More.." 
            onClick={handleLoadMore} 
            className="load-more-button"
          />
        </div>
      )}
    </div>
  );

}

export default HomePage;
