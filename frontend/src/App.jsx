import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './welcomePage';
import Autentication from './autent';
function Home(){
return (<>
<p>Login Successfully</p>
</>)
};

function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/homePage' element={< Home/>} />
      <Route path='/auth/callback' element={< Autentication/>} />
    </Routes>
  </Router>

  </>
  );
}

export default App;
