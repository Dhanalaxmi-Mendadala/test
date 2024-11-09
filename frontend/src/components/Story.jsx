import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import '../css/Story.css'
import PropTypes from 'prop-types'
import fetchStory from '../API/fetchStory.js'
import { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from "@editorjs/header"
import Delimiter from "@editorjs/delimiter"
import claped from "../components/svg/notclicked1.svg"
import unClaped from "../components/svg/clicked-clap.svg"
import copyLink from "../components/svg/copyLink.svg"
import fetchCoverPage from '../API/fetchCoverPage'
import CopyLink from "../utilites/copyLink";
// import DateComponent from './Date'
// import responses from "../components/svg/responses.svg"


const StoryContent = (props) => {
  // To Show the Story Content
  const editorContainer = useRef(null);
  let editor = null;
  const initialData = {
    blocks: props.contentData,
  };

  useEffect(() => {
    if (!editor) {
      editor = new EditorJS({
        holder: "Editorjs",
        data: initialData,
        readOnly: true,
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: {
              level: 1,
            }
          },
          paragraph: {
            inlineToolbar: true,
            config: {
              level: 1,
            },
          },
          delimiter: Delimiter,
        },
      });
    }
    return () => {
      if (editor && typeof editor.destroy === "function") {
        editor.destroy();
      }
    }
  }, []);
  return <div id="Editorjs" ref={editorContainer} ></div>;
}
StoryContent.propTypes = {
  contentData: PropTypes.array.isRequired,
};

const StoryPage = () => {
  const { id } = useParams(); //get id from url
  const [loading,setLoading]=useState(true);
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const [storyData, setStoryData] = useState({});
  console.log("hello",id);

  //Fetch the storyData from API by using its story Id
  useEffect(() => {
    const getStoryData = async () => {
      const data = await fetchStory(id);
      console.log(data);
      if (data === null) {
        setError(true);
      } else {
        const story=data['story'];
        const imageUrl=await fetchCoverPage(story['cover_image_name']);
        setStoryData({...story,imageUrl});
      }
      setLoading(false);
    };
    getStoryData();
  },[id]);

  if(loading){
    return <div>Loading</div>;
  }

  /* Error ,When data is not fetched */
  if (error) {
    return (
      <h1 style={{ color: "red" }}>
        Error!404 Page Not FOUND..Connection Issue
      </h1>
    );
  }


// Toggle the clap
  const flagFunction = () => {
    setFlag(!flag)
  }

// Return the story page
  return (
    <>
      {
        storyData ? <main>
          <h1 className='main-title'>{storyData.title || 'Title'}</h1>
          <div className='story-author-details-container'>
            <div><img className='story-author-image' src={storyData['avatar_url']}></img></div>
            <div className='story-author-account-info-container'>
              <p className='story-author-name'>{storyData.author}</p>
              <p className='story-author-published'>{storyData.publications || ''}</p>
            </div>
          </div>
          <div className='all-actions-container'>
            <div className='claps-response-cotainer'>
              <div className='claps-container' title='Claps' >
                <img src={flag ? unClaped : claped} onClick={flagFunction} style={{
                  width: '20px',
                  height: '20px'
                }} />
                <span className='claps-count'>{storyData['clapsCount']}</span>
              </div>
              <div className='response-container' title='Response'>
                <p className='response' >Response</p>
                <span className='response-count'>{storyData['responsesCount']}</span>
              </div>
            </div>
            <div className='all-links-container'>
              <div className='copy-link-container'>
                <img src={copyLink} onClick={()=>CopyLink()}style={{
                  height: '20px',
                  width: '20px'
                }}></img>
              </div>
            </div>
          </div>
          <div className='story-content-container'>
            {console.log(storyData.content)}
            <StoryContent contentData={storyData.content} className='story-content' />
          </div>
        </main> : <p style={{ color: 'red' }}>Error</p>
      }
    </>
  )
}

// {
//   // storyData['imageUrl'] &&
//   // <div className='story-coverpage-container'>
//   //   <img className='story-coverpage' src={null} />
//   // </div>
//   }
export default StoryPage
