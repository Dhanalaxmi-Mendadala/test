import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./welcomePage";
import HomePage from "./homepage";
import StoryPage from "./StoryPage.jsx";
import WriteAStory from "./writeANewStory.jsx";
import DashBoard from "./DashBoard.jsx";
import Profile from "./profile.jsx";
import YourStories from "./YourStories.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />

          <Route path="/homepage" element={<HomePage />}>
            <Route  element={<DashBoard />} />
            <Route path="addstory" element={<WriteAStory />} />
            <Route path="storypage" element={<StoryPage />} />
            <Route path="profile" element= {<Profile />} />
            <Route path="yourstories" element= {<YourStories />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
