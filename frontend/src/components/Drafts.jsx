import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoryData } from "./MyStories";
import GenerateTime from "./Date";

function Drafts() {
  const stories = useContext(StoryData);
  const navigator = useNavigate();
  console.log(stories);
  const drafts = stories.drafts;

  return (<div className="drafts-container">
    {drafts.length === 0 ? <p>No Drafts yet,please create</p> :
      <div className='all-drafts-unit'>{
        drafts.map((draft, i) =>
          <div className="draft-unit" key={i} onClick={() =>
            navigator("/addstory", {
              state: {
                id: draft['id'],
                content: draft['content']
              }
            })}>
            <p className="draft-title" >{draft['title']}</p>
            {console.log(draft)}
            <p>Last modified <GenerateTime time={draft['last_modified']} /></p>
          </div>
        )
      }
      </div>}
  </div >)
};
export default Drafts;