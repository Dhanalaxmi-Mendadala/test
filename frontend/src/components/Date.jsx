import moment from "moment";
import PropTypes from "prop-types";
const formatDate = (dateString) => {
  return moment(dateString).format('MMM D, YYYY');
};

const DateComponent = ({ dateString }) => {
  console.log(dateString);
  return (<span className="publishedTime">{formatDate(dateString)} </span>);
};
DateComponent.propTypes = {
  dateString: PropTypes.string.isRequired,
}

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

export { GenerateTime };
export default DateComponent;