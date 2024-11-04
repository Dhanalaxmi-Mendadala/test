import { useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./profileDropDown";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location, "heheee😀");
  return (
    <header className="main-header">
      <h1 className="title">Medium</h1>
      {location.pathname !== "/homepage/addstory" && (
        <button onClick={() => navigate("/homepage/addstory")}>Write</button>
      )}
      <ProfileMenu />
    </header>
  );
};

export default Header;
