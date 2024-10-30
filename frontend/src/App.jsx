import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './welcomePage';
import DashBoard from './DashBoard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/DashBoard' element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
