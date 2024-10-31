import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './welcomePage';
import HomePage from './homepage';
import AddStory from './addstory.jsx';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<WelcomePage />} />
          <Route path='/homepage' element={<HomePage/>}></Route>
          <Route path='/homepage/addstory' element={<AddStory/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
