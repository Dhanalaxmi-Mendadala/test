const publishStory = async (storyId, tags, coverImage) => {
  const formData = new FormData();
  formData.append('tags', tags.join(','));
   if (coverImage) { formData.append('coverImage', coverImage); }
  console.log(formData);
  try {
    const response = await fetch(`/api/story/${storyId}/publish`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};
export default publishStory;