async function clapOrUnclapStory(storyId) {
    try {
      const response = await fetch(`http://localhost:8000/story/${storyId}/clap`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: storyId,
      });
      const data = await response.json();
      return data.isClapped;
    } catch {
      return null;
    }
  };
  export default clapOrUnclapStory;