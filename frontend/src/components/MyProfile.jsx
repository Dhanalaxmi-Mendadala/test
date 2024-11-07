import { useContext, useEffect, useState } from "react";
import { UserInfo } from "./Home";
import "../css/MyProfile.css";
import { fetchProfile } from "../API/Profile";

const Profile = () => {
  const userInfo = useContext(UserInfo);
  console.log(userInfo, "its profile");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getprofile = async () => {
      const data = await fetchProfile(userInfo["id"]);
      setUserData(data);
    };
    getprofile();
  }, []);

  console.log(userData, "profile page");
  return (
    <>
    <div className="about-user">
    <h2 className="profile-user-name">{userData["username"]}</h2>
      
    </div>
    <div className="profile">
      <div className="profile-header">
        <img
          src={userData["avatar_url"]}
          alt="Profile"
          className="user-avatar"
          style={{ height: "100px", width: "100px" }}
        />
        <h2 className="user-name">{userData["username"]}</h2>
      </div>
      {userData["followers"] && userData["following"] && (
        <>
          <div className="profile-stats">
            <p className="followers">
              Followers :{userData["followers"].length}
            </p>
            <p className="following">
              Following :{userData["following"].length}
            </p>
          </div>
          <div className="followers-list">
            <div>
              <img className="followers-list-profile" src="https://avatars3.githubusercontent.com/u/58025056?v=4"></img>
              <p className="followers-list-username">abhi</p>
            </div>
            <div>
              <img className="followers-list-profile" src="https://avatars3.githubusercontent.com/u/58025056?v=4"></img>
              <p className="followers-list-username">naveen</p>
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Profile;
