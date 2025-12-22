import React, { useContext } from "react";
import "./navbar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser} = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <Link to="/">
          <img src="/assets/logo.png" alt="logo" className="logo" />
          <span className="logoText">RENTHOUSE</span>
        </Link>
      </div>

      <div className="right">
        {/* ❤️ Favorite */}
        <Link to="/favorites">
          <FavoriteBorderIcon />
        </Link>

        {/* ➕ Post Property */}
        <div className="topbarIcons">
          <Link to="/add" className="topbarIconItem">
            Post Property
            <span className="topbarIconBadge">free</span>
          </Link>
        </div>

        {/* 🔐 Auth Section */}
        {!currentUser ? (
          <>
            <Link to="/login" className="authBtn">Login</Link>
            <Link to="/register" className="authBtn">Register</Link>
          </>
        ) : (
          <div className="userInfo">
            <Link to="/profile">
              <img
                src={currentUser.avatar || "/assets/avatar.png"}
                alt="avatar"
                className="profileImg"
              />
            </Link>
          
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
