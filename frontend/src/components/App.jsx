import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./Welcome.jsx";
import HomePage from "./Home.jsx";
import StoryPage from "./Story.jsx";
import WriteAStory from "./WriteEditStory.jsx";
import PropTypes from 'prop-types'
import DashBoard from "./DashBoard.jsx";
import Profile from "./MyProfile.jsx";
import MyStories from "./MyStories.jsx";
import Drafts from "./Drafts.jsx";
import Publish from "./PublishStories.jsx";
import { useEffect, useState } from "react";
import fetching from "../API/isLogged.js";
import "../css/App.css";
import Search from "./Search.jsx";

function App() {
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const status = await fetching();
      if (status === null) {
        setError(true);
      } else {
        setIsLoggedIn(status);
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

  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <WelcomePage />;
  };
  ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isLoggedIn ? <WelcomePage /> : <HomePage />}>
          <Route index element={<DashBoard />} />
          <Route path="addstory" element={<ProtectedRoute element={<WriteAStory />} />} />
          <Route path="profile/:id" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="search" element={<ProtectedRoute element={<Search />} />} />
          <Route path="story/:id" element={<StoryPage />} />
          <Route path="yourstories" element={<ProtectedRoute element={<MyStories />} />}>
            <Route index path="drafts" element={<Drafts />} />
            <Route path="published" element={<Publish />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;