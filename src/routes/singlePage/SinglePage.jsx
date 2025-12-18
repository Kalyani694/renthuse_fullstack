import "./singlePage.css";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
//import { useNavigate, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
//import { useContext, useState } from "react";
//import { AuthContext } from "../../context/AuthContext";
//import apiRequest from "../../lib/apiRequest";
import { singlePostData, userData } from "../../lib/dummyData";
function SinglePage() {
  

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="assets/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">Rs. {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(singlePostData.description),
              }}
            ></div>
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
                {singlePostData.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="assets/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {singlePostData.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/assets/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{singlePostData.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/assets/size.png" alt="" />
              <span>{singlePostData.size} sqft</span>
            </div>
            <div className="size">
              <img src="/assets/bed.png" alt="" />
              <span>{singlePostData.bedRooms} beds</span>
            </div>
            <div className="size">
              <img src="/assets/bath.png" alt="" />
              <span>{singlePostData.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/assets/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {singlePostData.school > 999
                    ? singlePostData.school / 1000 + "km"
                    : singlePostData.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/assets/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{singlePostData.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/assets/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{singlePostData.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            {/*<Map items={item} />*/}
          </div>
          <div className="buttons">
            <button>
              <img src="/assets/chat.png" alt="" />
              Send a Message
            </button>
            <button

            >
              <img src="/assets/save.png" alt="" />
             
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;