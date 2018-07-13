import React, {Component} from "react";
import TodoItemContainer from "./TodoItemContainer";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import completedFilterDictionary from '../../constants/completedFilters';


class TodoItemListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filteredTodoItems: []
        };

    }


    toggleCompletedHandler = (id) => {
        this.props.toggleCompletedHandler(id);
    };

    addTodoItemHandler = (id) => {
        this.props.addTodoItemHandler(id);
    };

    removeTodoItemHandler = (id) => {
        this.props.removeTodoItemHandler(id);
    };

    editTodoItemHandler = (id,text) => {
        this.props.editTodoItemHandler(id, text);
    };


    isFilterMatched = (todoItemText) => todoItemText.match(new RegExp(this.props.textFilter, 'i'))

    render() {
        return (
                this.props.todoItems.filter(
                    (todoItem) =>
                        this.isFilterMatched(todoItem.text)
                        && (
                            todoItem.isCompleted === this.props.completedFilter
                            || this.props.completedFilter === completedFilterDictionary.showAll
                        )
                ).map(
                (todoItem) =>
                    <TodoItemContainer
                        key={todoItem.id}
                        todoItem={todoItem}
                        addTodoItemHandler={(evt) => this.addTodoItemHandler(todoItem.id, evt.target.value)}
                        toggleCompletedHandler={(evt) => this.toggleCompletedHandler(todoItem.id, evt.target.value)}
                        removeTodoItemHandler={(evt) => this.removeTodoItemHandler(todoItem.id, evt.target.value)}
                        editTodoItemHandler={(evt) => this.editTodoItemHandler(todoItem.id, evt.target.value)}
                    />
            )
        )
    }
}


TodoItemListContainer.propTypes = {
    textFilter: PropTypes.string.isRequired,
    completedFilter: PropTypes.any,
    todoItems: PropTypes.array.isRequired,
    addTodoItemHandler: PropTypes.func.isRequired,
    toggleCompletedHandler: PropTypes.func.isRequired,
    removeTodoItemHandler: PropTypes.func.isRequired,
    editTodoItemHandler: PropTypes.func.isRequired,
};


export default connect(
    state => ({
        textFilter: state.textFilter,
        completedFilter: state.completedFilter,
    }),
)(TodoItemListContainer);