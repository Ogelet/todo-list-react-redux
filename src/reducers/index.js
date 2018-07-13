import { CHANGE_TEXT_FILTER } from '../constants';

const initialState = {
    textFilter: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT_FILTER:
            return { ...state, textFilter: action.payload };
        default:
            return state;
    }
}