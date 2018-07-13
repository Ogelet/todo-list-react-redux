import { combineReducers } from 'redux';

import todos from './todos';
import textFilter from './textFilter';
import completedFilter from './completedFilter';

export default combineReducers({
    todos,
    textFilter,
    completedFilter,
});