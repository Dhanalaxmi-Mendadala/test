import { useNavigate } from "react-router-dom";
import GenerateTime from "./Date"
import PropTypes from 'prop-types'
import parse from 'html-react-parser';

const StoryCard = ({ storyData, userAvatar, username, userId }) => {
  const navigate = useNavigate();

  const isContent = storyData['content'];
  const storyDescription = isContent ? storyData.content?.[0]?.data?.text ?? '' : '';
  return (<div className="story-component" onClick={() => {
    navigate(`/storypage/${storyData['id']}`)
  }}>
    <div className="author-details" title={username} onClick={(event) => {
      event.stopPropagation();
      navigate(`/profile/${userId}`);
    }}>
      <img src={userAvatar} alt="avatar" className="author-avatar" />
      <h4 className="author-name">{username || 'Author'}</h4>
    </div>
    <div className="story-details">
      <h3 className="story-title">{parse(storyData.title) || 'Title'}</h3>
      <p className="story-description">
        {storyDescription || 'Story decription'}
      </p>
      <img src={storyData['imageUrl']} className="story-cover-image" />
    </div>
    <div className="story-meta-data">

      <p className="published-time">{<GenerateTime time={storyData['published_at']} />}</p>
      <p className="story-claps"></p>
      <p className="story-responses"></p>
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