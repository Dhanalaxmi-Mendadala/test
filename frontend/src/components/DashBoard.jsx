import { useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import '../css/DashBoard.css'
import { UserInfo } from "./Home"
import fetchCoverPage from "../API/fetchCoverPage"
import StoryCard from "./StoryCard"
// import getResponses from "../API/getResponse"


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
    addImage(currentStory['coverImageName']);
  }, []);

  console.log(storyData['content'], 'single story')

  return (
    <StoryCard storyData={storyData}
      username={storyData['author']}
      userAvatar={storyData['author_avatar_url']}
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
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const storyIds = stories.map((currentStory) => currentStory['id']);
  // useEffect(() => {
  //   const renewedData = storyIds.map(async (storyId) => {
  //     const data = await getResponses(storyId);
  //     return data['story'];
  //   });
  //   setData(renewedData);
  //   setLoading(false)
  // }, []);

  // if(loading) return <p>loading...</p>

  // console.log(storyIds,data, 'colllection of all story ids');
  return (
    stories.length !== 0 ? <div className="user-dashboard">
      {stories.map((currentStory, i) =>
        <StoryComponent key={i} currentStory={currentStory} />)
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
