function ResponseofStory(props){
    return <div id="response-outer" onClick={()=>props.setopenResponse(false)}>
        <div id="response">
        <div ><h1>Responses</h1> <h5 onClick={()=>props.setopenResponse(false)}>&times;</h5></div>
        <div >Response</div>
        </div>
    </div>
}
ResponseofStory.propTypes={
    setopenResponse:PropTypes.func.isRequired,
}
export default ResponseofStory;