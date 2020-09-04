import {actionTypes} from '../actions/actionTypes';
import { setCityWeather , setWeatherForecast} from '../actions/actions';
import { forecastApi } from  '../api/api';

export default function cityWeather(state = [], action)
{
    switch (action.type) {
        case actionTypes.GET_CITY_WEATHER:
            forecastApi.getCurentWeather(action.id).then(weather => {
                action.dispatch(setCityWeather(weather, action.id));
                return weather;
            });
            return state;
        case actionTypes.GET_WEATHER_FOREAST:
            forecastApi.getWeatherForecast(action.id, action.coord).then(weather => {
                action.dispatch(setWeatherForecast(weather, action.id));
                return weather;
            });
            return state;
        default:
            break;
    }

    return state;
};