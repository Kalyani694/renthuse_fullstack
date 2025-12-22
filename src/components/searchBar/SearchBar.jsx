import React from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const city = formData.get("location");
    const minPrice = formData.get("minPrice");
    const maxPrice = formData.get("maxPrice");

    const query = new URLSearchParams({
      city,
      minPrice,
      maxPrice,
    }).toString();

    navigate(`/list?${query}`);
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSearch}>
        <input type="text" name="location" placeholder="City" />
        <input type="number" name="minPrice" placeholder="Min Price" />
        <input type="number" name="maxPrice" placeholder="Max Price" />

        <button className="searchbarButton" type="submit">
          <SearchIcon className="searchBarIcon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
