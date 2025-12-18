
//import { useState } from "react";
import "./filter.css";
//import { useSearchParams } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
function Filter() {

  return (
    <div className="filter">
      <h1>
        Search results for <b>Mumbai</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            
          />
        </div>
      </div>
      <div className="bottom">
       
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
           
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">Row-House</option>
            <option value="condo">Flat</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
         
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
           
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          
          />
        </div>
        <button >
         <SearchIcon/>
        </button>
      </div>
    </div>
  );
}

export default Filter;
