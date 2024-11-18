import { useState } from "react";
import "../css/publishPopup.css";
import publishStory from "../API/publishStory";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
function PublishDraft({ draftId, openPopup }) {
  const navigate = useNavigate();
  const [tags, addTags] = useState([]);
  const [tagName, setTagName] = useState("");
  const [filename, setfilename] = useState(null);
  return (
    <div className="publish-outer" onClick={() => openPopup(false)}>
      <div className="publish-popup" onClick={(e) => e.stopPropagation()}>
        <p onClick={() => openPopup(false)} className="publish-popup-close">
          &times;
        </p>
        <div className="publish-your-story">Publish Your Story</div>
        <div className="tags-input-main-container">
         {tags.length<5&&<> <label htmlFor = 'input-label'>Tag name:</label>
        <input
            id="input-label"
            type="text"
            className="tags-input"
            placeholder="Enter Tag"
            value={tagName}
            onInput={(e) => {
              setTagName(e.target.value);
            }}
          /></>}
        </div>
        <p className="tags-name">Given Tags:</p>
        <div className="tags-main-container">
          <ol className="tags-list-container">
            {tags.map((tag, i) => (
              <li className="tags" key={i}>
                {tag}
              </li>
            ))}
          </ol>
        </div>
        <div className="tags-data">
          <div className="tags-buttons-container">
          {tags.length < 5&&<button
              className="tags-add-tag-button"
              onClick={() => {
                tags.length < 5 &&
                  tagName.length !== 0 &&
                  addTags([...tags, tagName]);
                setTagName("");
              }}
            >
              Add tag
            </button>}
            <button
              className="tags-clear-button"
              onClick={() => {
                addTags([]);
              }}
            >
              Clear
            </button>
            <div>
                <span>Cover-Image</span>:<input type="file" accept="image/*"onChange={(e)=>{setfilename(e.target.files[0])}} />
                <span>{filename&&filename.name}</span>
            </div>
            <button
            // disabled={tags.length === 0}
              className="tags-publish-button"
              onClick={async () => {
                await publishStory(draftId, tags, filename);
                navigate(`/story/${draftId}`);
              }}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
PublishDraft.propTypes = {
  draftId: PropTypes.number.isRequired,
  openPopup: PropTypes.func.isRequired,
};
export default PublishDraft;
