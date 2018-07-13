import completedFilterMap from '../constants/completedFilters';

export function summarySelector(state) {
    return {
        summaryCount: state.todos.length,
        completedCount: state.todos.filter(todo => todo.isCompleted).length,
    }
}


function filterTodosByComletedFilter(todos, filter) {
    switch (filter) {
        case completedFilterMap.showAll:
            return todos;
        case completedFilterMap.showCompleted:
            return todos.filter(todo => todo.isCompleted);
        case completedFilterMap.showIncompleted:
            return todos.filter(todo => !todo.isCompleted);
    }
}

function filterTodosByText(todos, filter) {
    return todos.filter(todo => todo.text.includes(filter));
} 

export function todosSelector(state) {
    return {
        todoItems: filterTodosByText(
            filterTodosByComletedFilter(state.todos, state.completedFilter),
            state.textFilter,
        ),
    };
}