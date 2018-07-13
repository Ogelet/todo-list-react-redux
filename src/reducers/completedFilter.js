import {
    CHANGE_COMPLETED_FILTER,
} from '../constants';
import completedFiltersMap from '../constants/completedFilters';

export default function (state = completedFiltersMap.showAll, action) {
    switch (action.type) {
        case CHANGE_COMPLETED_FILTER:
            return action.payload;
        default:
            return state;
    }
}