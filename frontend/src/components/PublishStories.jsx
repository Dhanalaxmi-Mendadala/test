import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoryData } from "./MyStories";
function Publish() {
  const stories = useContext(StoryData);
  const navigator = useNavigate();
  console.log(stories);
  const published = stories.published;
  return (<div className="published-container">
    {published.length === 0 ? <p>No published Stories yet, please publish a story</p> :
      <div className='all-published-unit' > {
        published.map((aStory, i) =>
          <div className="a-story-unit" key={i} onClick={() => {
            navigator(`/storypage/${aStory['id']}`)
          }}>
            <p className="a-story-title">{aStory['title']}</p>
            <p>Published at{aStory['published_at']}</p>
          </div>
        )
      }
      </div>}
  </div >)
}

export default Publish;  