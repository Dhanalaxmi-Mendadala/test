import { useContext, useState } from "react";
import "./css/ProfileMenu.css"; // Import CSS for styling
import author from "../assets/author.jpeg";
import logout from "../assets/logout.jpeg";
import story from "../assets/story.jpeg";
<<<<<<< HEAD
import  PropTypes from 'prop-types';

const ProfileMenu = ({profile,username}) => {
  const [isOpen, setIsOpen] = useState(false);
   console.log(profile,username);
=======
import PropTypes from "prop-types";
import { UserInfo } from "./homepage";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = useContext(UserInfo)
  console.log(userInfo)

  const profileUrl = userInfo['avatar_url'];
  const userName = userInfo.username;

>>>>>>> 1b16f82f49a539545e26c4c9b0147ba1cd139224
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(profileUrl)
  console.log(userName)
  return (
    <div className="profile-menu">
<<<<<<< HEAD
      <img 
        src={profile}
        alt="Profile" 
        className="profile-icon" 
        onClick={toggleMenu} 
      />
      {isOpen && (
        <div className="outer" onClick={toggleMenu} >
        <div className="dropdown-menu" >
          <div id="profile"><img className="profile-icon" src={profile}/>
          <a href="/profile">{username}</a>
=======
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
>>>>>>> 1b16f82f49a539545e26c4c9b0147ba1cd139224
          </div>
          <Link to = 'profile'>
          <DropdownItem img={author} name="Profile" />
          </Link>
         <Link to = 'yourstories'>
         <DropdownItem
            img={story}
            path="/homepage/yourStories"
            name="Your Stories"
          />
         </Link>
          <DropdownItem img={logout} path="/logout" name="Logout" />
        </div>
      )}
    </div>
  );
};
<<<<<<< HEAD
ProfileMenu.propTypes={
  profile:PropTypes.string.isRequired,
  username:PropTypes.string.isRequired
}
DropdownItem.propTypes={
  img:PropTypes.string.isRequired,
  path:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
}
function DropdownItem(props){
=======
function DropdownItem(props) {
>>>>>>> 1b16f82f49a539545e26c4c9b0147ba1cd139224
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
