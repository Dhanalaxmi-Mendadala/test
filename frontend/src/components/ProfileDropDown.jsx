import { useContext, useState } from "react";
import "../css/ProfileDropDown.css";
import profile from "../../assets/profile.jpeg";
import logout from "../../assets/logout.jpeg";
import story from "../../assets/story.jpeg";
import PropTypes from "prop-types";
import { UserInfo } from "./Home";
import { Link} from "react-router-dom";

const ProfileMenu = ({logoutFunction}) => {
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = useContext(UserInfo)
  console.log(userInfo)
  console.log(logoutFunction)

  const profileUrl = userInfo['avatar_url'];
  const userName = userInfo.username;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(profileUrl)
  console.log(userName)
  return (
    <div className="profile-menu">
      <img
        src={profileUrl || "../assets/github.png"}
        alt="Profile"
        className="profile-icon1 "
        onClick={toggleMenu}
      />
      {isOpen && (
        <div className="dropdown-menu" onClick={toggleMenu}>
          <div id="profile">
            <img
              className="profile-icon"
              src={profileUrl || "../assets/github.png"}
            />
            <Link to="profile" className="profile-name">
              {userName || "Guest"}
            </Link>
          </div>
          <Link to='profile'>
            <DropdownItem img={profile} name="Profile" path="profile" />
          </Link>
          <Link to='yourstories'>
            <DropdownItem
              img={story}
              path="yourStories/drafts"
              name="Your Stories"
            />
          </Link>
          <DropdownItem
            img={logout}
            name="Logout"
            onClick = {logoutFunction}
          />
        </div>
      )}
    </div>
  );
};
ProfileMenu.propTypes = {
  logoutFunction: PropTypes.func.isRequired,
};
function DropdownItem(props) {
  return (
    <div className="dropdownItem" onClick= {props.onClick}>
      <img src={props.img} className="drop-down-icon" />
      <Link to={props.path} className="drop-down-nav-name">
        {props.name}
      </Link>
    </div>
  );
}

DropdownItem.propTypes = {
  img: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};

export default ProfileMenu

