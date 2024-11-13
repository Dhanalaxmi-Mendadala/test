import { useState } from "react";
import "../css/publishPopup.css";
import publishStory from "../API/publishStory";
import { useNavigate } from "react-router-dom";
function PublishDraft({ draftId, openPopup }) {
    const navigate=useNavigate();
    const [tags, addTags] = useState([]);
    const [tagName, setTagName] = useState('');
    // const [filename,setFileName]=useState(null);
    // const encodeFileToBase64 = (file) => { 
    //     const reader = new FileReader();
    //      reader.readAsDataURL(file);
    //       reader.onloadend = () => { 
    //         const base64String = reader.result.split(',')[1]; 
    //         setFileName(base64String);
    //         }; };
    // const handleFileChange = (event) => { 
    //     const file = event.target.files[0];
    //     encodeFileToBase64(file);
    //      console.log(filename);
    //       };
    return <div className="publish-outer" onClick={() => openPopup(false)}>
        <div className="publish-popup" onClick={(e) => e.stopPropagation()}>
            <p onClick={() => openPopup(false)}>&times;</p>
            <div><p>Tags:</p><ol>{tags.map((tag) => <li>{tag}</li>)}</ol></div>
            <span>Tags:</span>
            <input type="text" value={tagName} onInput={(e) => { setTagName(e.target.value) }} />
            <button onClick={() => {
                tags.length < 5 && tagName.length !== 0 && addTags([...tags, tagName]);
                setTagName('');
            }}>Add tag</button>
            <button onClick={() => { addTags([]) }}>Clear</button>
            {/* <div>
                <span>Cover-Image</span>:<input type="file" accept="image/*"onChange={(e)=>{handleFileChange(e)}} />
                <span>{filename&&filename.name}</span>
            </div> */}
            <button onClick={async()=>{
              await publishStory(draftId,tags);
              navigate(`/storypage/${draftId}`);
            }}>Publish</button>
        </div>
    </div>
}
export default PublishDraft;