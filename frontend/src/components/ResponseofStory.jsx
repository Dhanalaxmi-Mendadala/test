import PropTypes from "prop-types";
import "../css/response.css"
function ResponseofStory(props){
    return <div id="response-outer" onClick={()=>props.setopenResponse(false)}>
        <div id="response" onClick={(e)=>{e.stopPropagation()}}>
        <h1>Responses</h1> <h1 onClick={()=>props.setopenResponse(false)}>&times;</h1>
        <div >Response</div>
        <input type="text"/>
        </div>
    </div>
}
ResponseofStory.propTypes={
    setopenResponse:PropTypes.func.isRequired,
}
export default ResponseofStory;