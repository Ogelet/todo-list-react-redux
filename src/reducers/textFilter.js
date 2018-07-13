import {
    CHANGE_TEXT_FILTER,
} from '../constants';

export default function (state = '', action) {
    switch (action.type) {
        case CHANGE_TEXT_FILTER:
            return action.payload;
        default:
            return state;
    }
}