import { useEffect, useState } from "react";
import "./favoritesPage.css";
import apiRequest from "../../lib/apiRequest";
import { Link } from "react-router-dom";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        // ✅ GET favorites (NO postId needed)
        const res = await apiRequest.get("/favorites");
        setFavorites(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) return <p className="loading">Loading favorites...</p>;

  return (
    <div className="favoritesPage">
      <h1>❤️ My Favorites</h1>

      {favorites.length === 0 ? (
        <p className="empty">No favorites added yet</p>
      ) : (
        <div className="favoritesGrid">
          {favorites.map((item) => (
            <div className="favoriteCard" key={item.id}>
              <Link to={`/post/${item.id}`}>
                <img
                  src={item.images?.[0] || "/noimage.jpg"}
                  alt={item.title}
                />
              </Link>

              <div className="info">
                <h3>{item.title}</h3>
                <p className="price">₹ {item.price}</p>
                <Link to={`/post/${item.id}`} className="viewBtn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
