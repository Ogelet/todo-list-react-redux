import React, {Component} from "react";
import Input from './../presentational/Input';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { changeTextFilter, addTodo } from '../../actions';

class InputContainer extends Component {
    addItemHandler = () => {
        this.props.addTodo(this.props.textFilter);
    }

    handleChange = (event) => {
        this.props.changeTextFilter(event.target.value);
    }

    handleKeyPress = (event) => {
        if (this.props.textFilter && event.charCode === 13) {
            this.props.addItemHandler(this.props.textFilter);
        }
    }

    clearInputHandler = () => {
        this.props.changeTextFilter('');
    }

    render() {
        return (
            <Input
                value={this.props.textFilter}
                onKeyPress={this.handleKeyPress}
                handleChange={this.handleChange}
                addItemHandler={this.addItemHandler}
                clearInputHandler={this.clearInputHandler}
            />
        );
    }
}


InputContainer.propTypes = {
    addTodo: PropTypes.func.isRequired,
    changeTextFilter: PropTypes.func.isRequired,
    textFilter: PropTypes.string.isRequired,
};

export default connect(
    state => ({ textFilter: state.textFilter }),
    {
        changeTextFilter,
        addTodo,
    }
)(InputContainer);