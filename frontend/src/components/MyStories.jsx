import { useState, useEffect, createContext } from "react"
import { NavLink } from "react-router-dom"
import "../css/MyStories.css"
import getStories from "../API/getStories"
import PropTypes from 'prop-types'
import { Outlet } from "react-router-dom"
import '../css/DeleteDraft.css'
import deleteDraft from "../API/deleteDraft"

export const StoryData = createContext(null);
function MyStories() {
  const [stories, setStories] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getStoriesData = async () => {
    const data = await getStories();
    if (data === null) {
      setError(true);
    } else {
      setStories(data);
      setLoading(false);
    }
  };

  const deleteDraftAndUpdate = (draftId) => {
    deleteDraft(draftId);
    getStoriesData();
    getStoriesData();
  };

  useEffect(() => {
    getStoriesData();
  }, []);

  if (error) {
    return (<div className="error">Error!Page not found,Page not found</div>);
  }
  if (!loading) {
    return (
      <>
        <Stories stories={stories} deleteDraft={deleteDraftAndUpdate} />
      </>
    )
  }
};

function Stories({ stories, deleteDraft }) {
  return (
    <div id="yourStories">
      <h2 className="your-stories-heading">Your Stories</h2>
      <nav>
        <NavLink ClassName="active" className="draft" to="drafts">Drafts</NavLink>
        <NavLink ClassName="active" className="publish" to="published">Published</NavLink>
      </nav>
      <StoryData.Provider value={{ stories, deleteDraft }}>
        <Outlet />
      </StoryData.Provider>
    </div>
  );
}
Stories.propTypes = {
  stories: PropTypes.object.isRequired,
  deleteDraft: PropTypes.func.isRequired
}

export default MyStories;
