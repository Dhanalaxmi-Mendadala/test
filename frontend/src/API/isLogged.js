async function fetching() {
  try {
    const response = await fetch('http://localhost:8000/isLoggedIn', {
      method: 'GET',
      headers: { 'Content-Type': 'json' },
      mode: 'cors',
      credentials : 'include'
    });
    const data = await response.json();
    console.log(data,'121323e2')
    return data.isLoggedIn;
  } catch {
    return '1';
  }
};
export default fetching;