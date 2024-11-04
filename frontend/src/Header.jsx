import { useNavigate } from "react-router-dom"
import ProfileMenu from "./profileDropDown";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="main-header">
      <h1 className="title">Medium</h1>
      <button onClick={() => navigate('/homepage/addstory')}>Write</button>
      <ProfileMenu />
    </header>
  )
}

export default Header