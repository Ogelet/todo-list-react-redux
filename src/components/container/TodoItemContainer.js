import React, {Component} from "react";
import TodoItem from "../presentational/TodoItem";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import {
    toggleTodo,
    deleteTodo,
    editTodo,
} from '../../actions';


class TodoItemContainer extends Component {
    constructor() {
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
            removeTodoItemHandler = {this.props.deleteTodo}
            editTodoItemHandler = {this.props.editTodo}
            toggleIsModifiable = {this.toggleIsModifiable}
            toggleCompletedHandler = {this.props.toggleTodo}
        />
    }
}


TodoItemContainer.propTypes = {
    todoItem: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
};

export default connect(
    null,
    (dispatch, ownprops) => ({
        toggleTodo: () => dispatch(toggleTodo(ownprops.todoItem.id)),
        deleteTodo: () => dispatch(deleteTodo(ownprops.todoItem.id)),
        editTodo: e => dispatch(editTodo(ownprops.todoItem.id, e.target.value)),
    }),
)(TodoItemContainer);