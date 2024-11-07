import "../css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./Welcome.jsx";
import HomePage from "./Home.jsx";
import StoryPage from "./Story.jsx";
import WriteAStory from "./WriteEditStory.jsx";
import DashBoard from "./DashBoard.jsx";
import Profile from "./MyProfile.jsx";
import MyStories from "./MyStories.jsx";
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
          {/* <Route path='/index' element={homeElement} > */}
          <Route path="/" element={homeElement}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="addstory" element={<WriteAStory />} />
            <Route path="storypage" element={<StoryPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="yourstories" element={<MyStories />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path='/index' element={<WelcomePage />} />
//           <Route path="/" element={<HomePage />}>
//             <Route index element={<DashBoard />} />
//             <Route path="addstory" element={<WriteAStory />} />
//             <Route path="storypage" element={<StoryPage />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="yourstories" element={<MyStories />} />
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

//           <Route path="/" element={<HomePage />}>
/* <Route path='/index' element={ isLoggedin ? <WelcomePage /> HOME} /> */
//           <Route path="/" element={<HomePage />}>

export default App;
