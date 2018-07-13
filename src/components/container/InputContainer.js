import React, {Component} from "react";
import Input from './../presentational/Input';
import PropTypes from "prop-types";

class InputContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    addItemHandler = () => {
        this.props.addItemHandler(this.state.text);
    }

    handleChange = (event) => {
        this.setState({text: event.target.value}, () => {
            this.props.filterItemsHandler(this.state.text);
        });
    }

    handleKeyPress = (event) => {
        if (this.state.text && event.charCode === 13) {
            this.props.addItemHandler(this.state.text);
        }
    }

    clearInputHandler = () => {
        this.setState({text: ''});
        this.props.clearTextFilter();
    }

    render() {
        return (
            <Input
                value={this.state.text}
                onKeyPress={this.handleKeyPress}
                handleChange={this.handleChange}
                addItemHandler={this.addItemHandler}
                clearInputHandler={this.clearInputHandler}
            />
        );
    }
}


InputContainer.propTypes = {
    addItemHandler: PropTypes.func.isRequired,
    filterItemsHandler: PropTypes.func.isRequired,
    clearTextFilter: PropTypes.func.isRequired
};

export default InputContainer;