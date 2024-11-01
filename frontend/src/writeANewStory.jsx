import { useRef, useEffect, useState } from 'react';
import "./writeANewStory.css";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import saveDraft from './saveDraft';
import PropTypes from 'prop-types'

const EditorComponent = ({setEditorData}) => {
    const editorRef = useRef(null);
    let editor = null;
    useEffect(() => {
       if(!editor) {
         editor = new EditorJS({
            placeholder: 'Tell youur story ...',
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
        }); }

        return () => {
            if (editor && typeof editor.destroy === 'function') {
                editor.destroy().catch(error => console.error('ERROR editor cleanup', error));
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
};EditorComponent.propTypes= {
    setEditorData:PropTypes.func.isRequired,
}
const WriteAStory = () => {
    const [editorData, setEditorData] = useState(null);
    const [title, setTitle] = useState(null);
    return (
        <>
        <div id='writeHeader'>
            <h1>Medium</h1>
            <div>
            <button onClick={()=> saveDraft(editorData,title)} id='saveDraft'>Save Draft</button>
            <button id='publish'>Publish</button>
            </div>
            </div>
            <input placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}/>
            <EditorComponent setEditorData={setEditorData}/>
        </>
    );
};

export default WriteAStory;
