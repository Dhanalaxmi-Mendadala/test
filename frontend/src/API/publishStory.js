 const publishStory = async (storyId) => {
  try {
    const response = await fetch(`http://localhost:8000/story/${storyId}/publish`, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      credentials: 'include',
      body: JSON.stringify({ tags: [], coverImage: '' }),
    });
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};
export default publishStory;