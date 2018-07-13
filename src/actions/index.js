import { CHANGE_TEXT_FILTER } from '../constants';

export const changeTextFilter = text => ({
    type: CHANGE_TEXT_FILTER,
    payload: text,
}); 