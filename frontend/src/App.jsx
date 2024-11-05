import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import WelcomePage from './welcomePage';
import HomePage from './homepage';
import StoryPage from './StoryPage.jsx';
import WriteAStory from './writeAStory.jsx';
import YourStories from './yourStories.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<WelcomePage />} />
          <Route path='/homepage' element={<HomePage />}/>
          <Route path='/homepage/addstory' element={<WriteAStory />} />
          <Route path='/homepage/storypage' element={<StoryPage />} />
          <Route path='/homepage/yourStories' element={<YourStories/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
