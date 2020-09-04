import {actionTypes} from '../actions/actionTypes';

export default function cityList(state = [], action)
{
    switch (action.type) {
        case actionTypes.CITY_LIST:
            return action.cities;
        default:
            break;
    }

    return state;
};