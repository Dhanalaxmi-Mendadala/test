async function putStory(story) {
  try {
    const response = await fetch('http://localhost:8000/story', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(story),
    });
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};
const saveDraft = async (id, storyTitle, story) => {
  const object = {
    storyId: id,
    title: storyTitle,
    content: story,
  };
  const data = await putStory(object);
}


export default saveDraft;