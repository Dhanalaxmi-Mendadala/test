import { useState, useEffect } from 'react';
import DashBoard from './DashBoard';
import Header from './Header';
import './css/homepage.css';
import MyProfile from './myprofile';

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
      setUserData(data);
      console.log(data);
    };
    getUserData();
  }, []);
  if(userData===null||Object.keys(userData).length===0){
    return <div>Error in fetching</div>
  }
  return (
    <>
      <Header profile={userData['avatar_url']} />
      <DashBoard stories={userData['stories']} />
      <MyProfile/>
    </>
  )}
export default HomePage;