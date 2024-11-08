import { useRef } from 'react';
import { useParams } from 'react-router-dom'
import '../css/Story.css'
import PropTypes from 'prop-types'
import fetchStory from '../API/fetchStory'
import { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import copyLink from '../utilites/copyLink';
import image1 from "../components/svg/notclicked1.svg"
import image2 from "../components/svg/clicked-clap.svg"

const StoryContent = (props) => {
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
            config:{
              level:1,
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
  const { id } = useParams();
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const [storyData, setStoryData] = useState(false);
  useEffect(() => {
    const getStoryData = async () => {
      const data = await fetchStory(id);
      if (data === null) {
        setError(true);
      } else {
        setStoryData(data['story']);
      }
    };
    getStoryData();
  }, []);
  if (error) {
    return (
      <h1 style={{ color: "red" }}>
        Error!404 Page Not FOUND..Connection Issue
      </h1>
    );
  }

  const flagFunction = () => {
    // const state = !flag;
    setFlag(!flag)
}
  return (
    <>
      {
        storyData ? <main>
          <h1 className='main-title'>{storyData.title || 'Title'}</h1>
          <div className='story-author-details-container'>
           <div><img className='story-author-image' src={`https://avatars3.githubusercontent.com/u/${storyData.authorId}?v=4`}></img></div> 
            <div className='story-author-account-info-container'>
              <p className='story-author-name'>{storyData.author}</p>
              <p className='story-author-published'>{storyData.publications || ''}</p>
            </div>
          </div>
          <div className='all-actions-container'>
           <div className='claps-response-cotainer'>
           <div className='claps-container'>
              <img src = {flag ? image2 : image1} onClick={flagFunction}  style={{
                width: '20px', 
                height: '20px'
              }}/>
              <span className='claps-count'>12</span>
            </div>
            <div className='response-container'>
              <p className='response' title='Response'>Response</p>
              <span className='response-count'>12</span>
            </div>
           </div>
           <div className='all-links-container'>
            <div className='copy-link-container'>
              <p className='copy-link' onClick={()=>copyLink()}title='Copy Link'>Copy Link</p>
            </div>
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
