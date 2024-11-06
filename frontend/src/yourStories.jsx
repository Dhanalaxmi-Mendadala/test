import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./css/yourStories.css"
import getStories from "./getStoriesApi"
import PropTypes from 'prop-types'
import { publishStory } from "./publishStory"

function YourStories() {
  const [stories, setStoriesData] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getStoriesData = async () => {
      const data = await getStories();
      if (data === null) {
        setError(true);
      } else {
        setStoriesData(data);
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
    {drafts.length === 0 ? <p>No Drafts yet,please created</p> :
      <div className='all-drafts-unit'>{
        drafts.map((draft, i) =>
          <div className="draft-unit" key={i} >
            <p className="draft-title" onClick={() => {
              navigator('/homepage/storypage', {
                state: {
                  currentStory: draft,
                }
              })
            }}>{draft['title']}</p>
            <button className="edit-draft-button" onClick={() =>
              navigator("/homepage/addstory", {
                state: {
                  id: draft['id'],
                  content: draft['content']
                }
              })}>EDIT</button>
            <button className="publish-button" onClick={() => {
              publishStory(draft['id'])
                .then(navigator('/homepage/yourstories'))
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
    {published.length === 0 ? <p>No published yet,please pulish a story</p> :
      <div className='all-published-unit' > {
        published.map((aStory, i) =>
          <div className="a-story-unit" key={i} onClick={() => {
            navigator('/homepage/storypage', {
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
      <h1>Your Stories</h1>
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

export default YourStories;
