import { actionTypes } from './actionTypes';

export const cityList = (cities) => ({type: actionTypes.CITY_LIST, cities: cities});

export const getCityWeather= (id, dispatch) => ({
    type: actionTypes.GET_CITY_WEATHER,
    id: id,
    dispatch: dispatch
});

export const setCityWeather = (weather, id) => ({type: actionTypes.SET_CITY_WEATHER, weather: weather, id: id});

export const getWeatherForecast = (id, coord, dispatch) => ({
    type: actionTypes.GET_WEATHER_FOREAST,
    id: id,
    coord: coord,
    dispatch: dispatch
});

export const setWeatherForecast = (weather, id) => ({type: actionTypes.SET_WEATHER_FOREAST, weather: weather, id: id});

export const addCityIds = (id, dispatch) => ({type: actionTypes.CITY_IDS, id: id, dispatch: dispatch});


