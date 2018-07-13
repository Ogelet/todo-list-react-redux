import React, {Fragment} from "react";
import PropTypes from "prop-types";

const completedFilterDictionary = {
    showAll: null,
    showCompleted: true,
    showIncompleted: false
}


const CompletedFilter = ({setCompletedFilter}) => (
    <Fragment>
        <button onClick={() => setCompletedFilter(completedFilterDictionary.showAll)}>All</button>
        <button onClick={() => setCompletedFilter(completedFilterDictionary.showCompleted)}>Completed</button>
        <button onClick={() => setCompletedFilter(completedFilterDictionary.showIncompleted)}>Incompleted</button>
    </Fragment>
);


CompletedFilter.propTypes = {
    setCompletedFilter: PropTypes.func.isRequired,
};

export default CompletedFilter;
export {completedFilterDictionary};