const saveDraft = (story, storyTitle, id) => {
  const storyContent = story.blocks.length !== 0 ? story.blocks.map(content => {
    return { type: content.type, data: content.data }
  }) : [];
  console.log(storyTitle);

  const object = {
    storyId: id,
    title: storyTitle,
    content: storyContent,
  };
  console.log(object);
  // putStory(object);
}

export default saveDraft;