import "./singlePage.css";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useNavigate, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function SinglePage() {
  const post = useLoaderData(); // plain post object or null
  const [saved, setSaved] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ Sync saved state safely AFTER data exists
  useEffect(() => {
    if (post?.isSaved !== undefined) {
      setSaved(post.isSaved);
    }
  }, [post]);

  // ✅ Safe fallback UI
  if (!post || typeof post !== "object" || !post.id) {
    return <div className="singlePage">Post not found!</div>;
  }

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    // Optimistic UI
    setSaved((prev) => !prev);

    try {
      await apiRequest.post(`/users/savepost/${post.id}`);
    } catch (err) {
      console.error(err);
      setSaved((prev) => !prev); // rollback
    }
  };

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images || []} />

          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>

                <div className="address">
                  <img src="/assets/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>

                <div className="price">$ {post.price}</div>
              </div>

              <div className="user">
                <img
                  src={post.user?.avatar || "/assets/avatar.png"}
                  alt=""
                />
                <span>{post.user?.username}</span>
              </div>
            </div>

            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  post.postDetail?.desc || ""
                ),
              }}
            />
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>

          <div className="listVertical">
            <div className="feature">
              <img src="/assets/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>
                  {post.postDetail?.utilities === "owner"
                    ? "Owner is responsible"
                    : "Tenant is responsible"}
                </p>
              </div>
            </div>

            <div className="feature">
              <img src="/assets/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>
                  {post.postDetail?.pet === "allowed"
                    ? "Pets Allowed"
                    : "Pets not Allowed"}
                </p>
              </div>
            </div>
          </div>

          <p className="title">Sizes</p>

          <div className="sizes">
            <div className="size">
              <img src="/assets/size.png" alt="" />
              <span>{post.postDetail?.size} sqft</span>
            </div>
            <div className="size">
              <img src="/assets/bed.png" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/assets/bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>

          <div className="listHorizontal">
            <div className="feature">
              <img src="/assets/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.postDetail?.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail?.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>

            <div className="feature">
              <img src="/assets/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail?.bus}m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="/assets/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail?.restaurant}m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>

          <div className="mapContainer">
            <Map items={[post]} />
          </div>

          <div className="buttons">
            <button>
              <img src="/assets/chat.png" alt="" />
              Send a Message
            </button>

            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/assets/save.png" alt="" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
