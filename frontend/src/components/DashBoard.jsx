import { useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import '../css/DashBoard.css'
import { UserInfo } from "./Home"
import fetchCoverPage from "../API/fetchCoverPage"
import StoryCard from "./StoryCard"
import getResponses from "../API/getResponse"
import Loader from "./Loader"


const StoryComponent = ({ currentStory }) => {
  const [storyData, setStoryData] = useState(currentStory);
  useEffect(() => {
    const addImage = async (url) => {
      const imageUrl = await fetchCoverPage(url);
      setStoryData({
        ...storyData,
        imageUrl: imageUrl
      })
      console.log(storyData, imageUrl, 'added the image')
    }
    console.log(currentStory,currentStory['cover_image_name'],"In story card");
    addImage(currentStory['cover_image_name']);
  }, []);


  return (
    <StoryCard storyData={storyData}
      username={storyData['author']}
      userAvatar={storyData['avatar_url']}
      userId={storyData.authorId} />
  )
}
StoryComponent.propTypes = {
  currentStory: PropTypes.object.isRequired
}


const DashBoard = () => {
  const someContext = useContext(UserInfo);
  const stories = someContext['stories']
  console.log(someContext, stories, 'dashboard');
  const [storiesData, setstoriesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const storyIds = stories.map((currentStory) => currentStory['id']);
  useEffect(() => {
    const renewedData = storyIds.map(async (storyId) => {
      const data = await getResponses(storyId);
      return data['story'];
    });
    Promise.all(renewedData).then((data) => {
    setstoriesData(data);
    setLoading(false);
    });
  }, []);

  if(loading) {
    return (
      <>
      <Loader />
      </>
    )
  }

  return (
    storiesData.length !== 0 ? <div className="user-dashboard">
      {storiesData.map((currentStory, i) => { 
        return <StoryComponent key={i} currentStory={currentStory} />
      })
      }
    </div> : <div id='Authors'>Please follow Authors to see the stories</div>
  )
}


export { StoryComponent }
export default DashBoard
// app -|
//      welcomePage -|
//                 HomePage -|   /user/dashboard - userId, avatar, manam follows, dashboard stories  -|
//                        DashBoard -|                                                             profileIcon
//                               multipleStories -| #onclick
//                                              StoryPage
