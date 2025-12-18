import React from 'react'
import "./searchBar.css"
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <div className='searchBar'>
      <form action="">
        <input type="text" name='location' placeholder='City' />
        <input type="text" name='minPrice' placeholder='Min Price' />
        <input type="text" name='maxPrice' placeholder='Max Price'/>
      <button className='searchbarButton'>
        <SearchIcon className='searchBarIcon'/>
      </button>
      </form>
      
    </div>
  )
}

export default SearchBar