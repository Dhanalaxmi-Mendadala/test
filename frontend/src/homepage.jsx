import { useState, useEffect } from 'react';
import DashBoard from './DashBoard';
import Header from './Header';
import './css/homepage.css';

const fetchUseData = async () => {
  try {
    const response = await fetch('http://localhost:8000/user/dashboard', {
      credentials: "include"
    });
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};

const HomePage = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserData = async () => {
     const data = await fetchUseData();
      setUserData(data||{})
    };
    getUserData();
  }, []);

  return (
    userData?<>
      <Header profile={userData['avatar_url']||'./assets'} username={userData['username']||"default"}/>
      <DashBoard stories={userData['stories']} />
    </>:<div>Error in fetching</div>
  )}
export default HomePage;