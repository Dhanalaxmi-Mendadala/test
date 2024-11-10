import { useState, useEffect, createContext } from "react"
import { NavLink } from "react-router-dom"
import "../css/MyStories.css"
import getStories from "../API/getStories"
import PropTypes from 'prop-types'
import { Outlet } from "react-router-dom"
export const StoryData = createContext(null);
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

function Stories({ stories }) {

  return (
    <div id="yourStories">
      <h2>Your Stories</h2>
      <nav>
        <NavLink ClassName="active" className="draft" to="drafts" >Drafts</NavLink>
        <NavLink ClassName="active" className="publish" to="published">Published</NavLink>
      </nav>
      <StoryData.Provider value={stories}>
        <Outlet />
      </StoryData.Provider>
    </div>
  );
}

Stories.propTypes = {
  stories: PropTypes.object.isRequired
}

export default MyStories;
