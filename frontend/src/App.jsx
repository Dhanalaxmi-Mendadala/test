import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './welcomePage';
import DashBoard from './DashBoard';
import AuthCallback from './authcallback';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/DashBoard' element={<DashBoard />} />
          <Route path='/auth/callback' element={<AuthCallback/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
