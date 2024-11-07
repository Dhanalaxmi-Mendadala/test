import { useContext, useEffect, useState } from "react";
import { UserInfo } from "./Home";
import { fetchProfile } from "../API/Profile";

const Profile = () => {
  const userInfo = useContext(UserInfo);
  console.log(userInfo, 'its profile')
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getprofile = async () => {
      const data = await fetchProfile(userInfo['id']);
      setUserData(data);
    };
    getprofile();
  }, []);

  console.log(userData, 'profile page')
  return (
    <div className="profile">
      <div className="profile-header">
        <img src={userData['avatar_url']} alt="Profile" className='user-avatar' style={{ height: '100px', width: '100px' }} />
        <h2 className="user-name">{userData['username']}</h2>
      </div>
      {(userData['followers'] && userData['following']) &&
        <div className="profile-stats">
          <p className="followers">Followers :{userData['followers'].length}</p>
          <p className="following">Following :{userData['following'].length}</p>
        </div>
      }
    </div>
  );
};

export default Profile;
