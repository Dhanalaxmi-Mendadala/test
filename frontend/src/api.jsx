async function fetching() {
  try {
    const response = await fetch('http://localhost:8000/isLoggedIn', {
      method: 'GET',
      headers: { 'Content-Type': 'json' },
      mode: 'cors',
    });
    const data = await response.json();
    return data.isLoggedIn;
  } catch {
    return null;
  }
};
export default fetching;