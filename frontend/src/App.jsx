import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import WelcomePage from './welcomePage';
import StoryPage from './StoryPage.jsx';
import WriteAStory from './writeANewStory';


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path='/' element={<WelcomePage />} />
          <Route path='/homepage' element={<HomePage/>}></Route>
          <Route path='/homepage/addstory' element={<WriteAStory/>}/>
          <Route path='/homepage/storypage' element={<StoryPage/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
