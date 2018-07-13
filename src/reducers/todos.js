import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
} from '../constants';

let idCounter = 0;

function createTodo(text) {
    return { id: idCounter++, text, isCompleted: false };
}

function todo(state = {}, action) {
    switch (action.type) {
        case ADD_TODO:
            return createTodo(action.payload);
        case TOGGLE_TODO:
            return { ...state, isCompleted: !state.isCompleted };
        case EDIT_TODO:
            return { ...state, text: action.payload.text };
        default:
            return state;
    }
}

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(todo(undefined, action));
        case DELETE_TODO:
            return state.filter(({ id }) => id !== action.payload);
        case TOGGLE_TODO:
            return state.map(todoItem => {
                if (todoItem.id === action.payload) {
                    return todo(todoItem, action);
                }
                return todoItem;
            });
        case EDIT_TODO:
            return state.map(todoItem => {
                if (todoItem.id === action.payload.id) {
                    return todo(todoItem, action);
                }
                return todoItem;
            });
        default:
            return state;
    }
}