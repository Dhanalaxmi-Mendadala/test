import { useState, useEffect, createContext } from "react";
import Header from "./Header";
import "../css/Home.css";
import { Outlet } from "react-router-dom";
import fetchUserDashboard from "../API/userDashboard";
export const UserInfo = createContext(null);

const HomePage = () => {
  const [userData, setUserData] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserDashboard();
      setUserData(data || {});
      setloading(false);
    };
    getUserData();
  }, []);
  if (userData === null || Object.keys(userData).length === 0) {
    return <div>Error in fetching</div>;
  }
  if(loading){
    return (
    <>
    <div className="loading-container">
      <div className="loading"></div>
      <p>Loading..</p>
    </div>
    </>
  )}
  return (
    <>
      <UserInfo.Provider value={userData}>
        <Header />
        <div className="main-container">
          <Outlet />
        </div>
      </UserInfo.Provider>
    </>
  );
};
export default HomePage;
