import React from 'react'
import "./homePage.css"
import SearchBar from '../../components/searchBar/SearchBar'
const HomePage = () => {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
            <h1 className='title'>Welcome, to the place where comfort meets affordability</h1>
            <p>Discover thoughtfully cruated rental options tailored to your lifestyle,offering the perfect blend of comfort, affordability, and convenince for every journey.</p>
            <SearchBar/>
            </div>
        </div>
        <div className="imgcontainer">
            <img src="/assets/home.avif" alt="" />
        </div>
    </div>
  )
}

export default HomePage