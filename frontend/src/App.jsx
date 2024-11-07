import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./welcomePage";
import HomePage from "./homepage";
import StoryPage from "./StoryPage.jsx";
import WriteAStory from "./writeANewStory.jsx";
import DashBoard from "./DashBoard.jsx";
import YourStories from "./YourStoriesPage.jsx";
import Profile from "./myprofile.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/homepage" element={<HomePage />}>
            <Route index element={<DashBoard />} />
            <Route path="addstory" element={<WriteAStory />} />
            <Route path="storypage" element={<StoryPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="yourstories" element={<YourStories />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
