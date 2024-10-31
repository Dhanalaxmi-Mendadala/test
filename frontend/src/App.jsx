import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './welcomePage';
import DashBoard from './DashBoard';
import Autentication from './autent';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/auth' element = {<Autentication></Autentication>}></Route>
          <Route path='/DashBoard' element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
