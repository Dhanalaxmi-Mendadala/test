async function fetchStory(STORY_ID) {
    console.log(STORY_ID,"IN Story Fetching");
    try {
        const response = await fetch(`http://localhost:8000/api/story/${STORY_ID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        const story = await response.json();
        console.log(story, '121323e2Hello');
        return story;
    } catch {
        return null;
    }
};
export default fetchStory;