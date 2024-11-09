import moment from "moment";
import PropTypes from "prop-types";
const formatDate = (dateString) => {
    return moment(dateString).format('MMM D, YYYY');
};

const DateComponent = ({ dateString }) => {
    console.log(dateString);
    return (<span className="publishedTime">{formatDate(dateString)} </span>);
 };
DateComponent.propTypes={
    dateString:PropTypes.string.isRequired,
}
export default DateComponent;