import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import './css/DashBoard.css'
import { UserInfo } from "./homepage"

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
    fetchCoverPage(currentStory['']);
  }, []);

  const storyDescription = storyData['content'] ? storyData['content']['0']['data']['text'] : '';

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


<<<<<<< HEAD
const DashBoard = ({ stories }) => {
  if(!stories){
    return <div>Error</div>
  }
=======
const DashBoard = () => {
  const someContext = useContext(UserInfo);
  console.log(someContext)

  const stories = someContext['stories']

>>>>>>> 1b16f82f49a539545e26c4c9b0147ba1cd139224
  return (
    stories.length!==0 ? <div className="user-dashboard">
      {stories.map((currentStory, i) => <StoryComponent key={i} currentStory={currentStory} />)
       }
    </div> : <div>Please follow Authors to see the stories</div>
  )
}



export default DashBoard
<<<<<<< HEAD

=======
// app -|
//      welcomePage -|
//                 HomePage -|   /user/dashboard - userId, avatar, manam follows, dashboard stories  -|
//                        DashBoard -|                                                             profileIcon
//                               multipleStories -| #onclick
//                                              StoryPage
>>>>>>> 1b16f82f49a539545e26c4c9b0147ba1cd139224
