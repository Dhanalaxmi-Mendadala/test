import { useNavigate } from "react-router-dom";
import GenerateTime from "./Date"
import PropTypes from 'prop-types'
import parse from 'html-react-parser';
import response from "../components/svg/responses.svg"
import claped from "../components/svg/clicked-clap.svg"
import view from '../components/svg/view3.svg'
import "../css/DashBoard.css";


const StoryCard = ({ storyData, userAvatar, username, userId }) => {
  const navigate = useNavigate();
  const isContent = storyData['content'];
  const storyDescription = isContent ? storyData.content?.[0]?.data?.text ?? '' : '';
  return (<div className="story-component" onClick={() => {
    navigate(`/story/${storyData['id']}`)
  }}>
    <div className="author-details" title={username} onClick={(event) => {
      event.stopPropagation();
      navigate(`/profile/${userId}`);
    }}>
      <img src={userAvatar} alt="avatar" className="author-avatar" />
      <h4 className="author-name">{username || 'Author'}</h4>
      <p className="published-time">{<GenerateTime time={storyData['published_at']} />}</p>
    </div>
    <div className="story-details">
      <h3 className="story-title">{parse(storyData.title) || 'Title'}</h3>
      <p className="story-description">
        {parse(storyDescription) || 'Story decription'}
      </p>
      <img src={storyData['imageUrl']} className="story-cover-image" />
    </div>
    <div className="story-meta-data">
   {storyData['clapsCount']!==undefined&&<p className="story-claps" title={`${storyData['clapsCount']} claps `}><img src={claped} style={{height:'16px',width:'16px'}}/> {storyData['clapsCount']}</p>}
   { storyData['responsesCount']!==undefined&&<p className="story-responses" title={`${storyData['responsesCount']} respomses `}><img src={response}  style={{height:'16px',width:'16px'}}/> {storyData['responsesCount']}</p>}
   { storyData['views']!==undefined&&<p className="view-Count"><img src={view}  style={{height:'16px',width:'16px'}} title={`${storyData['views']} views `}/> {storyData['views']}</p>}
    </div>
  </div>
  );
}
StoryCard.propTypes = {
  storyData: PropTypes.object.isRequired,
  userAvatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired
}


export default StoryCard