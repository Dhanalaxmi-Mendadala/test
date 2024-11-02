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
    console.log(data, 'while fetching')
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
      setUserData(data);
    };
    getUserData();
  }, []);
console.log(userData, 'at home page')
  return (
    <>
      <Header profile={userData['avatar_url']} />
      <DashBoard stories={userData['stories']} />
    </>
  )
}

export default HomePage;