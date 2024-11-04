import React, { useState } from 'react';
import './css/ProfileMenu.css'; // Import CSS for styling
import author from "../assets/author.jpeg";
import logout from "../assets/logout.jpeg";
import story from "../assets/story.jpeg";
const ProfileMenu = ({profile,username}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-menu">
      <img 
        src="../assets/github.png"
        alt="Profile" 
        className="profile-icon" 
        onClick={toggleMenu} 
      />
      {isOpen && (
        <div className="outer" onClick={toggleMenu} >
        <div className="dropdown-menu" >
          <div id="profile"><img className="profile-icon" src="../assets/github.png"/>
          <a href="/profile">GitHub</a>
          </div>
          <DropdownItem img={author} path="/homepage/author" name="Authors"/>
          <DropdownItem img={story} path="/homepage/yourStories" name="Your Stories"/>
          <DropdownItem img={logout} path="/logout" name="Logout"/>
        </div>
        </div>
      )}
    </div>
  );
};
function DropdownItem(props){
  return (
    <div className="dropdownItem">
      <img src={props.img} className="profile-icon"/>
      <span><a href={props.path}>{props.name}</a></span>
    </div>
  )
}
export default ProfileMenu;
