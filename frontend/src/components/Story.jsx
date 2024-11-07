import { useLocation } from 'react-router-dom'
import '../css/Story.css'
import PropTypes from 'prop-types'

const StoryContent = ({ contentData }) => {
  return (
    <div>
      {contentData.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={index} className='content-paragraph'>{block.data.text.toLowerCase()}</p>;
          case 'header':
            return <h2 key={index} className='content-header'>{block.data.text}</h2>
          case 'delimiter':
            return <hr key={index} className='content-delimiter' />;
          default:
            return null;
        }
      })
      }
    </div>
  )
}

StoryContent.propTypes = {
  contentData: PropTypes.object.isRequired
}

const StoryPage = () => {
  const location = useLocation();
  const storyData = location.state.currentStory;
  console.log(storyData, 'got this data')

  return (
    <>
      {
        storyData ? <main>
          <h1 className='story-title'>{storyData.title || 'Title'}</h1>
          <div className='story-author-details-container'>
            <img className='story-author-image' src={`https://avatars3.githubusercontent.com/u/${storyData.authorId || 172028165}?v=4`}></img>
            <div className='story-author-account-info-container'>
              <p className='story-author-name'>{storyData.author || 'Author'}</p>
              <p className='story-author-published'>{storyData.publications || ''}</p>
            </div>
          </div>
          <div className='story-coverpage-container'>
            <img className='story-coverpage' src={storyData.image || '../assets/story.jpeg'}></img>
          </div>
          <div className='story-content-container'>
            <StoryContent contentData={storyData.content} className='story-content' />
          </div>
        </main> : <p style={{ color: 'red' }}>Error</p>
      }
    </>
  )
}

export default StoryPage
