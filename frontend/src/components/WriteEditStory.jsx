import { useRef, useEffect, useContext, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import saveDraft from "../API/saveDraft";
import Code from '@editorjs/code';
import PropTypes from "prop-types";
import "../css/WriteEditStory.css";
import { UserInfo } from "./Home";
import { useLocation } from "react-router-dom";
import PublishDraft from "./publishDraftPopup";
import List from '@editorjs/list'
import Image from '@editorjs/image'

const EditorComponent = ({ storyId, initialdata }) => {
  
  const editorRef = useRef(null);
  let editor = null;
  const initialData = {
    time: new Date().getTime(),
    blocks: initialdata,
  };
  useEffect(() => {
    if (!editor) {
      editor = new EditorJS({
        holder: "editorjs",
        data: initialData,
        autofocus: "true",
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: { level: 1, placeholder: "Title" },
          },
          paragraph: {
            inlineToolbar: true,
            config: { placeholder: "Tell your Story" },
          },
          code : Code,
          list: List,
          image: Image,
          delimiter: Delimiter,
        },
        onReady: () => {
          console.log("Editor is ready to use");
        },
      });
    }
    const autosaveInterval = setInterval(async () => {
      const content = await editor.save();
      const title = content.blocks[0]?.type==="header"&&content.blocks[0].data.text.length!==0?content.blocks[0].data.text:'Untitled Story';
  
      if (content) {
        await saveDraft(storyId, title, content.blocks);
        console.log("Autosaved:", title);
      }
    }, 5000);
    return () => {
      if (editor && typeof editor.destroy === "function") {
        clearInterval(autosaveInterval);
        editor.destroy();
      }
    };
  }, [storyId]);

  return (
    <>
      <div
        ref={editorRef}
        id="editorjs"
        style={{ border: "1px solid #ccc", padding: "10px" }}
      />
    </>
  );
};
EditorComponent.propTypes = {
  storyId: PropTypes.number.isRequired,
  initialdata: PropTypes.array.isRequired,
};

const WriteAStory = () => {
  const userData = useContext(UserInfo);
  const location = useLocation();
  const [storyId, setStoryId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openPublishDiv,setOpenPublishDiv]=useState(false);
  useEffect(() => {
    const generateId = async () => {
      try {
        const generatedStoryId = await saveDraft(null, " ", [
          ...location.state.content,
        ]);
        setStoryId(generatedStoryId);
        setLoading(false);
      } catch (error) {
        console.error("Error generating story ID", error);
        setLoading(false);
      }
    };
    if (!location.state.id && loading) {
      generateId();
    } else {
      setStoryId(location.state.id);
      setLoading(false);
    }
  }, []);
  if (loading) {
    return (
      <>
      <div className="loading-container">
        <div className="loading"></div>
        <p>Loading...</p>
      </div>
      </>
    )
  }
  return (
    <>
      
      <button id="publish" onClick={() =>setOpenPublishDiv(true)}>Publish</button>
      {console.log}
      {openPublishDiv&&<PublishDraft draftId={storyId}  openPopup={setOpenPublishDiv}/>}
      <div id="writeHeader">Draft in {userData["username"]}</div>
      <div className="editor-component">
        <EditorComponent
          className="editor"
          storyId={storyId}
          initialdata={location.state.content}
        />
      </div>
    </>
  );
};
export default WriteAStory;
