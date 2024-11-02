import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import './css/DashBoard.css'


const StoryComponent = ({ currentStory }) => {
  const [storyData, setStoryData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCoverPage = async () => {
      const response = await fetch('http://localhost:8000/coverImage/cover-image.png');

      setStoryData(storyData => ({
        ...storyData,
        image: response['url']
      }))
    }
    fetchCoverPage();
  }, []);

  console.log(currentStory)
  return (
    <div className="story-component" onClick={() => {
      console.log(storyData)
      navigate('/homepage/storypage', {
        state: {
          currentStory: storyData,
        }
      })
    }}>

      <div className="author-details">
        <img src={'https://avatars3.githubusercontent.com/u/58026402?v=4'} alt="avatar" className="author-avatar" />
        <h4 className="author-name">Naveen Kumar</h4>
      </div>
      <div className="story-details">
        <h3 className="title">Title</h3>
        <p className="story-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dolorum numquam ipsa quibusdam sed, dolores accusamus, perferendis voluptatem minima beatae rem aut nulla! Ea totam quasi deleniti. Ipsam, impedit facilis. Vev dolores quae natus quos, quisquam laborum sunt fugit. Culpa?</p>
        <img src={storyData['image']} alt="cover-image" className="story-cover-image" />
      </div>
      <div className="story-meta-data">
        <p className="published-time">Feb 30</p>
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
  console.log(stories)
  return (
    <>
      {stories.map((currentStory, i) => <StoryComponent key={i} currentStory={currentStory} />)}
    </>
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