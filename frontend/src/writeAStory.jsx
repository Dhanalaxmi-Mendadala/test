import {useEffect, useState } from 'react';
import saveDraft from './saveDraft';
import "./css/writeANewStory.css";
import getStories from './getStroiesApi';
import ProfileMenu from './profileDropDown';
import EditorComponent from './editorComponet';
const WriteAStory = () => {
  const [editorData, setEditorData] = useState(null);
  const [draftId,setDraftId]=useState(null);
  const [title, setTitle] = useState(null);
   useEffect(() => {
    const getStoriesData = async () => {
      const data = await getStories();
      if (data === null) {
        return <div className="Error">Error in fetchinf</div>
      } else {
        const id=data.drafts.length+1;
        console.log(id);
        setDraftId(id);
      }
    };
    getStoriesData();
  }, []);
  return (
    <>
      <div id='writeHeader'>
        <h1>Medium</h1>
        <div>
          <button onClick={() => saveDraft(editorData, title,draftId)} id='saveDraft'>SaveDraft</button>
          <button id='publish'>Publish</button>
        </div>
        <ProfileMenu/>
      </div>
      <div className="editor-component">
        <textarea placeholder='Title' className='editorTitle' onChange={(e) => { setTitle(e.target.value) }} />
        <EditorComponent className='editor' setEditorData={setEditorData} />
      </div></>
  );
};

export default WriteAStory;
