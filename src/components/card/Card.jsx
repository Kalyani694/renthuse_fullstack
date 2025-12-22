import { Link } from "react-router-dom";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import "./card.css";

function Card({ item }) {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  /* =========================
     CHECK IF ALREADY FAVORITE
  ========================== */
  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const res = await apiRequest.get("/favorites");
        const isFav = res.data.some((post) => post.id === item.id);
        setSaved(isFav);
      } catch (err) {
        console.error(err);
      }
    };

    checkFavorite();
  }, [item.id]);

  /* =========================
     TOGGLE FAVORITE
  ========================== */
  const handleSave = async () => {
    if (loading) return;

    setLoading(true);
    try {
      await apiRequest.post("/favorites", {
        postId: item.id,
      });
      setSaved((prev) => !prev);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images?.[0]} alt={item.title} />
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>

        <p className="address">
          <img src="/assets/pin.png" alt="" />
          <span>{item.address}</span>
        </p>

        <p className="price">₹ {item.price}</p>

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
            {/* ❤️ FAVORITE ICON */}
            <div className="icon" onClick={handleSave}>
              {saved ? (
                <FavoriteIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
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
