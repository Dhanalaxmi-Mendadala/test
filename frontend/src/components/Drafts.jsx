import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoryData } from "./MyStories";
function Drafts() {
    const stories= useContext(StoryData);
    const navigator = useNavigate();
    console.log(stories);
    const drafts=stories.drafts;

    return (<div className="drafts-container">
        {drafts.length === 0 ? <p>No Drafts yet,please create</p> :
            <div className='all-drafts-unit'>{
                drafts.map((draft, i) =>
                    <div className="draft-unit" key={i} >
                        <p className="draft-title" onClick={() =>
                            navigator("/addstory", {
                                state: {
                                    id: draft['id'],
                                    content: draft['content']
                                }
                            })}>{draft['title']}</p>
                    </div>
                )
            }
            </div>}
    </div >)
};
export default Drafts;