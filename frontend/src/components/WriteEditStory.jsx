import { useRef, useEffect, useContext, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import saveDraft from "../API/saveDraft";
import PropTypes from "prop-types";
import "../css/WriteEditStory.css";
import { UserInfo } from "./Home";
import { useLocation, useNavigate } from "react-router-dom";
import { publishStory } from "../API/publishStory";

const EditorComponent = (props) => {
  const editorRef = useRef(null);
  const [currentDraft, setCurrentDraft] = useState(null);
  const [clicked, setClicked] = useState(false);
  let editor = null;
  const initialData = {
    time: new Date().getTime(),
    blocks: props['initialData']
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
            config: {
              level: 1,
              placeholder: "Title",
            },
          },
          paragraph: {
            inlineToolbar: true,
            config: {
              level: 1,
              placeholder: "Tell your Story",
            },
          },
          delimiter: Delimiter,
        },
        onChange: async () => {
          const content = await editor.save();
          setCurrentDraft(content);
        },
        onReady: () => {
          console.log("Editor is ready to use");
        },
      });
    }

    return () => {
      if (editor && typeof editor.destroy === "function") {
      
      
        if (!clicked) {
      
      
          try {
            const getHeaderData = async () => {
              const content = await editor.save();
              const firstHeader = content.blocks.find(
                (block) => block.type === "header"
              );
              if (firstHeader) {
                saveDraft(props.storyId, firstHeader.data.text, content.blocks);
              } else {
                saveDraft(props.storyId, 'Untitled Story', content.blocks);
              }
              console.log("Unmounted successfully");
            };
            getHeaderData();
          } catch (error) {
            console.error("Error during unmount:", error);
          }
        }
        editor.destroy();
      }
    };
  }, [props.storyId]);

  const navigatior = useNavigate();

  const handlePublish = async (draftId) => {
    if (draftId) {
      publishStory(draftId)
        .then(navigatior('/yourstories'));
    } else {
      const firstHeader = currentDraft.blocks.find(
        (block) => block.type === "header"
      );
      let storyId = (firstHeader) ?
        await saveDraft(props.storyId, firstHeader.data.text, currentDraft.blocks) :
        await saveDraft(props.storyId, 'Untitled Story', currentDraft.blocks);
      await publishStory(storyId)
      navigatior('/yourstories');
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
        setClicked(true)
        handlePublish(props.storyId)
      }}>Publish</button>
    </>
  );
};
EditorComponent.propTypes = {
  storyId: PropTypes.number.isRequired,
  initialData: PropTypes.array.isRequired
};

const WriteAStory = () => {

  const userData = useContext(UserInfo);
  const location = useLocation();
  const id = location.state.id;
  const content = location.state.content;
  return (
    <>
      <div id="writeHeader">
        <div>Draft in {userData["username"]}</div>
      </div>
      <div className="editor-component">
        <EditorComponent className="editor" storyId={id} initialData={content} />
      </div>
    </>
  );
};

export default WriteAStory;
