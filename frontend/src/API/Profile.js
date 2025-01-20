export async function fetchProfile(USER_ID) {
  console.log(USER_ID, 'haosipvjsifvjisjf')
  try {
    const response = await fetch(`/api/user/profile/${USER_ID}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};
