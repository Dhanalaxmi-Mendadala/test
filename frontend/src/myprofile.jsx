import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  useEffect(() => {
    // Fetch user profile
    axios.get('/api/user/profile').then(response => {
      setUser(response.data);
    });

    // Fetch followers and following
    axios.get('/api/user/followers').then(response => {
      setFollowers(response.data);
    });

    axios.get('/api/user/following').then(response => {
      setFollowing(response.data);
    });
  }, []);

  return (
    <div className="profile">
      <div className="profile-header">
        <img src={user.profileIcon} alt="Profile" style={{ height: '100px', width: '100px' }} />
        <h2>{user.username}</h2>
      </div>
      <div className="profile-stats">
        <div>
          <button onClick={() => setShowFollowers(!showFollowers)}>
            Followers: {followers.length}
          </button>
          {showFollowers && (
            <ul>
              {followers.map(follower => (
                <li key={follower.id}>{follower.name}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <button onClick={() => setShowFollowing(!showFollowing)}>
            Following: {following.length}
          </button>
          {showFollowing && (
            <ul>
              {following.map(follow => (
                <li key={follow.id}>{follow.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
