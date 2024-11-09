import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import '../css/DashBoard.css'
import { UserInfo } from "./Home"
import moment from "moment"
import fetchCoverPage from "../API/fetchCoverPage"

const GenerateTime = ({ time }) => {
  const relativeTime = moment(time).fromNow();
  return (
    <p>{relativeTime}</p>
  )
}
GenerateTime.propTypes = {
  time: PropTypes.string.isRequired
}

const StoryComponent = ({ currentStory }) => {
  const [storyData, setStoryData] = useState(currentStory);
  const navigate = useNavigate();
  useEffect(() => {
    const addImage = async (url) => {
      const imageUrl = await fetchCoverPage(url);
      setStoryData({
        ...storyData,
        imageUrl: imageUrl
      })
      console.log(storyData, imageUrl, 'added the image')
    }
    addImage(currentStory['coverImageName']);
  }, []);

  console.log(storyData['content'], 'single story')
  const isContent = storyData['content'];
  const storyDescription = (isContent !== undefined) ? storyData['content']['0']['data']['text'] : '';

  return (
    <div className="story-component" onClick={() => {
      navigate(`/storypage/${storyData['id']}`)
    }}>

      <div className="author-details">
        <img src={storyData['author_avatar_url']} alt="avatar" className="author-avatar" />
        <h4 className="author-name">{storyData.author || 'Author'}</h4>
      </div>
      <div className="story-details">
        <h3 className="story-title">{storyData.title || 'Title'}</h3>
        <p className="story-description">
          {storyDescription || 'Story decription'}
        </p>
        <img src={storyData['imageUrl'] || null} alt="cover-image" className="story-cover-image" />
      </div>
      <div className="story-meta-data">

        <p className="published-time">{<GenerateTime time={storyData['published_at']} />}</p>
        <p className="story-claps"></p>
        <p className="story-responses"></p>
      </div>
    </div>
  )
}

StoryComponent.propTypes = {
  currentStory: PropTypes.object.isRequired
}


const DashBoard = () => {
  const someContext = useContext(UserInfo);
  const stories = someContext['stories']
  console.log(stories, 'dashboard')
  return (
    stories.length !== 0 ? <div className="user-dashboard">
      {stories.map((currentStory, i) =>
        <StoryComponent key={i} currentStory={currentStory} />)
      }
    </div> : <div id='Authors'>Please follow Authors to see the stories</div>
  )
}



export default DashBoard
// app -|
//      welcomePage -|
//                 HomePage -|   /user/dashboard - userId, avatar, manam follows, dashboard stories  -|
//                        DashBoard -|                                                             profileIcon
//                               multipleStories -| #onclick
//                                              StoryPage
