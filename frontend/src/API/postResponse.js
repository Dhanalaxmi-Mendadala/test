export const postResponse = async (storyId, userResponse) => {
  try {
    const response = await fetch(`http://localhost:8000/story/${storyId}/response`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ 
        response: userResponse
       }),
    });
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};
