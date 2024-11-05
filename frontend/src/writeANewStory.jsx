import { useEffect, useRef, useState } from 'react'; 
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import PropTypes from 'prop-types';
import "./css/writeANewStory.css";
import "./css/list.css";

const EditorComponent = ({ setEditorData }) => {
  const editorRef = useRef(null);
  let editor = null;

  useEffect(() => {
    if (!editor) {
      editor = new EditorJS({
        holder: editorRef.current,
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: { level: 1 },
          },
          paragraph: {
            inlineToolbar: true,
            config: { placeholder: 'Tell Me Your Story ...!' },
          },
          delimiter: Delimiter,
        },
        onChange: async () => {
          const content = await editor.save();
          setEditorData(content);
        },
      });
    }

    return () => {
      if (editor && typeof editor.destroy === 'function') {
        editor.destroy().catch(error => console.error('ERROR editor cleanup', error));
      }
    };
  }, [setEditorData]);

  return <div ref={editorRef} id="editorjs" style={{ padding: '0px' }} />;
};

EditorComponent.propTypes = {
  setEditorData: PropTypes.func.isRequired,
};

const WriteAStory = () => {
  const [editorData, setEditorData] = useState(null);
  const [content, setContent] = useState('');
  const [drafts, setDrafts] = useState([]);
  const [selectedDraft, setSelectedDraft] = useState(null); // To store the currently selected draft

  useEffect(() => {
    const savedDrafts = JSON.parse(localStorage.getItem('drafts')) || [];
    setDrafts(savedDrafts);
  }, []);

  const saveDraft = () => {
    const draft = { title: content, content: editorData };
    const updatedDrafts = [...drafts, draft];
    localStorage.setItem('drafts', JSON.stringify(updatedDrafts));
    setDrafts(updatedDrafts);
    alert('Draft saved!');
  };

  const loadDraft = (draft) => {
    setContent(draft.title);
    setEditorData(draft.content);
    setSelectedDraft(draft); // Update selected draft state
  };

  return (
    <>
      <div id='writeHeader'>
        <h1>Medium</h1>
        <div>
          <button onClick={saveDraft} id='saveDraft'>Save Draft</button>
          <button id='publish'>Publish</button>
        </div>
      </div>
      <div className="editor-component">
        <textarea
          className='editorTitleAndStory'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={content ? "Tell your story..." : "Enter your title..."}
          rows={4}
        />
        <EditorComponent setEditorData={setEditorData} />
      </div>
      <div className="drafts-list">
        <h2>Saved Drafts</h2>
        <ul>
          {drafts.map((draft, index) => (
            <li key={index} onClick={() => loadDraft(draft)}>
              {draft.title || "Untitled Draft"}
            </li>
          ))}
        </ul>
      </div>
      {selectedDraft && ( // Conditionally render the draft details
        <div className="draft-details">
          <h3>Draft Details:</h3>
          <h4>Title: {selectedDraft.title}</h4>
          <div>
            <h4>Content:</h4>
            <pre>{JSON.stringify(selectedDraft.content, null, 2)}</pre>
          </div>
        </div>
      )}
    </>
  );
};

export default WriteAStory;
