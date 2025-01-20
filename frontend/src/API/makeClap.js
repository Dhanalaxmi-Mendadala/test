async function makeClap(STORY_ID) {
  try {
    const response = await fetch(`http://localhost:8000/api/story/${STORY_ID}/clap`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
    const clapResponse = await response.json();
    console.log(clapResponse, 'clap response')
    return clapResponse;
  } catch {
    return null;
  }
};
export default makeClap;