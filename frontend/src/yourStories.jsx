import { useState,useEffect } from "react";
import Header from "./Header";
import "./css/yourStories.css"
import PropTypes from 'prop-types';
import getStories from "./getStroiesApi";
function YourStories(){
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
  if(error){
    return (<div className="error">Error!Page not found,Page not found</div>);
  }
  if(!loading){
   return (
    <>
    <Header/>
    <Stories stories={stories}/>
    </>
   )
  }
};
function Drafts({drafts}){
  return (<div>
    {drafts.length===0?<p>No Drafts yet,please created</p>:<div>
      all drafts
      </div>}
  </div>)
}
Drafts.propTypes={
  drafts:PropTypes.array.isRequired,
}
function Publish({published}){
  return (<div>
   { published.length===0?<p>Please publish your drafts</p>:<div>
      all Published drafts
      </div>}
  </div>)
}
Publish.propTypes={
  published:PropTypes.array.isRequired,
};
function Stories({stories}){
  const [currentPage,setCurrentPage]=useState('draft');
  return (
<div id="yourStories">
      <h1>Your Stories</h1>
      <nav>
        <a  onClick={()=>setCurrentPage("draft")}>Drafts</a>
        <a onClick={()=>setCurrentPage("publish")}>Published</a>
      </nav>
      {
        currentPage==="draft"&&<Drafts drafts={stories.drafts}/>||
        currentPage==="publish"&&<Publish published={stories.published}/>
      }
      </div>
      );
}
Stories.propTypes={
  stories:PropTypes.array.isRequired,
};
export default YourStories;