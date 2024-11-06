import { useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./profileDropDown";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location, "heheee😀");
  return (
    <header className="main-header">
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
