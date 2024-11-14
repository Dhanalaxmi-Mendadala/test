import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoryData } from "./MyStories";
import GenerateTime from "./Date";
import parse from 'html-react-parser';
import DropDown from "../components/svg/dropdown.svg";
import PropTypes from 'prop-types';

function Drafts() {
  const { stories, deleteDraft } = useContext(StoryData);
  const drafts = stories.drafts;
  return (
    <>
      <div className="drafts-container">
        {drafts.length === 0 ? (
          <p>No Drafts yet,please create</p>
        ) : (
          <div className="all-drafts-unit">
            {drafts.map((draft, i) => (
              <div className="draft-unit" key={i}>
                <DraftContainer draft={draft} deleteDraft={deleteDraft}></DraftContainer>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
const DraftContainer = ({ draft, deleteDraft }) => {
  const navigator = useNavigate();
  const [dropDownFlag, setDropDownFLag] = useState(false);
  function makeDropDown(value) {
    setDropDownFLag(value);
  }
  const [deleteDraftFlag, setDeleteDraftFlag] = useState(false);
  function makePopup(value) {
    setDeleteDraftFlag(value)
  }
  console.log(draft, 'at individual draft container')
  return (
    <>
      <div className="draft-data-container">
        <div className="draft-data">
          <h2 className="draft-title">{parse(draft["title"])}</h2>
          <p>
            Last modified <GenerateTime time={draft["last_modified"]} />
          </p>
        </div>
        <div className="options-draft">
          <div className="options-container">
            <img src={DropDown} onClick={() => makeDropDown(true)}></img>
          </div>
          <div className="options-main-container">
            <div className={dropDownFlag ? "drop-down-menu" : "hidden"}>
              <p className="edit-draft" onClick={() =>
                navigator("/addstory", {
                  state: {
                    id: draft["id"],
                    content: draft["content"],
                  },
                })
              }>Edit Draft</p>
              <p className="delete-draft" onClick={() => makePopup(true)}>Delete Draft</p>
            </div>
          </div>
        </div>
      </div>
      {
        deleteDraftFlag &&
        <DeleteDraft makePopup={makePopup} makeDropDown={makeDropDown} id={draft['id']} deleteDraft={deleteDraft} />
      }
    </>
  );
};
DraftContainer.propTypes = {
  draft: PropTypes.object.isrequired,
  deleteDraft: PropTypes.bool.isrequired
}

function DeleteDraft({ makePopup, id, deleteDraft, makeDropDown }) {
  console.log(id, 'deleted id recived at pop up')
  return (
    <>
      <div className="delete-draft-outer" onClick={() => makePopup(false)}>
        <div className="delete-draft-container" onClick={(e) => e.stopPropagation()}>
          <p className="cancel" id="close" onClick={() => makePopup(false)} >&times;</p>
          <div className="heading-container">
            <h3 className="confirmation-heading">Are You Sure?</h3>
          </div>
          <div className="buttons-container">
            <button className="delete-draft-button" onClick={() => {
              deleteDraft(id);
              makePopup(false);
              makeDropDown(false);
            }}>Delete Draft</button>
            <button className="cancel" onClick={() => makePopup(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}
DeleteDraft.propTypes = {
  makePopup: PropTypes.func.isrequired,
  makeDropDown: PropTypes.func.isrequired,
  deleteDraft: PropTypes.func.isrequired,
  id: PropTypes.number.isRequired
}


export default Drafts;


