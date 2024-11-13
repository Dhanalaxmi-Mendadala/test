import { useContext, useEffect, useState } from "react";
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
const DraftContainer = ({ draft, deleteDraft }) => 
{
  const navigator = useNavigate();
  const [dropDownFlag, setDropDownFLag] = useState(false);
  function toggleDropDown() {
    setDropDownFLag(!dropDownFlag);
  }
  const [deleteDraftFlag, setDeleteDraftFlag] = useState(false);
  function togglePopup() {
    setDeleteDraftFlag(!deleteDraftFlag)
  }

  useEffect(() => {
    return () => {
      setDeleteDraftFlag(false);
      setDropDownFLag(false);
    }
  }, []);
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
            <img src={DropDown} onClick={() => toggleDropDown()}></img>
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
              <p className="delete-draft" onClick={() => togglePopup()}>Delete Draft</p>
            </div>
          </div>
        </div>
      </div>
      {
        deleteDraftFlag &&
        <DeleteDraft togglePopup={togglePopup} id={draft['id']} deleteDraft={deleteDraft} />
      }
    </>
  );
};
DraftContainer.propTypes = {
  draft: PropTypes.object.isrequired,
  deleteDraft: PropTypes.bool.isrequired
}
function DeleteDraft({ togglePopup, id, deleteDraft }) {
  console.log(id, 'deleted id recived at pop up')
  return (
    <>
    <div className="delete-draft-outer" onClick={togglePopup}>
      <div className="delete-draft-container" onClick={(e)=>e.stopPropagation()}>
        <p className="cancel" id="close" onClick={togglePopup} >&times;</p>
        <div className="heading-container">
          <h3 className="confirmation-heading">Are You Sure?</h3>
        </div>
        <div className="buttons-container">
          <button className="delete-draft-button" onClick={() => {
            deleteDraft(id);
            togglePopup();
          }}>Delete Draft</button>
          <button className="cancel" onClick={togglePopup}>Cancel</button>
        </div>
      </div>
      </div>
    </>
  )
}
DeleteDraft.propTypes = {
  togglePopup: PropTypes.object.isrequired,
  deleteDraft: PropTypes.func.isrequired,
  id: PropTypes.number.isRequired
}


export default Drafts;


