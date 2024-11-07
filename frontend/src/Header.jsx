import { useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./profileDropDown";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="main-header" style={{position:'sticky',top:'0px',zIndex:'1',backgroundColor:'white'}}>
      <h1 className="title" onClick={() => navigate("/homepage")}> Medium</h1>
      {
        location.pathname !== "/homepage/addstory" && (
          <button onClick={() => navigate("/homepage/addstory", {
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
      <ProfileMenu />
    </header >
  );
};

export default Header;
