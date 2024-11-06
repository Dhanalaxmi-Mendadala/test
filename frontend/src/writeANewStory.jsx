import { useRef, useEffect, useState, useContext } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
// import saveDraft from './saveDraft';
import PropTypes from 'prop-types'
import "./css/writeANewStory.css";
import { UserInfo } from './homepage';


const EditorComponent = ({ setEditorData }) => {
  const editorRef = useRef(null);
  let editor = null;
  useEffect(() => {
    if (!editor) {
      editor = new EditorJS({
        placeholder: 'Tell your story ...',
        holder: editorRef.current,
        autofocus: true,
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: {
              level: 1,
            },
          },
          paragraph: {
            inlineToolbar: true,
            config: {
              placeholder: 'Tell your story ...',
              level: 1,
            },
          },
          delimiter: Delimiter,
        },
        onReady: () => {
          console.log('Editor is ready to use');
        },
        onChange: async () => {
          const content = await editor.save();
          console.log(content);
          setEditorData(content);
        },
      });
    }
    return () => {
      if (editor && typeof editor.destroy === 'function') {
        editor.destroy()
      }
    };
  }, [setEditorData]);

  return (
    <div
      ref={editorRef}
      id="editorjs"
      style={{ border: '1px solid #ccc', padding: '10px' }}
    />
  );
}; EditorComponent.propTypes = {
  setEditorData: PropTypes.func.isRequired,
}

const WriteAStory = () => {
  const [editorData, setEditorData] = useState(null);
  const [title, setTitle] = useState(null);
  const userInfo = useContext(UserInfo);

  return (
    <>
      <div id='writeHeader'>
        <h3 className="savesd-message">save in {userInfo['username']}</h3>
        <div>
          {/* <button onCliid='saveDraft'>Save Draft</button> */}
          <button id='publish'>Publish</button>
        </div>
      </div>
      <div className="editor-component">
        <textarea placeholder='Title' className='editorTitle' onChange={(e) => { setTitle(e.target.value) }} />
        <EditorComponent className='editor' setEditorData={setEditorData} />
      </div></>
  );
};

export default WriteAStory;
