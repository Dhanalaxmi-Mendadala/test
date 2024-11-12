import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoryData } from "./MyStories";
import GenerateTime from "./Date";
import DropDown from "../components/svg/dropdown.svg";
import PropTypes from 'prop-types';
import deleteDraft from '../API/deleteDraft'


function Drafts() {
const [deleteDraftFlag, setDeleteDraftFlag] = useState(false);
function deleteDraftFunction () {
  setDeleteDraftFlag(!deleteDraftFlag)
}
function hidden1Function () {
  setDeleteDraftFlag(false)
}
  const stories = useContext(StoryData);
  console.log(stories);
  const drafts = stories.drafts;
  return (
    <>
      <div className="drafts-container">
        {drafts.length === 0 ? (
          <p>No Drafts yet,please create</p>
        ) : (
          <div className="all-drafts-unit">
            {" "}
            {drafts.map((draft, i) => (
              <div className="draft-unit" key={i}>
                <DraftContainer draft={draft} deleteDraftFunction = {deleteDraftFunction} deleteDraftFlag = {deleteDraftFlag} hidden1Function = {hidden1Function} ></DraftContainer>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const DraftContainer = ({ draft, deleteDraftFunction, deleteDraftFlag, hidden1Function }) => {
  const navigator = useNavigate();
  const [dropDownFlag, setDropDownFLag] = useState(false);
  function dropDownFlagFunction() {
    setDropDownFLag(!dropDownFlag);
  }
  const [id, setId] = useState(draft['id']);
  return (
    <>
      <div className="draft-data-container">
        <div
          className="draft-data"
      
        >
          <h2 className="draft-title">{draft["title"]}</h2>
          {console.log(draft)}
          <p>
            Last modified <GenerateTime time={draft["last_modified"]} />
          </p>
        </div>
        <div className="options-draft">
          <div className="options-container">
            <img src={DropDown} onClick={dropDownFlagFunction}></img>
          </div>
          <div className="options-main-container">
          <div className={dropDownFlag ? "drop-down-menu": "hidden"}>
            <p className="edit-draft"  onClick={() =>
            navigator("/addstory", {
              state: {
                id: draft["id"],
                content: draft["content"],
              },
            })
          }>Edit Draft</p>
            <p className="delete-draft" onClick = {
              (e) => {console.log(e.target.name); 
              deleteDraftFunction()
            }} 
            name = {draft['id']}
          >Delete Draft</p>
          </div>
          </div>
        </div>
      </div>
      {
        deleteDraftFlag && 
      <DeleteDraft hidden1Function = {hidden1Function} id={id}></DeleteDraft>
      }
    </>
  );
};

function DeleteDraft ({hidden1Function, id}) {
  console.log(id, 'deleted id')
  return (
    <>
    <div className= "delete-draft-container">
      <p className="cancel" id="close" onClick= {hidden1Function}>&times;</p>
     <div className="heading-container">
     <h3 className="confirmation-heading">Are You Sure?</h3>
     </div>
      <div className="buttons-container">
        <button className="delete-draft-button" onClick={() => {
          deleteDraft(id)
          }}>Delete Draft</button>
        <button className="cancel" onClick= {hidden1Function}>Cancel</button>
      </div>
    </div>
    </>
  )
}

DraftContainer.propTypes = {
  draft: PropTypes.object.isrequired
}

export default Drafts;
