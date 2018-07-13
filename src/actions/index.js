import {
    CHANGE_TEXT_FILTER,
    CHANGE_COMPLETED_FILTER,
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    EDIT_TODO,
} from '../constants';

export const changeTextFilter = text => ({
    type: CHANGE_TEXT_FILTER,
    payload: text,
}); 

export const changeCompletedFilter = filter => ({
    type: CHANGE_COMPLETED_FILTER,
    payload: filter,
});

export const addTodo = text => ({
    type: ADD_TODO,
    payload: text,
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: id,
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: id,
});

export const editTodo = (id, text) => ({
    type: EDIT_TODO,
    payload: {
        id,
        text,
    },
}); 