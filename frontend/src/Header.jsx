import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';
import ProfileMenu from "./profileDropDown";
const Header = ({profile}) => {
  const navigate = useNavigate();
  return (
    <header className="main-header">
      <h1 className="title">Medium</h1>
      <button onClick={() => navigate('/homepage/addstory')}>Write</button>
      <ProfileMenu profile={profile}/>
    </header>
  )
}
Header.propTypes = {
  profile:PropTypes.string.isRequired,
}

export default Header