import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './welcomePage';

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<WelcomePage />} />
    </Routes>
  </Router>
  );
}

export default App;
