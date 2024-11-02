import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import './css/DashBoard.css'

// const generateTimeDifference = (timeStamp) => {
//   const present = new Date(timeStamp)
//   const month = present.getMonth() + 1;
//   const date = present.getDate();
//   return month + '-' + date;
// };

const StoryComponent = ({ currentStory }) => {
  const [storyData, setStoryData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCoverPage = async () => {

      const response = await fetch('http://localhost:8000/coverImage/cover-image.png');
      setStoryData(storyData => ({
        ...storyData,
        image: response['url'],
      }));
    };
    setStoryData(currentStory);
    // setStoryData({ ...storyData, publishedTime: generateTimeDifference(storyData.published_at) })
    fetchCoverPage(currentStory['']);
  }, []);

  console.log(storyData, 'st story', currentStory);

  const storyDescription = storyData['content'] ? storyData['content']['0']['data']['text'] : '';
  console.log(storyDescription)

  return (
    <div className="story-component" onClick={() => {
      navigate('/homepage/storypage', {
        state: {
          currentStory: storyData,
        }
      })
    }}>

      <div className="author-details">
        <img src={`https://avatars3.githubusercontent.com/u/${storyData.authorId}?v=4`} alt="avatar" className="author-avatar" />
        <h4 className="author-name">{storyData.author || 'Author'}</h4>
      </div>
      <div className="story-details">
        <h3 className="title">{storyData.title || 'Title'}</h3>
        <p className="story-description">
          {storyDescription || 'Story decription'}
        </p>
        <img src={storyData['image']} alt="cover-image" className="story-cover-image" />
      </div>
      <div className="story-meta-data">
        <p className="published-time">{storyData.publishedTime}</p>
        <p className="story-claps"></p>
        <p className="story-responses"></p>
      </div>
    </div>
  )
}

StoryComponent.propTypes = {
  currentStory: PropTypes.object.isRequired
}


const DashBoard = ({ stories }) => {
  console.log('happy', stories)
  return (
    <div className="user-dashboard">
      {stories ? stories.map((currentStory, i) => <StoryComponent key={i} currentStory={currentStory} />)
        : <div className="error-message">Please follow Authors to see the stories</div>}
    </div>
  )
}

DashBoard.propTypes = {
  stories: PropTypes.object.isRequired
}

export default DashBoard



// app -|
//      welcomePage -|
//                 HomePage -|   /user/dashboard - userId, avatar, manam follows, dashboard stories  -|
//                        DashBoard -|                                                             profileIcon
//                               multipleStories -| #onclick
//                                              StoryPage