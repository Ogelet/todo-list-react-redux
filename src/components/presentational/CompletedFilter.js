import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { changeCompletedFilter } from '../../actions';
import completedFiltersMap from '../../constants/completedFilters';

class CompletedFilter extends React.Component {
    setAll = () => {
        this.props.changeCompletedFilter(
            completedFiltersMap.showAll
        );
    }

    setCompleted = () => {
        this.props.changeCompletedFilter(
            completedFiltersMap.showCompleted
        );
    }

    setIncompleted = () => {
        this.props.changeCompletedFilter(
            completedFiltersMap.showIncompleted
        );
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.setAll}>All</button>
                <button onClick={this.setCompleted}>Completed</button>
                <button onClick={this.setIncompleted}>Incompleted</button>
            </Fragment>
        );
    }
}


CompletedFilter.propTypes = {
    changeCompletedFilter: PropTypes.func.isRequired,
};

export default connect(
    null,
    { changeCompletedFilter },
)(CompletedFilter);