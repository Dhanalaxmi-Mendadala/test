import { useEffect, useState } from "react";
// import "../css/MyProfile.css";
import { fetchProfile } from "../API/Profile";
import { Link, useParams } from "react-router-dom";
import StoryCard from "./StoryCard";
import PropTypes from 'prop-types'

const Item = ({ personDetail }) => {
  return <div className="follower-data">
    <Link to={`/profile/${personDetail['id']}`}>
      <img className="followers-list-profile"
        src={personDetail['avatar_url']} />
      <p className="followers-list-username">{personDetail['username']}</p>
    </Link>
  </div >
}
Item.propTypes ={
  personDetail:PropTypes.object.isRequired
}

const List = ({ data }) => {
  const ListComponent = data.map((personDetail, i) =>
    <Item personDetail={personDetail} key={i} />
  )
  return ListComponent;
}
List.propTypes ={
  data:PropTypes.array.isRequired
}

const ProfileCard = ({ userData }) => {
  return <div className="profile-section">
    <img
      src={userData["avatar_url"]}
      alt="Profile"
      className="user-avatar"
      style={{ height: "100px", width: "100px" }}
    />
    <h2 className="user-name">{userData["username"]}</h2>
    <p className="followers-count">{userData["followers"].length +
      (userData["followers"].length > 1 ? ' followers' : ' follower')}</p>
  </div>
}
ProfileCard.propTypes ={
  userData:PropTypes.object.isRequired
}

const ProfileStats = ({ userData }) => {
  const [currenInfo, setCurrentInfo] = useState('followers');
  return <div className="profile-stats">
    <div>
      <p className="followers" onClick={() => setCurrentInfo('followers')}>
        Followers {userData["followers"].length}
      </p>
      <div className="profile-stats-line" ></div>
      <p id="active" className="following" onClick={() => setCurrentInfo('following')}>
        Following {userData["following"].length}
      </p>
    </div>
    <div className="user-stats">
      {currenInfo === 'followers' ?
        <List data={userData['followers']} /> :
        <List data={userData['following']} />}
    </div>
  </div>
}
ProfileStats.propTypes ={
  userData:PropTypes.object.isRequired
}

const UserStories = ({ userData }) => {
  return <div className="user-stories-component">
    <h2 className="profile-user-name">{userData["username"]}</h2>
    {
      userData['stories'].length ?
        userData['stories'].map((story, i) =>
          <StoryCard storyData={story}
            key={i}
            username={userData['username']}
            userAvatar={userData['avatar_url']}
            userId={userData['id']} />)
        :
        <p>No stories yet</p>
    }
  </div>
}
UserStories.propTypes ={
  userData:PropTypes.object.isRequired
}

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await fetchProfile(id);
        setLoading(false);
        setUserData(data);
        console.log(data, "abcd", 1, 2, 3);
      }
      catch {
        console.log("Error");
      }
    };
    getProfile();
  }, [id]);

  if (userData['error']) return <div className="">Error in fetching..</div>
  if (loading) {
    return <div>Loading....</div>
  }
  console.log(userData, "profile page");
  return (
    <div className="profile-page">
      <div className="main-stories">
        <UserStories userData={userData} />
      </div>
      <div className="profile">
        <ProfileCard userData={userData} />
        <ProfileStats userData={userData} />
      </div>
    </div>
  );
};

export default Profile;
