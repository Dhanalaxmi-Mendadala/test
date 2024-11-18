import { useContext, useEffect, useState } from "react";
import "../css/MyProfile.css";
import { fetchProfile } from "../API/Profile";
import { Link, useParams } from "react-router-dom";
import StoryCard from "./StoryCard";
import PropTypes from 'prop-types'
import { UserInfo } from "./Home";
import { followAuthor } from "../API/follow";
import { unFollowAuthor } from "../API/unFollow";

const Item = ({ personDetail }) => {
  return <div className="follower-data">
    <Link to={`/profile/${personDetail['id']}`}>
      <img className="followers-list-profile"
        src={personDetail['avatar_url']} />
      <p className="followers-list-username">{personDetail['username']}</p>
    </Link>
  </div >
}
Item.propTypes = {
  personDetail: PropTypes.object.isRequired
}

const List = ({ data }) => {
  // console.log(data,'dataaa')
  const ListComponent = data.map((personDetail, i) =>
    <Item personDetail={personDetail} key={i} />
  )
  return ListComponent;
}
List.propTypes = {
  data: PropTypes.array.isRequired
}

const FollowButton = ({ setFollowStatus, authorId }) => {
  return (
    (
      <div className="unfollow-unit cursor" onClick={() => {
        followAuthor(authorId);
        setFollowStatus(true);
      }}>
        <button className="follow-button">Follow</button>
      </div>
    )
  )
}
FollowButton.propTypes = {
  setFollowStatus: PropTypes.func.isRequired,
  authorId: PropTypes.number.isRequired
}

const UnFollowButton = ({ setFollowStatus, authorId }) => {
  return (
    <div className="unfollow-unit cursor" onClick={() => {
      unFollowAuthor(authorId);
      setFollowStatus(false);
    }}>
      < button className="unfollow-button" >Unfollow</button >
    </div>
  )
}
UnFollowButton.propTypes = {
  setFollowStatus: PropTypes.func.isRequired,
  authorId: PropTypes.number.isRequired
}

const ProfileCard = ({ userData, myId, followStatus, setFollowStatus }) => {
  console.log(myId, userData['id'], myId !== userData['id'])
  return <div className="profile-section">
    <img
      src={userData["avatar_url"]}
      alt="Profile"
      className="user-avatar"
      style={{ height: "100px", width: "100px" }}
    />
    <h2 className="user-name">{userData["username"]}</h2>
    {myId !== userData['id'] &&
      (followStatus ?
        <UnFollowButton setFollowStatus={setFollowStatus} authorId={userData['id']} /> :
        <FollowButton setFollowStatus={setFollowStatus} authorId={userData['id']} />)}
  </div>
}
ProfileCard.propTypes = {
  userData: PropTypes.object.isRequired,
  setFollowStatus: PropTypes.func.isRequired,
  myId: PropTypes.number.isRequired,
  followStatus: PropTypes.bool.isRequired,
}

const ProfileStats = ({ userData }) => {
  const [currenInfo, setCurrentInfo] = useState('followers');
  console.log(currenInfo, 'currentInfooo')
  return <div className="profile-stats">
    <div className="user-follow-and-followers-container">
      <p className="followers" onClick={() => setCurrentInfo('followers')}>
        {(userData["followers"].length > 1 ? ' Followers ' : ' Follower ') + userData["followers"].length}
      </p>
      <p className="following" onClick={() => setCurrentInfo('following')}>
        Following {userData["following"].length}
      </p>
    </div>
    <div className="user-stats">
      {currenInfo === 'followers' ?
        (userData['followers'].length ? <List data={userData['followers']} /> : <p style={{
          marginTop: '10px',
          fontSize: '20px',
        }}>Nobody is following you</p>) :
        (userData['following'].length ? <List data={userData['following']} /> : <p>you are not following anyone</p>)}
    </div>
  </div>
}
ProfileStats.propTypes = {
  userData: PropTypes.object.isRequired
}

const UserStories = ({ userData }) => {
  return <div className="user-stories-component">
    <h2 className="profile-user-name">{userData["username"]}</h2>
    {
      userData['stories'].length ?
        userData['stories'].map((story, i) => {
          console.log(story, "In Profile");
          return <div className="stories-container" key={i}>
            <StoryCard storyData={story}
              key={i}
              username={userData['username']}
              userAvatar={userData['avatar_url']}
              userId={userData['id']} />
          </div>
        }) :
        <p>No stories yet</p>
    }
  </div>
}
UserStories.propTypes = {
  userData: PropTypes.object.isRequired
}

const checkFollowing = (followersData, myId) => {
  const variable = followersData.filter(element => element.id === myId);
  console.log(variable, followersData, 'sortded tmy profike followerd')
  return variable.length === 0 ? false : true;
};

const Profile = () => {
  const { id } = useParams();
  const myData = useContext(UserInfo);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true)
  const [followStatus, setFollowStatus] = useState(false);
  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await fetchProfile(id);
        setUserData(data);
        setFollowStatus(checkFollowing(data['followers'], myData['id']));
        console.log(data, "abcd", 1, 2, 3);
        setLoading(false);
      }
      catch {
        console.log("Error");
      }
    };
    getProfile();
  }, [id, followStatus]);
  console.log(myData, followStatus, 'myData')
  if (userData['error']) return <div className="">Error in fetching..</div>
  if (loading) {
    return (
      <>
        <div className="loading-container">
          <div className="loading"></div>
          <p>Loading..</p>
        </div>
      </>
    )
  }
  console.log(userData, "profile page");
  return (
    <div className="profile-page">
      <div className="main-stories">
        <UserStories userData={userData} />
      </div>
      <div className="profile">
        <ProfileCard userData={userData} myId={myData['id']} followStatus={followStatus} setFollowStatus={setFollowStatus} />
        <ProfileStats userData={userData} />
      </div>
    </div>
  );
};

export default Profile;
