import { useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileDropDown";
import '../css/Home.css'
import LogoutPopUp from "./LogoutPopup";
import { useState } from "react";


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [logoutFlag, setLogoutFlag] = useState(false);
  function logoutFunction () {
    setLogoutFlag(!logoutFlag);
  }
function close () {
  setLogoutFlag(false)
}

  return (
   <>
    <header className="main-header">
      <h1 className="title" onClick={() => navigate("/")}> Medium</h1>
      {
        location.pathname !== "/addstory" && (
          <button className="write-button" onClick={() => navigate("/addstory", {
            state: {
              id: null,
              content: [
                { type: "header", data: { text: "", level: 1 }, placeholder: "Title" },
                {
                  type: "paragraph",
                  data: { text: "", level: 3, placeholder: "Tell  Story" },
                },
              ],
            }
          })}>Write</button>
        )
      }
      <ProfileMenu logoutFunction = {logoutFunction} />
    </header >
    <LogoutPopUp close = {close} logoutFlag = {logoutFlag} />
   </>
  );
};

export default Header;
