import './myprofile.css';

const userData = {
  username: 'revantha',
  followersCount: 150,
  followingCount: 200,
  followers: ['abhi', 'naveen', 'akram', 'gouri'],
};

const MyProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="user-info">
          <div className="user-icon"></div>
          <h2 className="username">{userData.username}</h2>
        </div>
        <div className="follower-info">
          <p>
            <strong>Followers:</strong> {userData.followersCount}
          </p>
          <p>
            <strong>Following:</strong> {userData.followingCount}
          </p>
        </div>
        <div className="followers-list">
          <h3>Followers List:</h3>
          <ul>
            {userData.followers.map((follower, index) => (
              <li key={index}>{follower}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
