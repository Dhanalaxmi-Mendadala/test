import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import WelcomePage from './welcomePage';
import WriteAStory from './writeANewStory';


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path='/' element={<WelcomePage />} />
          <Route path='/homepage' element={<HomePage/>}></Route>
          <Route path='/homepage/WriteAStory' element={<WriteAStory/>}/>
        </Routes> 
      </Router>
    </>
  );
}
export default App;
