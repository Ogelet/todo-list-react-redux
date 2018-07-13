import React, {Component} from "react";
import TodoItemContainer from "./TodoItemContainer";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { todosSelector } from '../../selectors';

class TodoItemListContainer extends Component {
    render() {
        return (
                this.props.todoItems.map(
                (todoItem) =>
                    <TodoItemContainer
                        key={todoItem.id}
                        todoItem={todoItem}
                    />
            )
        )
    }
}


TodoItemListContainer.propTypes = {
    todoItems: PropTypes.array.isRequired,
};


export default connect(
    todosSelector,
)(TodoItemListContainer);