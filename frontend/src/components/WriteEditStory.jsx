import { useRef, useEffect, useContext, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import saveDraft from "../API/saveDraft";
import PropTypes from "prop-types";
import "../css/WriteEditStory.css";
import { UserInfo } from "./Home";
import publishStory from "../API/publishStory"
import { useLocation, useNavigate } from "react-router-dom";

const EditorComponent = ({ storyId, initialdata }) => {
  const editorRef = useRef(null);
  // const [currentDraft, setCurrentDraft] = useState(null);
  const [savingDraft, setSavingDraft] = useState(false);
  console.log(savingDraft)
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
        setSavingDraft(false);
      }
    }, 5000);

    return () => {
      if (editor && typeof editor.destroy === "function") {
        clearInterval(autosaveInterval);
        editor.destroy();
      }
    };
  }, [storyId]);

  const navigatior = useNavigate();

  const handlePublish = async (draftId) => {
    if (draftId) {
      await publishStory(draftId);
      navigatior('/yourstories/published');
    }
  }


  return (
    <>
      <div
        ref={editorRef}
        id="editorjs"
        style={{ border: "1px solid #ccc", padding: "10px" }}
      />

      <button id="publish" onClick={() => {
        handlePublish(storyId)
      }}>Publish</button>
    </>
  );
};
EditorComponent.propTypes = {
  storyId: PropTypes.number.isRequired,
  initialData: PropTypes.array.isRequired,
};

const WriteAStory = () => {
  const userData = useContext(UserInfo);
  const location = useLocation();
  const [storyId, setStoryId] = useState(null);
  const [loading, setLoading] = useState(true);
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
    return <div>Loading...</div>;
  }
  return (
    <>
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
