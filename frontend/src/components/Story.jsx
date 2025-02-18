import { useNavigate, useParams } from 'react-router-dom'
import '../css/Story.css'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import fetchStory from '../API/fetchStory.js'
import { useRef, useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from "@editorjs/header"
import Delimiter from "@editorjs/delimiter"
import unClaped from "../components/svg/notclicked1.svg"
import claped from "../components/svg/clicked-clap.svg"
import copyLink from "../components/svg/copyLink2.svg"
import response from "../components/svg/responses.svg"
import fetchCoverPage from '../API/fetchCoverPage'
import makeClap from '../API/makeClap'
import copyLinkToClipboard from '../utilites/copyLink'
import ResponseofStory from './ResponseofStory.jsx'
import GenerateTime from './Date.jsx'
import view from '../components/svg/view3.svg'
import copied from '../components/svg/copied.svg'
import List from '@editorjs/list'
import CodeTool from '@editorjs/code'
import Embed from '@editorjs/embed'
import { followAuthor } from '../API/follow.js'
import { unFollowAuthor } from '../API/unFollow.js'



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
          embed: Embed,
          code: CodeTool,
          list: List,
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
  const [openResponse, setopenResponse] = useState(false);
  const [clapStatus, setClapStatus] = useState({});
  const [responsesCount, setResponsesCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copiedFlag, setCopiedFlag] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigateTo = useNavigate();

  function copiedFunction() {
    setCopiedFlag(true)
    copyLinkToClipboard()
    setTimeout(() => {
      setCopiedFlag(false)
    }, 2000)
  }

  const Follow = () => {
    return (
      <div className="follow-unit cursor" onClick={() => {
        followAuthor(storyData['authorId'])
        setUserInfo({ ...userInfo, isFollowing: 1 });
      }}>
        <p className="follow-tag">Follow</p>
      </div>
    )
  }

  const UnFollow = () => {
    return (
      <div className="unfollow-unit cursor" onClick={() => {
        unFollowAuthor(storyData['authorId']);
        setUserInfo({ ...userInfo, isFollowing: 0 });
      }}>
        <p className="unfollow-tag" >Unfollow</p>
      </div>
    )
  }
  useEffect(() => {
    const getStoryData = async () => {
      setLoading(true);
      const data = await fetchStory(id);
      console.log(data);
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
        setResponsesCount(story['responsesCount']);
        setUserInfo({ authenticated: data.isUserAuth, isFollowing: data.isFollowing });
      }
      setLoading(false);
    };
    getStoryData();
  }, [id, storyData['is_following']]);

  if (loading) {
    return (
      <>
        <div className='loading-container'>
          <div className='loading'></div>
          <p>Loading...</p>
        </div>
      </>
    );
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
      {openResponse && <ResponseofStory storyId={storyData['id']} setopenResponse={setopenResponse} responseState={{ responsesCount, setResponsesCount }} />}
      {
        storyData ? <main>
          <h1 className='main-title'>{parse(storyData.title) || 'Title'}</h1>
          <div className='story-author-details-container' onClick={() => {
            navigateTo(`/profile/${storyData.authorId}`)
          }}>
            <div><img className='story-author-image' src={storyData['avatar_url']}></img></div>
            <div className='story-author-account-info-container'>
              <p className='story-author-name'>{storyData.author}</p>
              {
                !storyData['isAuthor'] && (userInfo['isFollowing'] ?
                  <UnFollow /> : <Follow />)
              }
              <div>Published at <GenerateTime time={storyData.published_at} /></div>
              <p className='story-author-published'>{storyData.publications || ''}</p>
            </div>
          </div>
          {
            !storyData['isAuthor'] && 
            (userInfo['isFollowing'] ?
              <UnFollow /> : <Follow />)
          }
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
                <p className='response' onClick={() => {
                  setopenResponse(true)
                }}  > <img src={response}
                  style={{
                    width: '20px',
                    height: '20px'
                  }} /></p>
                <span className='response-count'>{responsesCount}</span>
              </div>
              <div className='views-container' title='Views'>
                <p className='views'
                > <img src={view}
                  style={{
                    width: '20px',
                    height: '20px'
                  }} /></p>
                <span className='views-count'>{storyData['views']}</span>
              </div>
            </div>
            <div className='all-links-container'>
              <div className='copy-link-container' title='Copy Link'>
                <div className={copiedFlag ? 'copied-container' : 'copiedHidden'} >
                  <p className='copied'>Link Copied</p>
                  <img className='copied-image' src={copied} style={{
                    height: '20px',
                    width: '30px',
                  }}></img>
                </div>
                <img className='copy-link-image' src={copyLink} style={{
                  height: '20px',
                  width: '20px',
                }} onClick={copiedFunction}></img>
              </div>
            </div>
          </div>
          <div className='story-coverpage-container'>
            <img className='story-coverpage' src={storyData['imageUrl']} />
          </div>
          <div className='story-content-container'>
            <StoryContent contentData={storyData['content']} className='story-content' />
          </div>
          {console.log(openResponse)}
        </main> : <p style={{ color: 'red' }}>Error with story</p>
      }
    </>
  )
}

export default StoryPage
