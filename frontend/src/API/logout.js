const mainLogout = async () => {
  try {
    fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
  } catch (error) {
    console.log(error);
  }
}
export default mainLogout