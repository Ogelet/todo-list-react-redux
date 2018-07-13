import {
    CHANGE_TEXT_FILTER,
    CHANGE_COMPLETED_FILTER,
} from '../constants';

export const changeTextFilter = text => ({
    type: CHANGE_TEXT_FILTER,
    payload: text,
}); 

export const changeCompletedFilter = filter => ({
    type: CHANGE_COMPLETED_FILTER,
    payload: filter,
});