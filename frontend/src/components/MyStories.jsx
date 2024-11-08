import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../css/MyStories.css"
import getStories from "../API/getStories"
import PropTypes from 'prop-types'
import { publishStory } from "../API/publishStory"

function MyStories() {
  const [stories, setStories] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getStoriesData = async () => {
      const data = await getStories();
      if (data === null) {
        setError(true);
      } else {
        setStories(data);
        setLoading(false);
      }
    };
    getStoriesData();
  }, []);

  if (error) {
    return (<div className="error">Error!Page not found,Page not found</div>);
  }
  if (!loading) {
    return (
      <>
        <Stories stories={stories} />
      </>
    )
  }
};

function Drafts({ drafts }) {
  const navigator = useNavigate();
  useEffect(() => { }
    , [drafts]);

  return (<div className="drafts-container">
    {drafts.length === 0 ? <p>No Drafts yet,please create</p> :
      <div className='all-drafts-unit'>{
        drafts.map((draft, i) =>
          <div className="draft-unit" key={i} >
            <p className="draft-title" onClick={() => {
              navigator('/storypage', {
                state: {
                  currentStory: draft,
                }
              })
            }}>{draft['title']}</p>
            <button className="edit-draft-button" onClick={() =>
              navigator("/addstory", {
                state: {
                  id: draft['id'],
                  content: draft['content']
                }
              })}>EDIT</button>
            <button className="publish-button" onClick={() => {
              publishStory(draft['id'])
                .then(window.location.reload())
            }}>PUBLISH</button>
          </div>
        )
      }
      </div>}
  </div >)
}
Drafts.propTypes = {
  drafts: PropTypes.array.isRequired
}

function Publish({ published }) {
  const navigator = useNavigate();
  return (<div className="published-container">
    {published.length === 0 ? <p>No published Stories yet,please publish a story</p> :
      <div className='all-published-unit' > {
        published.map((aStory, i) =>
          <div className="a-story-unit" key={i} onClick={() => {
            navigator('/storypage', {
              state: {
                currentStory: aStory,
              }
            })
          }}>
            <p className="a-story-title">{aStory['title']}</p>
          </div>
        )
      }
      </div>}
  </div >)
}
Publish.propTypes = {
  published: PropTypes.array.isRequired
}

function Stories({ stories }) {
  const [currentPage, setCurrentPage] = useState('draft');
  return (
    <div id="yourStories">
      <h2>Your Stories</h2>
      <nav>
        <a className="draft" onClick={() => setCurrentPage("draft")}>Drafts</a>
        <a className="publish" onClick={() => setCurrentPage("publish")}>Published</a>
      </nav>
      {
        currentPage === "draft" && <Drafts drafts={stories.drafts} /> ||
        currentPage === "publish" && <Publish published={stories.published} />
      }
    </div>
  );
}
Stories.propTypes = {
  stories: PropTypes.object.isRequired
}

export default MyStories;
