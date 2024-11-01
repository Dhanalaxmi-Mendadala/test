import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WriteANewStory from './writeANewStory';
// import HomePage from './homepage';
// import AddStory from './addstory.jsx';


function App() {
  return (
    <>
      <Router>
      <Routes>
      <Route path='/' element={<WriteANewStory />} />
    </Routes>
      </Router>
    </>
  );
}
export default App;
