import { createStore, combineReducers } from 'redux';
import history from './history';
import cityList from '../reducer/cityList'
import cities from '../config/city.list.json';
import cityWeather from '../reducer/cityWeather';
import curentWeather from  '../reducer/curentWeather';
import forecast from '../reducer/forecast';
import  cityIds from '../reducer/cityIds';
let ids = localStorage.getItem('historyIds');
if (!!ids) {
    ids = ids.split(',').map(id => +id);
}

console.log(typeof ids);


export default () => {
    return {
        history: history,
        store: createStore(
            combineReducers({
                'cityList': cityList,
                'cityWeather': cityWeather,
                'curentWeather': curentWeather,
                'forecast': forecast,
                'cityIds': cityIds
            }),
            {
                'cityList': cities,
                'curentWeather': new Map(),
                'forecast': new Map(),
                'cityIds': ids ? ids : []
            }
        )
    };
};
