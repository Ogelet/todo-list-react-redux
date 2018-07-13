import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { summarySelector } from '../../selectors';

const Summary = ({summaryCount, completedCount}) => (
    <Fragment>
        <p>All: {summaryCount}</p>
        <p>Completed: {completedCount}</p>
        <p>Incompleted: {summaryCount - completedCount}</p>
    </Fragment>
);


Summary.propTypes = {
    summaryCount: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
};

export default connect(
    summarySelector,
)(Summary);
