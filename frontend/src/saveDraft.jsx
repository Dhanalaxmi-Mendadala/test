const saveDraft = (story, storyTitle) => {
    const object = {
        storyId: 1,
        title: storyTitle,
        content: story,
    };
    console.log(object);
} 
// async function putStory(story){
//     try {
//         const response = await fetch('http://localhost:8000/story',{
//           method: 'PUT',
//           headers: { 'Content-Type': 'json'},
//           mode:'cors',
//           credentials:"include",
//           body: story,
//         });
//         const data=await response.json();
//         console.log(data);
//         return data.isLoggedIn;
//       } catch{
//         return null;
      // }};

export default saveDraft;