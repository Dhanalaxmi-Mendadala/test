import { useState, useEffect } from 'react';
import DashBoard from './DashBoard'
import Header from './Header';
import './homepage.css';

const fetchUseData = async () => {
  try {
    const response = await fetch('http://localhost:8000/user/dashboard', {
      credentials: "include",
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch {
    return null;
  }
};
function HomePage() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUseData();
      setUserData(userData => ({
        ...userData,
        avatar_url: data['avatar_url']
      }));
    };

    getUserData();
  }, []);
  return (
    <>
      <Header profile={userData['avatar_url']}/>
      <DashBoard />
    </>
  )
}

export default HomePage;