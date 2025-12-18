import { Link } from "react-router-dom";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import "./card.css";

function Card({ item }) {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved);

    let savedItems = JSON.parse(localStorage.getItem("saved")) || [];

    if (!saved) {
      savedItems.push(item);
    } else {
      savedItems = savedItems.filter(i => i.id !== item.id);
    }

    localStorage.setItem("saved", JSON.stringify(savedItems));
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>

        <p className="address">
          <img src="/assets/pin.png" alt="" />
          <span>{item.address}</span>
        </p>

        <p className="price">$ {item.price}</p>

        <div className="bottom">
          <div className="features">
            <div className="feature">
              <BedIcon />
              <span>{item.bedroom} bedroom</span>
            </div>

            <div className="feature">
              <BathtubIcon />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>

          <div className="icons">
            <div className="icon" onClick={handleSave} style={{ cursor: "pointer" }}>
              {saved ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorderIcon />}
            </div>

            <div className="icon">
              <ChatIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
