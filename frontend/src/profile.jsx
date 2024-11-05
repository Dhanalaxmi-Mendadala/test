import { useContext } from 'react';
import { UserInfo } from './homepage'

function Profile() {
    const userData = useContext(UserInfo);
    console.log(userData)
  return (
    <div>
        <p>{userData.username}</p>
    </div>
  )
}

export default Profile