async function fetchStory(STORY_ID) {
    try {
        const response = await fetch(`http://localhost:8000/story/${STORY_ID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        const story = await response.json();
        console.log(story, '121323e2')
        return story;
    } catch {
        return null;
    }
};
export default fetchStory;