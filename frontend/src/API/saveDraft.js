async function putStory(story) {
  console.log("IN PUT Your Story", story)
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
  console.log(id,"savedraft intial called");
  const object = {
    storyId:id,
    title: storyTitle,
    content: story,
  };
  console.log(object,"Your Save Draft object Data");
  const response = await putStory(object);
  if (response) {
    console.log(response,"Your success response");
    return response.storyId;
  }
  else{
    console.log("called again",id);
    console.log("something",response);
  }
}

export {putStory};
export default saveDraft;