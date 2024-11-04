import React, { useContext } from 'react'
import { UserInfo } from './homepage'

function Profile() {
    const userData = useContext(UserInfo);
    console.log(userData)
  return (
    <div>Profile</div>
  )
}

export default Profile