import PropTypes from "prop-types";
import "../css/response.css";
import { useState } from "react";

const Heading = ({ responseCount, closePopUp }) => {
  return (<div className="responses-heading">
    <h2 className="heading-wiht-count">{`Responses ${responseCount}`}</h2>
    <h1 onClick={() => closePopUp(false)}>&times;</h1>
  </div>)
}
Heading.propTypes = {
  responseCount: PropTypes.number.isRequired,
  closePopUp: PropTypes.func.isRequired
}

const ResponseInput = () => {
  const [response, setResponse] = useState('');
  return (
    <>
      <textarea placeholder="write your response here" value={response} rows={5} cols={20}
        onChange={(e) => setResponse(e.target.value)} />
      <div className="action-buttons">
        <button className="cancel-button" onClick={() => setResponse('')}>Clear</button>
        <button className="respond-button" disabled={!response}>Respond</button>
      </div>
    </>
  )
}


function ResponseofStory(props) {
  console.log(props, 'recieved props to respowcpsdcnswn')
  return <div id="response-outer" onClick={() => props.setopenResponse(false)}>
    <div id="response" onClick={(e) => { e.stopPropagation() }}>
      <div className="heading-unit">
        <Heading responseCount={props.responsesCount.current} closePopUp={props.setopenResponse} />
      </div>
      <div className="response-input">
        <ResponseInput />
      </div>

    </div>
  </div>
}
ResponseofStory.propTypes = {
  setopenResponse: PropTypes.func.isRequired,
  responsesCount: {
    current: PropTypes.number.isRequired,
  }
}
export default ResponseofStory;