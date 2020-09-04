import {actionTypes} from '../actions/actionTypes';

export default function cityIds(state = [], action)
{
    switch (action.type) {
        case actionTypes.CITY_IDS:
            let ids = state.filter((id, index) => id !== action.id && index < 4);
            window.localStorage.setItem('historyIds', [action.id, ...ids]);
            return [action.id, ...ids];
        default:
            break;
    }

    return state;
};