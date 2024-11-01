const ProfileIcon = () => {
  return (
    <img className="user-profile-icon" src="" alt="user-profile" />
  )
}


const Header = () => {
  return (
    <header className="main-header">
      <h1 className="title">Medium</h1>
      <ProfileIcon />
    </header>
  )
}

export default Header