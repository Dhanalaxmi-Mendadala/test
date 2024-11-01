import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="main-header">
      <h1 className="title">Medium</h1>
      <button onClick={() => navigate('/homepage/addstory')}>Write</button>
      <img className="user-profile-icon" src="" alt="user-profile" />
    </header>
  )
}

export default Header