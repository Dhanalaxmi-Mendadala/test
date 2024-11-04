import { useContext, useState } from "react";
import "./css/ProfileMenu.css"; // Import CSS for styling
import author from "../assets/author.jpeg";
import logout from "../assets/logout.jpeg";
import story from "../assets/story.jpeg";
import PropTypes from "prop-types";
import { UserInfo } from "./homepage";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = useContext(UserInfo)
  console.log(userInfo)

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
            <a href="/profile" className="profile-name">
              {userName || "Guest"}
            </a>
          </div>
          <DropdownItem img={author} path="/homepage/profile" name="Profile" />
          <DropdownItem
            img={story}
            path="/homepage/yourStories"
            name="Your Stories"
          />
          <DropdownItem img={logout} path="/logout" name="Logout" />
        </div>
      )}
    </div>
  );
};
function DropdownItem(props) {
  return (
    <div className="dropdownItem">
      <img src={props.img} className="profile-icon drop-down-icon" />
      <a href={props.path} className="drop-down-nav-name">
        {props.name}
      </a>
    </div>
  );
}
DropdownItem.propTypes = {
  img: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default ProfileMenu;
