const mainLogout = async () => {
  try {
    fetch('http://localhost:8000/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
  } catch (error) {
    console.log(error);
  }
}
export default mainLogout