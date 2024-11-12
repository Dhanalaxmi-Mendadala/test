import PropTypes from "prop-types";
import "../css/response.css";
import { useEffect, useState } from "react";
import getResponses from "../API/getResponse";
import { RelativeTime } from "./Date";
import { postResponse } from "../API/postResponse";

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

const ResponseInput = ({ storyId, reRender, spanElement }) => {
  const [response, setResponse] = useState('');
  return (
    <>
      <input style={{height:'40px'}} placeholder="write your response here" value={response} rows={5} cols={20}
        onChange={(e) => setResponse(e.target.value)} />
      <div className="action-buttons">
        <button className="cancel-button" onClick={() => setResponse('')}>Clear</button>
        <button className="respond-button" disabled={!response} onClick={async () => {
          console.log(await postResponse(storyId, response), 1234567890);
          reRender((current) => current + 1);
          setResponse('')
          spanElement.current += 1;
        }
        }
        >Respond</button>
      </div >
    </>
  )
}
ResponseInput.propTypes = {
  storyId: PropTypes.number.isRequired,
  reRender: PropTypes.func.isRequired,
  spanElement: PropTypes.object.isRequired
}

const ResponseCard = ({ data }) => {
  return <div className="response-card" >
    <div className="response-card-header">
      <div className="responded-user-image">
        <img src={data['avatar_url']} alt="" />
      </div>
      <p className="responded-user">{data['username']}</p>
      <p className="response-time">{
        <RelativeTime time={data['responded_at']} />}
      </p>
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
  const [responseCount, setResponseCount] = useState(props.responsesCount.current);

  console.log(props, 'recieved props to respowcpsdcnswn')
  return <div id="response-outer" onClick={() => props.setopenResponse(false)}>
    <div id="response" onClick={(e) => { e.stopPropagation() }}>
      <div className="heading-unit">
        <Heading responseCount={responseCount} closePopUp={props.setopenResponse} />
      </div>
      <div className="response-input">
        <ResponseInput storyId={props.storyId} reRender={setResponseCount} spanElement={props.responseCount} />
      </div>
      <div className="all-responses">
        <AllResponse storyId={props.storyId} status={responseCount} />
      </div>
    </div>
  </div>
}
ResponseofStory.propTypes = {
  setopenResponse: PropTypes.func.isRequired,
  storyId: PropTypes.number.isRequired,
  responseCount: PropTypes.object.isRequired,
  responsesCount: {
    current: PropTypes.number.isRequired,
  }
}
export default ResponseofStory;