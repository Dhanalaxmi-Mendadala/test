import { useContext, useState } from "react";
import "../css/ProfileDropDown.css";
import profile from "../components/svg/profile.svg";
import logout from "../components/svg/logout.svg";
import story from "../components/svg/stories.svg";
import PropTypes from "prop-types";
import { UserInfo } from "./Home";
import { Link } from "react-router-dom";


function DropdownItem(props) {
  return (
    <div className="dropdownItem" onClick={props.onClick}>
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


const ProfileMenu = ({ logoutFunction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = useContext(UserInfo)

  const profileUrl = userInfo['avatar_url'];
  const userName = userInfo.username;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
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
            <img className="profile-icon" src={profileUrl || "../assets/github.png"}/>
            <Link to="profile" className="profile-name">{userName || "Guest"}</Link>
          </div>
          <DropdownItem img={profile} name="Profile" path="profile" />
          <DropdownItem img={story} path="yourStories/drafts" name="My Stories" />
          <DropdownItem img={logout} name="Logout" onClick={logoutFunction} />
        </div>
      )}
    </div>
  );
};

ProfileMenu.propTypes = {
  logoutFunction: PropTypes.func.isRequired,
};

export default ProfileMenu

