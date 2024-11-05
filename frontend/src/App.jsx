<<<<<<< HEAD
import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import WelcomePage from './welcomePage';
import HomePage from './homepage';
import StoryPage from './StoryPage.jsx';
import WriteAStory from './writeAStory.jsx';
import YourStories from './yourStories.jsx';
=======
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./welcomePage";
import HomePage from "./homepage";
import StoryPage from "./StoryPage.jsx";
import WriteAStory from "./writeANewStory.jsx";
import DashBoard from "./DashBoard.jsx";
import Profile from "./profile.jsx";
import YourStories from "./YourStories.jsx";
>>>>>>> 1b16f82f49a539545e26c4c9b0147ba1cd139224

function App() {
  return (
    <>
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route exact path='/' element={<WelcomePage />} />
          <Route path='/homepage' element={<HomePage />}/>
          <Route path='/homepage/addstory' element={<WriteAStory />} />
          <Route path='/homepage/storypage' element={<StoryPage />} />
          <Route path='/homepage/yourStories' element={<YourStories/>}/>
=======
          <Route exact path="/" element={<WelcomePage />} />

          <Route path="/homepage" element={<HomePage />}>
            <Route index element={<DashBoard />} />
            <Route path="addstory" element={<WriteAStory />} />
            <Route path="storypage" element={<StoryPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="yourstories" element={<YourStories />} />
          </Route>
>>>>>>> 1b16f82f49a539545e26c4c9b0147ba1cd139224
        </Routes>
      </Router>
    </>
  );
}
export default App;
