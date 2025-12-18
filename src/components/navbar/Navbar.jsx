import React from 'react'
import "./navbar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <a href="/">
          <img src="/assets/logo.png" alt="" className='logo' />
          <span className='logoText'>RENTHOUSE</span>
        </a>

      </div>
      <div className="right">
        <a href="/login">
          <FavoriteBorderIcon />
          </a>

        <div className="topbarIcons">
          <a href='/newPost' className="topbarIconItem">
            Post Property
            <span className="topbarIconBadge">free</span>
          </a>
        </div>

        <a href="/profile">
          <img src="/assets/avatar.png" alt="" className='profileImg' />
        </a>

      </div>
    </nav>
  )
}

export default Navbar