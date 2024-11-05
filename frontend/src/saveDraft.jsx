const saveDraft = (story, storyTitle) => {
  const storyContent = story.blocks.map(content => {
    console.log(storyContent, storyTitle)
    return { type: content.type, data: content.data }
  })

//   const object = {
//     storyId: 1,
//     title: storyTitle,
//     content: storyContent,
//   };
// }

// async function putStory(story) {
//   try {
//     const response = await fetch('http://localhost:8000/story', {
//       method: 'PUT',
//       headers: { 'Content-Type': 'json' },
//       mode: 'cors',
//       credentials: "include",
//       body: story,
//     });
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch {
//     return null;
//   }
};

export default saveDraft;