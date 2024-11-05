import {useState } from 'react';
import './css/ProfileMenu.css'; // Import CSS for styling
import author from "../assets/author.jpeg";
import logout from "../assets/logout.jpeg";
import story from "../assets/story.jpeg";
import  PropTypes from 'prop-types';

const ProfileMenu = ({profile,username}) => {
  const [isOpen, setIsOpen] = useState(false);
   console.log(profile,username);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-menu">
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
  return (
    <div className="dropdownItem">
      <img src={props.img} className="profile-icon"/>
      <span><a href={props.path}>{props.name}</a></span>
    </div>
  )
}
export default ProfileMenu;
