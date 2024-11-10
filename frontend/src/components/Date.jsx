import moment from "moment";
import PropTypes from "prop-types";

const GenerateTime = ({ time }) => {
  const publishedTime = moment(time);
  const timeDifference = moment().diff(publishedTime, 'days');
  const relativeTime = timeDifference > 7 ? publishedTime.format('MMM D YYYY') : publishedTime.fromNow();
  console.log(relativeTime)
  return (
    <p>{relativeTime}</p>
  )
}
GenerateTime.propTypes = {
  time: PropTypes.string.isRequired
}

export default GenerateTime;