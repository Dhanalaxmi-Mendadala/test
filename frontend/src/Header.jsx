import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';

const Header = ({profile}) => {
  const navigate = useNavigate();
  return (
    <header className="main-header">
      <h1 className="title">Medium</h1>
      <button onClick={() => navigate('/homepage/addstory')}>Write</button>
      <img className="user-profile-icon" src={profile} alt="user-profile" />
    </header>
  )
}
Header.propTypes = {
  profile:PropTypes.object.isRequired,
}

export default Header