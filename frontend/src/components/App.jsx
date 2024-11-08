import "../css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./Welcome.jsx";
import HomePage from "./Home.jsx";
import StoryPage from "./Story.jsx";
import WriteAStory from "./WriteEditStory.jsx";
import DashBoard from "./DashBoard.jsx";
import Profile from "./MyProfile.jsx";
import MyStories from "./MyStories.jsx";
import Drafts from "./Drafts.jsx";
import Publish from "./publishStories.jsx";
import { useEffect, useState } from "react";
import fetching from "../API/isLogged.js";


function App() {
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = async () => {
      const status = await fetching();
      if (status === null) {
        setError(true);
      } else {
        console.log(status);
        setIsLoggedIn(status);
        console.log(isLoggedIn);
      }
    };
    checkLoginStatus();
  }, []);
  if (error) {
    return (
      <h1 style={{ color: "red" }}>
        Error!404 Page Not FOUND..Connection Issue
      </h1>
    );
  }

  const homeElement = !isLoggedIn ? <WelcomePage /> : <HomePage />;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={homeElement}>
            <Route index element={<DashBoard />} />
            <Route path="addstory" element={<WriteAStory />} />
            <Route path="storypage/:id" element={<StoryPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="yourstories" element={<MyStories />} >
            <Route index path="drafts" element={<Drafts/>} />
            <Route path="published" element={<Publish />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
