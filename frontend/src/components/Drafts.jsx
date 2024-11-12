import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoryData } from "./MyStories";
import GenerateTime from "./Date";
import DropDown from "../components/svg/dropdown.svg";

function Drafts() {
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
                <DraftContainer draft={draft}></DraftContainer>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const DraftContainer = ({ draft }) => {
  const navigator = useNavigate();
  const [dropDownFlag, setDropDownFLag] = useState(false);
  function dropDownFlagFunction() {
    setDropDownFLag(!dropDownFlag);
  }
  return (
    <>
      <div className="draft-data-container">
        <div
          className="draft-data"
          onClick={() =>
            navigator("/addstory", {
              state: {
                id: draft["id"],
                content: draft["content"],
              },
            })
          }
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
          <div className={dropDownFlag ? "drop-down-menu " : "hidden"}>
            <p className="edit-draft">Edit Draft</p>
            <p className="delete-draft">Delete Draft</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drafts;
