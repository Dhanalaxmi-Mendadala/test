import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WriteAStory from './writeANewStory';
// import HomePage from './homepage';
// import WelcomePage from './welcomePage';


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path='/' element={<WriteAStory />} />
          {/* <Route path='/homepage' element={<HomePage/>}></Route>
          <Route path='/homepage/addstory' element={<WriteAStory/>}/> */}
        </Routes> 
      </Router>
    </>
  );
}
export default App;
