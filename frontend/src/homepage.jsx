import { useState, useEffect, createContext } from "react";
import Header from "./Header";
import "./css/homepage.css";
import { Outlet } from "react-router-dom";

export const UserInfo = createContext(null);
const fetchUseData = async () => {
  try {
    const response = await fetch("http://localhost:8000/user/dashboard", {
      credentials: "include",
    });
    const data = await response.json();
    // console.log(data)
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
<<<<<<< HEAD

  return (
    userData?<>
      <Header profile={userData['avatar_url']||'./assets'} username={userData['username']||"default"}/>
      <DashBoard stories={userData['stories']} />
    </>:<div>Error in fetching</div>
  )}
export default HomePage;
=======
  if (userData === null || Object.keys(userData).length === 0) {
    return <div>Error in fetching</div>;
  }
  return (
    <>
      <UserInfo.Provider value={userData}>
        <Header />
        <Outlet />
      </UserInfo.Provider>
    </>
  );
};
export default HomePage;
>>>>>>> 1b16f82f49a539545e26c4c9b0147ba1cd139224
