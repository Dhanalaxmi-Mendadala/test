import { useContext, useEffect, useState } from "react";
import { UserInfo } from "./homepage";

async function fetchingProfile(USER_ID) {
  try {
    const response = await fetch(`http://localhost:8000/user/profile/${USER_ID}`, {
      method: 'GET',
      headers: { 'Content-Type': 'json' },
      mode: 'cors',
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};

const Profile = () => {
  const userInfo = useContext(UserInfo);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getprofile = async () => {
      const data = await fetchingProfile(userInfo['id']);
      setUserData(data);
    };
    getprofile();
  }, []);

  return (
    <div className="profile">
      <div className="profile-header">
        <img src={userData['avatar_url']} alt="Profile" className='user-avatar' style={{ height: '100px', width: '100px' }} />
        <h2 className="user-name">{userData['username']}</h2>
      </div>
      <div className="profile-stats">
        <p className="followers">Followers :{userData['followers'].length}</p>
        <p className="following">Following :{userData['following'].length}</p>
      </div>
    </div>
  );
};

export default Profile;
