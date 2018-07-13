import React, {Component} from "react";
import TodoItem from "../presentational/TodoItem";
import PropTypes from "prop-types";


class TodoItemContainer extends Component {
    constructor({todoItem}) {
        super();

        this.state = {
            isModifiable: false
        }
    }

    toggleIsModifiable = () => {
        this.setState({isModifiable: !this.state.isModifiable});
    };

    render() {
        const todoItem = this.props.todoItem;

        return <TodoItem
            isCompleted={todoItem.isCompleted}
            isModifiable={this.state.isModifiable}
            text={todoItem.text}
            removeTodoItemHandler = {this.props.removeTodoItemHandler}
            editTodoItemHandler = {this.props.editTodoItemHandler}
            toggleIsModifiable = {this.toggleIsModifiable}
            toggleCompletedHandler = {this.props.toggleCompletedHandler}
        />
    }
}


TodoItemContainer.propTypes = {
    todoItem: PropTypes.object.isRequired,
    toggleCompletedHandler: PropTypes.func.isRequired,
    removeTodoItemHandler: PropTypes.func.isRequired,
    editTodoItemHandler: PropTypes.func.isRequired,
};

export default TodoItemContainer;