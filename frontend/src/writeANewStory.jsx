import { useRef, useEffect, useState, useContext } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import saveDraft from "./saveDraft";
import PropTypes from "prop-types";
import "./css/writeANewStory.css";
import { UserInfo } from "./homepage";
import { useLocation } from "react-router-dom";

const EditorComponent = (props) => {
  const editorRef = useRef(null);
  let editor = null;
  const initialData = {
    time: new Date().getTime(),
    blocks: [
      { type: "header", data: { text: "", level: 1 }, placeholder: "Title" },
      {
        type: "paragraph",
        data: { text: "", level: 3, placeholder: "Tell  Story" },
      },
    ],
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

        onReady: () => {
          console.log("Editor is ready to use");
        },
      });
    }
    return () => {
      if (editor && typeof editor.destroy === "function") {
        try {
          const getHeaderData = async () => {
            const content = await editor.save();
            const firstHeader = content.blocks.find(
              (block) => block.type === "header"
            );
            if (firstHeader) {
              saveDraft(props.storyId,firstHeader.data.text, content.blocks);
            } else {
              saveDraft(props.storyId,'Untitled Story', content.blocks);
            }
            editor.destroy();
            console.log("Unmounted successfully");
          };
          getHeaderData();
        } catch (error) {
          console.error("Error during unmount:", error);
        }
      }
    };
  }, [props.id]);

  return (
    <div
      ref={editorRef}
      id="editorjs"
      style={{ border: "1px solid #ccc", padding: "10px" }}
    />
  );
};
EditorComponent.propTypes = {
  setEditorData: PropTypes.func.isRequired,
};

const WriteAStory = () => {
  const [title, setTitle] = useState(null);
  const userData = useContext(UserInfo);
  const location = useLocation();
  const id = location.state.id;
  return (
    <>
      <div id="writeHeader">
        <div>Draft in {userData["username"]}</div>
        <div>
          <button id="publish">Publish</button>
        </div>
      </div>
      <div className="editor-component">
        <EditorComponent className="editor" storyTitle={title} storyId={id} />
      </div>
    </>
  );
};

export default WriteAStory;
