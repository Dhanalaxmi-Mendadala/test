import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './welcomePage';
import Header from './Header';
import DashBorad from './DashBoard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
        </Routes>
      </Router>
      <Header />
      <DashBorad />
    </>
  );
}

export default App;
