import {
    CHANGE_TEXT_FILTER,
    CHANGE_COMPLETED_FILTER,
} from '../constants';
import completedFiltersMap from '../constants/completedFilters';

const initialState = {
    textFilter: '',
    completedFilter: completedFiltersMap.showAll,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT_FILTER:
            return { ...state, textFilter: action.payload };
        case CHANGE_COMPLETED_FILTER:
            return { ...state, completedFilter: action.payload };
        default:
            return state;
    }
}