import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.css";
//import apiRequest from "../../lib/apiRequest";
import { Link} from "react-router-dom";
//import { Suspense, useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
//import NewPost from "../newPostPage/NewPost";
import { userData } from "../../lib/dummyData";

function ProfilePage() {
 
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={userData.img || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{userData.name}</b>
            </span>
            <span>
              E-mail: <b>{userData.email}</b>
            </span>
            <button >Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/newPost">
              <button>Create New Post</button>
            </Link>
          </div>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
         <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;