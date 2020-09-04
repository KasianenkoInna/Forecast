import {actionTypes} from '../actions/actionTypes';

export default function curentWeather(state = new Map(), action)
{
    switch (action.type) {
        case actionTypes.SET_WEATHER_FOREAST:
            let map = new Map();
            state.forEach((value, key) => map.set(+key, value));
            if(!map.has(+action.id)) {
                map.set(+action.id, action.weather);
                return map;
            }
            return map;

        default:
            break;
    }

    return state;
};