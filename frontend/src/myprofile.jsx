import { useEffect } from "react";
async function fetching() {
  try {
    const response = await fetch('http://localhost:8000/user/profile/58025056', {
      method: 'GET',
      headers: { 'Content-Type': 'json' },
      mode: 'cors',
    });
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};

const Profile = () => {
  useEffect (() => {
    const getprofile = async () => {
      const data = await fetching();
      console.log(data);
    };
    getprofile();
  },[]);

  return (
    <div className="profile">
      <div className="profile-header">
        <img src ="" alt="Profile" style={{ height: '100px', width: '100px' }} />
        <h2></h2>
      </div>
      <div className="profile-stats">
        <div>
          <button>
            Followers:
          </button>
        </div>
        <div>
          <button>
            Following:
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
