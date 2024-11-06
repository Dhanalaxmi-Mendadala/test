import EditorJS from "@editorjs/editorjs";
import configuration from './configuration';
import { useEffect } from "react";
const Editor = (props) => {
  useEffect(() => {
    const editor = new EditorJS(configuration);
    return () => {
      editor.isReady.then(() => {
        editor.destroy();
      })
        .catch(() =>console.log('error'))}
  }, []);
  return <div>
    <div><input></input></div>
    <div id='editor'></div>
  </div>
};
export default Editor;