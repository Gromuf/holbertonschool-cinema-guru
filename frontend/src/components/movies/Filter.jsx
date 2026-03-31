import React from "react";
import "./movies.css";
import SearchBar from "../general/SearchBar";
import Input from "../general/Input";
import SelectInput from "../general/SelectInput";
import Tag from "./Tag";

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
  const genreList = [
    "action", "drama", "comedy", "biography", "romance", 
    "thriller", "war", "history", "sport", "sci-fi", 
    "documentary", "crime", "fantasy"
  ];

  const sortOptions = [
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
    { value: "highestrated", label: "Highest Rated" },
    { value: "lowestrated", label: "Lowest Rated" }
  ];

  return (
    <div className="filter-container">
      <SearchBar title={title} setTitle={setTitle} />
      <div className="filter-inputs">
        <Input 
          type="number" 
          label="Min Year" 
          value={minYear} 
          setValue={setMinYear} 
        />
        <Input 
          type="number" 
          label="Max Year" 
          value={maxYear} 
          setValue={setMaxYear} 
        />
        <SelectInput 
          label="Sort By"
          options={sortOptions} 
          value={sort} 
          setValue={setSort} 
        />
      </div>
      <ul className="category-list">
        {genreList.map((genre) => (
          <Tag 
            key={genre} 
            genre={genre} 
            genres={genres} 
            setGenres={setGenres} 
            filter={true} 
          />
        ))}
      </ul>
    </div>
  );
}

export default Filter;
