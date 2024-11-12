import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoryData } from "./MyStories";
import GenerateTime from "./Date";
import DropDown from "../components/svg/dropdown.svg";
import PropTypes from 'prop-types';
// import deleteDraft from '../API/deleteDraft'  (uncomment this)


function Drafts() {
  // const [someDrafts, setSomeDrafts] = useState([]);  //just declared 
const [deleteDraftFlag, setDeleteDraftFlag] = useState(false);
function deleteDraftFunction () {
  setDeleteDraftFlag(!deleteDraftFlag)
}
function hidden1Function () {
  setDeleteDraftFlag(false)
}

console.log(hidden1Function)  //remove this line

  const stories = useContext(StoryData);
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
                <DraftContainer draft={draft} deleteDraftFunction = {deleteDraftFunction} deleteDraftFlag = {deleteDraftFlag} ></DraftContainer>  {/* hidden1Function = {hidden1Function}   use this in this line*/}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const DraftContainer = ({ draft, deleteDraftFunction, deleteDraftFlag }) => {  // hidden1Function  (use it in this line in parameter)
  const navigator = useNavigate();
  const [dropDownFlag, setDropDownFLag] = useState(false);
  function dropDownFlagFunction() {
    setDropDownFLag(!dropDownFlag);
  }
  const [id, setId] = useState(draft['id']);
  console.log(setId)
  console.log(typeof id,'id')
  console.log(typeof hidden1Function,'id')
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
      <DeleteDraft  id={id}></DeleteDraft> //hidden1Function = {hidden1Function}  (use this before id)
      }
    </>
  );
};

function DeleteDraft () {  //hidden1Function and id (use  this is in parameter)
  //  console.log(id, 'deleted id')
  return (
    <>
    <div className= "delete-draft-container">
      <p className="cancel" id="close" >&times;</p> {/* onClick= {hidden1Function}    (use it in this line)*/}
     <div className="heading-container">
     <h3 className="confirmation-heading">Are You Sure?</h3>
     </div>
      <div className="buttons-container">
        <button className="delete-draft-button" onClick={() => {
          // deleteDraft(id)   (uncomment this)
          }}>Delete Draft</button>
        <button className="cancel" >Cancel</button>   {/* onClick= {hidden1Function}    (use it in this line)*/}
      </div>
    </div>
    </>
  )
}

DraftContainer.propTypes = {
  draft: PropTypes.object.isrequired,
  deleteDraftFunction: PropTypes.func.isrequired,
  deleteDraftFlag: PropTypes.bool.isrequired,
  hidden1Function: PropTypes.func.isrequired,
  setId: PropTypes.func.isrequired,
  id: PropTypes.number.isrequired,
}

export default Drafts;
