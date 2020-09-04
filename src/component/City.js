import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import DetailedWeatherDaily from './DetailedWeatherDaily';
import {getWeatherForecast} from '../actions/actions';
import {useHistory} from "react-router";

 const City = (props) => {
     const history = useHistory();
     const dispatch = useDispatch();
     const id = +props.match.params.id;
     const cities = useSelector(state => state.cityList);

     const forecast = useSelector(state => state.forecast);

     useEffect(() => {
         if(undefined === forecast.get(id)) {
             let city = cities.find(city => +city.id === +id);
             dispatch(getWeatherForecast(id, city.coord, dispatch));
         }
     }, []);

     if(undefined === forecast.get(id)) {
         return <div>...Loading...</div>
     }

     return(<div className='forecast-wrapper'>
        <div className='back-btn' onClick={e => history.goBack()}>Back</div>
         {forecast.get(id).daily.map(weather => <DetailedWeatherDaily key={weather.dt} weather={weather}/>)}
        </div>)
};
export default City;