import { useLocation } from 'react-router-dom'
import './css/StoryPage.css';
import EditorJS from "@editorjs/editorjs";
import { useRef ,useEffect} from 'react';
import PropTypes from 'prop-types';
// const parseData=(contentData)=>{
//   let html=[];
//   contentData.forEach((block, index) => {
//     switch (block.type) {
//       case 'paragraph':
//         html.push(<p key={index} className='content-paragraph'>{block.data.text.toLowerCase()}</p>);
//         break;
//       case 'header':
//         html.push(<h2 key={index} className='content-header'>{block.data.text}</h2>);
//         break;
//       case 'delimiter':
//         html.push(<hr key={index} className='content-delimiter' />);
//         break;
//       default:
//         return null;
//     }
//   }
//   );
//   return html;
// }

const StoryContent = (props)=> {
  const editorRef = useRef(null);
  let editor = null;
  const initialData = {
    time: new Date().getTime(),
    blocks: props['contentData']
  };
  useEffect(() => {
    if (!editor) {
      editor = new EditorJS({
        holder: "editorjs",
        data: initialData,
        readOnly: true,
        
    });
  }
    return () => {
      if (editor && typeof editor.destroy === "function") {
        editor.destroy();
      }
    };
  }, [initialData]);  return (
    <>
      <div
        ref={editorRef}
        id="editorjs"
        style={{ border: "1px solid #ccc", padding: "10px",margin:'auto',backgroundColor:'white' }}
      />
    </>
  );
};


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
            <img className='story-author-image' src={`https://avatars3.githubusercontent.com/u/${storyData.authorId }?v=4`}></img>
            <div className='story-author-account-info-container'>
              <p className='story-author-name'>{storyData.author}</p>
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
