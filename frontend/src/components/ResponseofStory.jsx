import PropTypes from "prop-types";
import "../css/response.css";
import { useEffect, useState } from "react";
import getResponses from "../API/getResponse";
import { RelativeTime } from "./Date";
import { postResponse } from "../API/postResponse";
import { useNavigate } from "react-router-dom";

const Heading = ({ responseCount, closePopUp }) => {
  return (<div className="responses-heading">
    <h2 className="heading-wiht-count">{`Responses (${responseCount})`}</h2>
    <h1 onClick={() => closePopUp(false)}>&times;</h1>
  </div>)
}
Heading.propTypes = {
  responseCount: PropTypes.number.isRequired,
  closePopUp: PropTypes.func.isRequired
}

const ResponseInput = ({ storyId, reRender }) => {
  const [response, setResponse] = useState('');
  return (
    <div className="response-field">
      <textarea  placeholder="write your response here" value={response} rows={5} cols={20}
        onChange={(e) => setResponse(e.target.value)} />
      <div className="action-buttons">
        <button className="cancel-button" onClick={() => setResponse('')}>Clear</button>
        <button className="respond-button" disabled={!response} onClick={async () => {
          console.log(await postResponse(storyId, response), 1234567890);
          reRender((current) => current + 1);
          setResponse('')
        }
        }
        >Respond</button>
      </div >
    </div>
  )
}
ResponseInput.propTypes = {
  storyId: PropTypes.number.isRequired,
  reRender: PropTypes.func.isRequired,
  spanElement: PropTypes.object.isRequired
}

const ResponseCard = ({ data }) => {
  const navigateTo = useNavigate();
  return <div className="response-card" >
    <div className="response-card-header">
      <div className="responded-user-image">
        <img src={data['avatar_url']} alt="" />
      </div>
      <div className="response-details" onClick={() => {
        navigateTo(`/profile/${data['id']}`)
      }}>
        <p className="responded-user">{data['username']}</p>
        <p className="response-time">{
          <RelativeTime time={data['responded_at']} />}
        </p>
      </div>
    </div>
    <div className="user-response">
      {data['response']}
    </div>
  </div>
}
ResponseCard.propTypes = {
  data: PropTypes.object.isRequired
}

const AllResponse = ({ storyId, status }) => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchResponses = async () => {
      const storyResponses = await getResponses(storyId);
      setResponses(storyResponses);
      setLoading(false);
    }
    fetchResponses();
  }, [status]);
  if (loading) return <p>Responses are loading</p>

  return (<div className="responses-unit">
    {responses.length ?
      responses.map((data, i) => <ResponseCard data={data} key={i} />) :
      <div className="default-message">No responses yet</div>
    }
  </div>)
}
AllResponse.propTypes = {
  storyId: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired
}

const ResponseofStory = (props) => {
  const { responsesCount, setResponsesCount } = props.responseState;
  console.log(props.responseState)

  console.log(props, 'recieved props to respowcpsdcnswn')
  return <div id="response-outer" onClick={() => props.setopenResponse(false)}>
    <div id="response" onClick={(e) => { e.stopPropagation() }}>
      <div className="heading-unit">
        <Heading responseCount={responsesCount} closePopUp={props.setopenResponse} />
      </div>
      <div className="response-input">
        <ResponseInput storyId={props.storyId} reRender={setResponsesCount} />
      </div>
      <div className="all-responses">
        <AllResponse storyId={props.storyId} status={responsesCount} />
      </div>
    </div>
  </div>
}
ResponseofStory.propTypes = {
  setopenResponse: PropTypes.func.isRequired,
  storyId: PropTypes.number.isRequired,
  responseState: PropTypes.object.isRequired
}

export default ResponseofStory;