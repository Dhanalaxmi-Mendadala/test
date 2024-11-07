// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header';
// import Delimiter from '@editorjs/delimiter';
// import PropTypes from 'prop-types';
// import { useRef, useEffect } from 'react';

// const editorConfig = () => {
//   return (
//     {
//       placeholder: 'Tell your story ...',
//       holder: editorRef.current,
//       autofocus: true,
//       blocks: {
//         type: "header",
//         placeholder: 'Title',
//       },
//       tools: {
//         header: {
//           class: Header,
//           inlineToolbar: true,
//           config: {
//             level: 1,
//           },
//         },
//         paragraph: {
//           inlineToolbar: true,
//         },
//         delimiter: Delimiter,
//       },
//       data: {
//         blocks: [
//           {
//             type: 'paragragh',
//             data: {
//               text: '',
//               placeholder: "Tell your Story",
//             }
//           }
//         ]
//       },
//       onReady: () => {
//         console.log('Editor is ready to use');
//       },
//       onChange: async () => {
//         const content = await editor.save();
//         console.log(content);
//         setEditorData(content);
//       },
//     }
//   );
// };

// const EditorComponent = ({ setEditorData }) => {
//   const editorRef = useRef(null);
//   let editor = null;
//   useEffect(() => {
//     if (!editor) {
//       editor = new EditorJS(editorConfig);
//     }
//     return () => {
//       if (editor && typeof editor.destroy === 'function') {
//         editor.destroy();
//       }
//     };
//   }, [setEditorData]);

//   return (
//     <div
//       ref={editorRef}
//       id="editorjs"
//       style={{ border: '1px solid #ccc', padding: '10px' }}
//     />
//   );
// };
// EditorComponent.propTypes = {
//   setEditorData: PropTypes.func.isRequired,
// }

// // export default EditorComponent;