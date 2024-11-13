import { useRef, useEffect, useContext, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import saveDraft from "../API/saveDraft";
import PropTypes from "prop-types";
import "../css/WriteEditStory.css";
import { UserInfo } from "./Home";
import { useLocation } from "react-router-dom";

const EditorComponent = ({ storyId, initialData }) => {
  let currentDraft;
  let handlePublish;
  const editorRef = useRef(null);
  const [savingDraft, setSavingDraft] = useState(false);
  const editorInstance = useRef(null);
  const initializeEditor = async () => {
    if (!editorInstance.current) {
      editorInstance.current = new EditorJS({
        holder: editorRef.current,
        data: { time: new Date().getTime(), blocks: initialData },
        autofocus: true,
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
  };
  useEffect(() => {
    initializeEditor();
    const autosaveInterval = setInterval(async () => {
      const content =await editorInstance.current.save();
      console.log(currentDraft);
      if (content) {
        const title = content.blocks[0]?.data?.text || "Untitled Story";
        await saveDraft(storyId, title, content.blocks);
        console.log("Autosaved:", title);
        setSavingDraft(false);
      }
    }, 5000);
    return () => {
      clearInterval(autosaveInterval);
      if (editorInstance.current) {
        editorInstance.destroy();
      }
    };
  }, [initialData, storyId]);
  return (
    <>
      <div
        ref={editorRef}
        id="editorjs"
        style={{ border: "1px solid #ccc", padding: "10px" }}
      ></div>
      <div
        style={{
          color: "red",
          fontSize: "20px",
          position: "absolute",
          top: "0px",
        }}
      >
        {" "}
        {savingDraft ? "saving..." : "saved"}{" "}
      </div>{" "}
      <button
        id="publish"
        disabled={!currentDraft}
        onClick={() => handlePublish(storyId)}
      >
        {" "}
        Publish{" "}
      </button>{" "}
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
  },[]);
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
          initialData={location.state.content}
        />
      </div>
    </>
  );
};

export default WriteAStory;
