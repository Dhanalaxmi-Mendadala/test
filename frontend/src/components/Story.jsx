import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import '../css/Story.css'
import PropTypes from 'prop-types'
import fetchStory from '../API/fetchStory'
import { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from "@editorjs/header"
import Delimiter from "@editorjs/delimiter"
import unClaped from "../components/svg/notclicked1.svg"
import claped from "../components/svg/clicked-clap.svg"
import copyLink from "../components/svg/copyLink.svg"
import fetchCoverPage from '../API/fetchCoverPage'
import makeClap from '../API/makeClap'
import copyLinkToClipboard from '../utilites/copyLink'

const StoryContent = (props) => {
  const editorContainer = useRef(null);
  let editor = null;
  const initialData = {
    blocks: props['contentData'],
  };
  console.log(props, 'at stoery conetne', initialData)
  useEffect(() => {
    if (!editor) {
      editor = new EditorJS({
        holder: "Editorjs",
        data: initialData,
        readOnly: true,
        tools: {
          header: {
            class: Header,
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
      })
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
  const [error, setError] = useState(false);
  const [storyData, setStoryData] = useState({});
  const [clapStatus, setClapStatus] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStoryData = async () => {
      setLoading(true);
      const data = await fetchStory(id);
      if (data === null) {
        setError(true);
      } else {
        const story = data['story'];
        const imageUrl = await fetchCoverPage(story['cover_image_name']);
        setStoryData({ ...story, imageUrl });
        setClapStatus({
          isClapped: story['isClapped'],
          clapsCount: story['clapsCount'],
        });
      }
      setLoading(false);
    };
    getStoryData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handldeClap = () => {
    makeClap(storyData['id'])
      .then((response) => setClapStatus(response));
  }

  if (error) {
    return (
      <h1 style={{ color: "red" }}>
        Error!404 Page Not FOUND..Connection Issue
      </h1>
    );
  }
  console.log(storyData, storyData['cover_image_name'], storyData['imageUrl'], 'completed fetching story data', clapStatus)

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
              <div className={`claps-container ${storyData['isAuthor'] && 'disable'}`} title='Claps' >
                <img src={(clapStatus['isClapped']) ? claped : unClaped}
                  onClick={handldeClap} style={{
                    width: '20px',
                    height: '20px'
                  }} />
                <span className='claps-count'>{clapStatus['clapsCount']}</span>
              </div>
              <div className='response-container' title='Response'>
                <p className='response' >Response</p>
                <span className='response-count'>{storyData['responsesCount']}</span>
              </div>
            </div>
            <div className='all-links-container'>
              <div className='copy-link-container' onClick={copyLinkToClipboard}>
                <img src={copyLink} style={{
                  height: '20px',
                  width: '20px'
                }}></img>
              </div>
            </div>
          </div>
          <div className='story-coverpage-container'>
            <img className='story-coverpage' src={storyData['imageUrl']} />
          </div>
          <div className='story-content-container'>
            <StoryContent contentData={storyData['content']} className='story-content' />
          </div>
        </main> : <p style={{ color: 'red' }}>Error with story</p>
      }
    </>
  )
}

export default StoryPage
