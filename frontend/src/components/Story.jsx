import { useRef } from 'react';
import { useParams } from 'react-router-dom'
import '../css/Story.css'
import PropTypes from 'prop-types'
import fetchStory from '../API/fetchStory'
import { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import unClaped from "../components/svg/notclicked1.svg"
import claped from "../components/svg/clicked-clap.svg"
import copylink from "../components/svg/copyLink.svg"

const StoryContent = (props) => {
  const editorContainer = useRef(null);
  let editor = null;
  const initialData = {
    blocks: props.contentData,
  };

  useEffect(() => {
    if (!editor) {
      editor = new EditorJS({
        holder: "editorjs",
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
  return <div id="editorjs" ref={editorContainer} ></div>;
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
            <img className='story-author-image' src={`https://avatars3.githubusercontent.com/u/${storyData.authorId}?v=4`}></img>
            <div className='story-author-account-info-container'>
              <p className='story-author-name'>{storyData.author}</p>
              <p className='story-author-published'>{storyData.publications || ''}</p>
            </div>
          </div>
          <div className='all-actions-container'>
           <div className='claps-response-cotainer'>
           <div className='claps-container'>
              <img src = {flag ? claped : unClaped} onClick={flagFunction}  style={{
                width: '20px', 
                height: '20px'
              }} title='Claps'/>
              <span className='claps-count'>12</span>
            </div>
            <div className='response-container'>
              <p className='response' title='Response'>Response</p>
              <span className='response-count'>12</span>
            </div>
           </div>
           <div className='all-links-container'>
            <div className='copy-link-container'>
              <img src= {copylink} style={{
                height: '20px',
                width: '20px',
              }} title='Copy Link'></img>
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
